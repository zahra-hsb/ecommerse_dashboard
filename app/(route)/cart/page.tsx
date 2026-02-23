'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/store/Header';
import Footer from '@/components/store/Footer';
import { useCartStore } from '@/utils/stores/cartStore';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const totalPrice = getTotalPrice();
  const shippingCost = items.length > 0 ? 15 : 0;
  const tax = totalPrice * 0.1;
  const finalTotal = totalPrice + shippingCost + tax;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">سبدخرید</h1>

        {items.length === 0 ? (
          <div className="glass-lg rounded-xl p-12 text-center space-y-6">
            <ShoppingBag className="w-16 h-16 text-primary mx-auto" />
            <div>
              <h2 className="text-2xl font-bold mb-2">سبدخرید خالی است</h2>
              <p className="text-muted-foreground mb-6">
                محصولی که میخواهید را به سبدخرید اضافه کنید.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all"
              >
                ادامه خرید
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="glass-lg rounded-lg p-6 flex gap-4 items-start hover:border-primary/50 transition-all"
                >
                  {/* Product Image Placeholder */}
                  <div className="w-24 h-24 glass rounded-lg flex items-center justify-center shrink-0 bg-linear-to-br from-primary/20 to-accent/20">
                    <ShoppingBag className="w-8 h-8 text-primary" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-primary font-bold text-lg mt-2">${item.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 glass rounded-lg p-2">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item._id)}
                    className="p-2 hover:bg-danger/20 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-danger" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass-lg rounded-xl p-6 space-y-4 sticky top-20">
                <h2 className="text-xl font-bold">جزییات سفارش</h2>

                <div className="space-y-3 border-t border-glass-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">هزینه محصول</span>
                    <span>تومان {totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">هزینه ارسال</span>
                    <span>تومان {shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">مالیات (10%)</span>
                    <span>تومان {tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-glass-border pt-4">
                    <span>مجموع</span>
                    <span className="gradient-text">تومان {finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all block text-center mt-6"
                >
                  ادامه جهت پرداخت
                </Link>

                <button
                  onClick={() => clearCart()}
                  className="w-full py-2 glass rounded-lg hover:bg-danger/20 transition-all text-danger font-semibold"
                >
                  پاک کردن سبدخرید
                </button>

                <Link
                  href="/shop"
                  className="w-full py-2 glass rounded-lg hover:bg-glass-border transition-all text-center block"
                >
                  ادامه خرید در فروشگاه
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
