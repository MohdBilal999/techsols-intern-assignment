import { Suspense } from "react"
import { ItemsGrid } from "./items-grid"
import { Skeleton } from "@/components/ui/skeleton"

function ItemsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="aspect-square rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      ))}
    </div>
  )
}

export default function ViewItemsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Inventory Items</h1>
        <p className="text-gray-600 text-center">Click on any item to view details</p>
      </div>

      <Suspense fallback={<ItemsGridSkeleton />}>
        <ItemsGrid />
      </Suspense>
    </div>
  )
}
