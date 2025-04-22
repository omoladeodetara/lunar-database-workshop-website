import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PlaceholderImagesExample() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Using Placeholder Images</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Using the placeholder.svg service */}
        <Card>
          <div className="relative h-64">
            <Image
              src="/lunar-outpost-construction.png"
              alt="Lunar Workshop Placeholder"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold mb-2">Generated Placeholder</h3>
            <p className="text-muted-foreground">Using the placeholder service with a query.</p>
          </CardContent>
        </Card>

        {/* Using an external placeholder service */}
        <Card>
          <div className="relative h-64">
            <Image
              src="https://placehold.co/600x400/252525/FFFFFF?text=Lunar+Workshop"
              alt="External Placeholder"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold mb-2">External Placeholder</h3>
            <p className="text-muted-foreground">Using an external placeholder service.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
