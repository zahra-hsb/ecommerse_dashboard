'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/store/Header';
import Hero from '@/components/store/Hero';
import Footer from '@/components/store/Footer';
import ProductCard from '@/components/store/ProductCard';
import { Loader } from 'lucide-react';
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

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // For now, we'll use mock data. In production, fetch from API
        const mockProducts: Product[] = [
          {
            _id: '1',
            title: 'Elegant Gold Bracelet',
            description: 'Premium 18K gold bracelet with diamond accents',
            price: 899,
            originalPrice: 1200,
            category: 'jewelry',
            featured: true,
            rating: 5,
            reviews: 128,
          },
          {
            _id: '2',
            title: 'Classic Leather Watch',
            description: 'Swiss movement leather watch with sapphire crystal',
            price: 1299,
            originalPrice: 1599,
            category: 'watches',
            featured: true,
            rating: 4.8,
            reviews: 95,
          },
          {
            _id: '3',
            title: 'Designer Sunglasses',
            description: 'UV protection designer sunglasses',
            price: 399,
            originalPrice: 599,
            category: 'sunglasses',
            featured: true,
            rating: 4.9,
            reviews: 156,
          },
          {
            _id: '4',
            title: 'Premium Leather Bag',
            description: 'Handcrafted Italian leather shoulder bag',
            price: 599,
            originalPrice: 899,
            category: 'bags',
            featured: true,
            rating: 4.7,
            reviews: 87,
          },
        ];
        setFeaturedProducts(mockProducts);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-2xl md:text-4xl font-bold">کالکشن های زیبا</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              زیبایی را از اکسسوری های یوتاب به ارث ببرید
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader className="w-8 h-8 text-primary animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <div
                  key={product._id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300"
            >
              همه محصولات
              ◄
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">دسته بندی ها</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Jewelry', icon: '💎' },
              { name: 'Watches', icon: '⌚' },
              { name: 'Bags', icon: '👜' },
              { name: 'Sunglasses', icon: '🕶️' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/shop?category=${category.name.toLowerCase()}`}
                className="group glass-lg rounded-xl p-8 text-center hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-lg rounded-2xl p-12 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">نمیدونی برای لباسات چه اکسسوری هایی رو انتخاب کنی؟</h2>
            <p className="text-muted-foreground text-lg">
              از هوشا بپرس!
            </p>
            <a
              href="/chat"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300"
            >
              گفت و گو با هوشا
              ◄
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
