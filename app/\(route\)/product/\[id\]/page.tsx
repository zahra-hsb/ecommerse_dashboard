'use client';

import { useState } from 'react';
import Header from '@/components/store/Header';
import Footer from '@/components/store/Footer';
import { useCartStore } from '@/utils/stores/cartStore';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';

const mockProducts: Record<string, any> = {
  '1': {
    id: '1',
    title: 'Elegant Gold Bracelet',
    price: 899,
    originalPrice: 1200,
    rating: 5,
    reviews: 128,
    category: 'jewelry',
    description: 'Premium 18K gold bracelet with diamond accents',
    fullDescription:
      'This stunning 18K gold bracelet features exquisite diamond accents and is perfect for any occasion. Handcrafted by master jewelers, each piece is unique and inspected for quality.',
    specifications: {
      material: '18K Gold',
      weight: '12.5g',
      stone: 'Diamond VS1',
      width: '8mm',
      length: 'Adjustable',
    },
    inStock: true,
    sku: 'GOLD-BRAC-001',
  },
  '2': {
    id: '2',
    title: 'Classic Leather Watch',
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 95,
    category: 'watches',
    description: 'Swiss movement leather watch with sapphire crystal',
    fullDescription:
      'A timeless classic featuring Swiss quartz movement and genuine Italian leather strap. The sapphire crystal is scratch-resistant and the watch is water-resistant up to 50 meters.',
    specifications: {
      movement: 'Swiss Quartz',
      caseSize: '42mm',
      caseBack: 'Stainless Steel',
      strap: 'Italian Leather',
      waterResistance: '50m',
    },
    inStock: true,
    sku: 'WATCH-001',
  },
};

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = mockProducts[productId] || mockProducts['1'];

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity,
    });
    toast.success('Added to cart!');
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen flex flex-col bg-color-background">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-color-muted-foreground">
          <Link href="/shop" className="hover:text-color-primary transition-colors">
            Shop
          </Link>
          <span>/</span>
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-color-primary transition-colors capitalize"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-color-foreground">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="glass-lg rounded-2xl p-8 flex items-center justify-center h-96 lg:h-full min-h-96 bg-gradient-to-br from-color-primary/20 to-color-accent/20">
            <div className="text-center space-y-4">
              <div className="text-8xl">💍</div>
              <p className="text-color-muted">{product.title}</p>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold">{product.title}</h1>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-color-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-current' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-color-muted">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-3 glass rounded-lg hover:bg-color-glass-border transition-all"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isFavorite ? 'fill-color-danger text-color-danger' : 'text-color-muted-foreground'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="glass-lg rounded-xl p-6 space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold gradient-text">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-color-muted line-through">${product.originalPrice.toFixed(2)}</span>
                    <span className="px-3 py-1 bg-color-danger text-white rounded-full text-sm font-bold">
                      -{discount}%
                    </span>
                  </>
                )}
              </div>
              <p className="text-color-success text-sm font-semibold">
                {product.inStock ? '✓ In Stock' : 'Out of Stock'}
              </p>
            </div>

            {/* Description */}
            <div>
              <p className="text-color-foreground text-lg leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="glass rounded-lg p-4 flex items-center gap-4">
                <span className="text-color-muted-foreground">Quantity:</span>
                <div className="flex items-center gap-3 ml-auto">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 glass rounded hover:bg-color-glass-border transition-all flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 glass rounded hover:bg-color-glass-border transition-all flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full py-4 bg-color-primary text-color-background font-bold rounded-lg hover:bg-color-primary-dark transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>

              <button className="w-full py-3 glass rounded-lg hover:bg-color-glass-border transition-all flex items-center justify-center gap-2 font-semibold">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 glass-lg rounded-xl p-6">
              <div className="text-center">
                <Truck className="w-6 h-6 text-color-primary mx-auto mb-2" />
                <p className="text-sm font-semibold">Free Shipping</p>
                <p className="text-xs text-color-muted">On orders over $100</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-color-primary mx-auto mb-2" />
                <p className="text-sm font-semibold">2 Year Warranty</p>
                <p className="text-xs text-color-muted">Full protection</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 text-color-primary mx-auto mb-2" />
                <p className="text-sm font-semibold">30-Day Returns</p>
                <p className="text-xs text-color-muted">No questions asked</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16 glass-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specifications || {}).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center pb-4 border-b border-color-glass-border last:border-0">
                <span className="text-color-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                <span className="font-semibold">{value as string}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass-lg rounded-lg p-4 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">💎</div>
                  <p className="text-sm text-color-muted">Similar Product</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
