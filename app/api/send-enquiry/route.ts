import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { itemName, itemId } = await req.json()

    console.log("Sending email for item:", itemName, itemId) // 🔍 Debug

    const { error,  } = await resend.emails.send({
      from: "Inventory System <onboarding@resend.dev>",
      to: ["shaikhmohammedbilal48@gmail.com"],
      subject: `Enquiry for Item: ${itemName}`,
      html: `
        <h2>New Item Enquiry</h2>
        <p><strong>Item:</strong> ${itemName}</p>
        <p><strong>Item ID:</strong> ${itemId}</p>
        <p>Someone has expressed interest in this item.</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error) // 🔍 Log error
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Unexpected error:", err) // 🔍 Catch unexpected errors
    return NextResponse.json({ success: false, error: "Unexpected error" }, { status: 500 })
  }
}
