import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    reviews: number
    image?: string
  }
  featured?: boolean
}

export function ProductCard({ product, featured }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block rounded-lg border border-neon-blue p-4 hover:shadow-lg hover:shadow-neon-blue/20 transition-shadow"
    >
      <div className="aspect-square overflow-hidden rounded-lg">
        <Image
          src={product.image || "/placeholder.svg?height=400&width=400"}
          alt={product.name}
          width={400}
          height={400}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold group-hover:text-neon-blue transition-colors">{product.name}</h3>
        <div className="flex items-center gap-2">
          {Array.from({ length: product.reviews }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-neon-blue text-neon-blue" />
          ))}
        </div>
        <p className="text-xl font-bold text-neon-blue">₹{product.price.toLocaleString("en-IN")}</p>
      </div>
    </Link>
  )
}

