export interface Item {
  id: number
  name: string
  type: string
  description: string
  cover_image_url: string
  additional_images_urls: string[]
  created_at: string
  updated_at: string
}

export interface ItemFormData {
  name: string
  type: string
  description: string
  coverImage: File | null
  additionalImages: File[]
}
