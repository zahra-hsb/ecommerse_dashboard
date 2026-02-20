'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/store/Header';
import Footer from '@/components/store/Footer';
import ProductCard from '@/components/store/ProductCard';
import { Loader, Filter } from 'lucide-react';

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

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('featured');
  const [input, setInput] = useState("");



  useEffect(() => {
    // Mock product data
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
      {
        _id: '5',
        title: 'Diamond Necklace',
        description: '14K white gold with VS1 diamond',
        price: 2499,
        category: 'jewelry',
        rating: 5,
        reviews: 45,
      },
      {
        _id: '6',
        title: 'Sport Watch',
        description: 'Water-resistant sports watch',
        price: 449,
        originalPrice: 599,
        category: 'watches',
        rating: 4.6,
        reviews: 72,
      },
      {
        _id: '7',
        title: 'Aviator Sunglasses',
        description: 'Classic aviator style with polarized lenses',
        price: 349,
        category: 'sunglasses',
        rating: 4.8,
        reviews: 109,
      },
      {
        _id: '8',
        title: 'Crossbody Bag',
        description: 'Compact leather crossbody bag',
        price: 349,
        originalPrice: 499,
        category: 'bags',
        rating: 4.5,
        reviews: 64,
      },
    ];
    if (input) {
      setTimeout(() => {
        setProducts(products.filter(product => product.title.toLowerCase().includes(input)))
      }, 2000)
    } else if (input === "") {
      setProducts(mockProducts);
    }
    setLoading(false);
  }, [input]);

  const categories = ['jewelry', 'watches', 'bags', 'sunglasses'];

  let filteredProducts = products;
  if (selectedCategory) {
    filteredProducts = products.filter((p) => p.category === selectedCategory);
  }

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-12">
        <div className="mb-12 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-bold mb-2 ">فروشگاه</h1>
          <p className="text-muted-foreground ">هر محصولی که میخوای رو اینجا پیدا کن</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 shrink-0">
            <div className="space-y-6">
              <input
                value={input}
                placeholder="جستجو..."
                type='search'
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                className="flex-1 w-full glass rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-color-primary transition-all disabled:opacity-50"
              />
              {/* Categories */}
              <div className="glass-lg rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-lg">دسته بندی ها</h3>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${selectedCategory === null
                      ? 'bg-primary text-background'
                      : 'glass hover:bg-glass-border'
                      }`}
                  >
                    همه محصولات
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all capitalize ${selectedCategory === cat
                        ? 'bg-primary text-background'
                        : 'glass hover:bg-glass-border'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="glass-lg rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">مرتب سازی براساس</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full glass rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader className="w-8 h-8 text-primary animate-spin" />
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product._id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="glass-lg rounded-xl p-12 text-center space-y-4">
                <h3 className="text-xl font-bold">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
