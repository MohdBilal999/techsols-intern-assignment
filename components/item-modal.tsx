"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
// import { sendEnquiryEmail } from "@/lib/actions";
import type { Item } from "@/lib/types";

interface ItemModalProps {
  item: Item | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ItemModal({ item, isOpen, onClose }: ItemModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEnquiring, setIsEnquiring] = useState(false);

  if (!item) return null;

  const allImages = [item.cover_image_url, ...item.additional_images_urls];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  const handleEnquiry = async () => {
  setIsEnquiring(true)
  try {
    const res = await fetch("/api/send-enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemName: item.name,
        itemId: item.id,
      }),
    })

    const result = await res.json()

    if (result.success) {
      toast("Enquiry Sent!", {
        description: "Your enquiry has been sent successfully. We'll get back to you soon.",
      })
    } else {
      toast("Error", {
        description: result.error || "Failed to send enquiry",
      })
    }
  } catch  {
    toast("Error", {
      description: "An unexpected error occurred",
    })
  } finally {
    setIsEnquiring(false)
  }
}


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{item.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Carousel */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={allImages[currentImageIndex] || "/placeholder.svg"}
                alt={`${item.name} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />

              {allImages.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              {allImages.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail strip */}
            {allImages.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                      index === currentImageIndex
                        ? "border-primary"
                        : "border-gray-200"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {item.type}
              </Badge>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="text-sm text-gray-500">
              <p>Added on: {new Date(item.created_at).toLocaleDateString()}</p>
            </div>

            <Button
              onClick={handleEnquiry}
              disabled={isEnquiring}
              className="w-full"
              size="lg"
            >
              <Mail className="w-4 h-4 mr-2" />
              {isEnquiring ? "Sending Enquiry..." : "Enquire"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
