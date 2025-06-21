"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { addItem } from "@/lib/actions"
import { Upload, Plus, X } from "lucide-react"

const itemTypes = ["Shirt", "Pant", "Shoes", "Sports Gear", "Jacket", "Accessories", "Other"]

export default function AddItemsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [additionalImages, setAdditionalImages] = useState<File[]>([])
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
  })

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCoverImage(file)
    }
  }

  const handleAdditionalImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setAdditionalImages((prev) => [...prev, ...files])
  }

  const removeAdditionalImage = (index: number) => {
    setAdditionalImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.type || !formData.description || !coverImage) {
      toast("Validation Error", {
        description: "Please fill in all required fields and upload a cover image.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const submitFormData = new FormData()
      submitFormData.append("name", formData.name)
      submitFormData.append("type", formData.type)
      submitFormData.append("description", formData.description)
      submitFormData.append("coverImage", coverImage)

      additionalImages.forEach((image) => {
        submitFormData.append("additionalImages", image)
      })

      const result = await addItem(submitFormData)

      if (result.success) {
        toast("Success! ✅",{
          description: "Item successfully added to inventory.",
        })

        // Reset form
        setFormData({ name: "", type: "", description: "" })
        setCoverImage(null)
        setAdditionalImages([])

        // Reset file inputs
        const coverInput = document.getElementById("coverImage") as HTMLInputElement
        const additionalInput = document.getElementById("additionalImages") as HTMLInputElement
        if (coverInput) coverInput.value = ""
        if (additionalInput) additionalInput.value = ""
      } else {
        toast("Error",{
          description: result.error || "Failed to add item",
        })
      }
    } catch  {
      toast("Error",{
        description: "An unexpected error occurred",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Add New Item</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Item Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Item Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Enter item name"
                required
              />
            </div>

            {/* Item Type */}
            <div className="space-y-2">
              <Label htmlFor="type">Item Type *</Label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select item type" />
                </SelectTrigger>
                <SelectContent>
                  {itemTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Item Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                placeholder="Enter detailed description of the item"
                rows={4}
                required
              />
            </div>

            {/* Cover Image */}
            <div className="space-y-2">
              <Label htmlFor="coverImage">Cover Image *</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <div className="space-y-2">
                  <Label
                    htmlFor="coverImage"
                    className="cursor-pointer text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Click to upload cover image
                  </Label>
                  <Input
                    id="coverImage"
                    type="file"
                    accept="image/*"
                    onChange={handleCoverImageChange}
                    className="hidden"
                    required
                  />
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
                {coverImage && <p className="mt-2 text-sm text-green-600">✓ {coverImage.name}</p>}
              </div>
            </div>

            {/* Additional Images */}
            <div className="space-y-2">
              <Label htmlFor="additionalImages">Additional Images (Optional)</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Plus className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <div className="space-y-2">
                  <Label
                    htmlFor="additionalImages"
                    className="cursor-pointer text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Click to upload additional images
                  </Label>
                  <Input
                    id="additionalImages"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleAdditionalImagesChange}
                    className="hidden"
                  />
                  <p className="text-xs text-gray-500">Multiple files allowed</p>
                </div>
              </div>

              {additionalImages.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Selected additional images:</p>
                  <div className="space-y-1">
                    {additionalImages.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <span className="text-sm text-gray-600">{file.name}</span>
                        <Button type="button" variant="ghost" size="sm" onClick={() => removeAdditionalImage(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Adding Item..." : "Add Item"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
