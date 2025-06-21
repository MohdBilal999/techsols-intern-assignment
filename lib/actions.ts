"use server"

import { createServerClient } from "./supabase"
import { revalidatePath } from "next/cache"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function addItem(formData: FormData) {
  try {
    const supabase = createServerClient()

    const name = formData.get("name") as string
    const type = formData.get("type") as string
    const description = formData.get("description") as string
    const coverImage = formData.get("coverImage") as File
    const additionalImages = formData.getAll("additionalImages") as File[]

    // Validate required fields
    if (!name || !type || !description || !coverImage) {
      return { success: false, error: "All fields are required" }
    }

    // Upload cover image
    const coverImageName = `cover-${Date.now()}-${coverImage.name}`
    const { error: coverImageError } = await supabase.storage
      .from("item-images")
      .upload(coverImageName, coverImage)

    if (coverImageError) {
      return { success: false, error: "Failed to upload cover image" }
    }

    const {
      data: { publicUrl: coverImageUrl },
    } = supabase.storage.from("item-images").getPublicUrl(coverImageName)

    // Upload additional images
    const additionalImageUrls: string[] = []
    for (const image of additionalImages) {
      if (image.size > 0) {
        const imageName = `additional-${Date.now()}-${Math.random()}-${image.name}`
        const { error: imageError } = await supabase.storage
          .from("item-images")
          .upload(imageName, image)

        if (!imageError) {
          const {
            data: { publicUrl },
          } = supabase.storage.from("item-images").getPublicUrl(imageName)
          additionalImageUrls.push(publicUrl)
        }
      }
    }

    // Insert item into database
    const { data, error } = await supabase
      .from("items")
      .insert({
        name,
        type,
        description,
        cover_image_url: coverImageUrl,
        additional_images_urls: additionalImageUrls,
      })
      .select()
      .single()

    if (error) {
      return { success: false, error: "Failed to save item to database" }
    }

    revalidatePath("/view-items")
    return { success: true, data }
  } catch  {
    return { success: false, error: "An unexpected error occurred" }
  }
}

export async function getItems() {
  try {
    const supabase = createServerClient()

    const { data, error } = await supabase.from("items").select("*").order("created_at", { ascending: false })

    if (error) {
      throw error
    }

    return data
  } catch (error)  {
    console.error("Error fetching items:", error)
    return []
  }
}

export async function sendEnquiryEmail(itemName: string, itemId: number) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Inventory System <onboarding@resend.dev>",
      to: ["internshala@example.com"],
      subject: `Enquiry for Item: ${itemName}`,
      html: `
        <h2>New Item Enquiry</h2>
        <p><strong>Item:</strong> ${itemName}</p>
        <p><strong>Item ID:</strong> ${itemId}</p>
        <p>Someone has expressed interest in this item. Please follow up accordingly.</p>
        <p><em>This email was sent from the Inventory Management System.</em></p>
      `,
    })

    if (error) {
      return { success: false, error: "Failed to send email" }
    }

    return { success: true, data }
  } catch {
    return { success: false, error: "An unexpected error occurred" }
  }
}
