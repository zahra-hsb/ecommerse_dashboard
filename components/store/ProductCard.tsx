'use client';

import Image from 'next/image';
import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  mainImage?: string;
  rating?: number;
  reviews?: number;
  category: string;
  featured?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group h-full">
      <Link href={`/product/${product._id}`}>
        <div className="relative overflow-hidden rounded-xl glass-lg h-80 mb-4 cursor-pointer transition-transform duration-300 hover:scale-105">
          {/* Product Image */}
          <div className="relative w-full h-full bg-gradient-to-br from-color-primary/20 to-color-accent/20 flex items-center justify-center">
            {product.mainImage ? (
              <Image
                src={product.mainImage}
                alt={product.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="text-color-muted text-sm text-center p-4">No Image</div>
            )}
          </div>

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-4 right-4 bg-color-danger text-white px-3 py-1 rounded-full text-sm font-semibold">
              -{discount}%
            </div>
          )}

          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-4 left-4 bg-color-primary text-color-background px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <button className="w-full py-3 bg-color-primary text-color-background font-semibold hover:bg-color-primary-dark transition-colors flex items-center justify-center gap-2 rounded-b-xl">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-2">
        <Link href={`/product/${product._id}`} className="hover:text-color-primary transition-colors">
          <h3 className="text-sm font-semibold line-clamp-2 text-color-foreground">{product.title}</h3>
        </Link>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-2">
            <div className="flex text-color-primary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xs">
                  {i < Math.round(product.rating!) ? '★' : '☆'}
                </span>
              ))}
            </div>
            <span className="text-xs text-color-muted">({product.reviews} reviews)</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-lg font-bold gradient-text">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-color-muted line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="mt-3 w-full py-2 glass rounded-lg hover:bg-color-glass-border transition-all flex items-center justify-center gap-2 text-sm"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-color-danger text-color-danger' : 'text-color-muted-foreground'
            }`}
          />
          {isFavorite ? 'Saved' : 'Save'}
        </button>
      </div>
    </div>
  );
}
