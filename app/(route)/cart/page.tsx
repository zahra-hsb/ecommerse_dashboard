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
    <div className="min-h-screen flex flex-col bg-color-background">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="glass-lg rounded-xl p-12 text-center space-y-6">
            <ShoppingBag className="w-16 h-16 text-color-primary mx-auto" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-color-muted-foreground mb-6">
                Discover our collection of premium accessories
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-color-primary text-color-background font-semibold rounded-lg hover:bg-color-primary-dark transition-all"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="glass-lg rounded-lg p-6 flex gap-4 items-start hover:border-color-primary/50 transition-all"
                >
                  {/* Product Image Placeholder */}
                  <div className="w-24 h-24 glass rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-color-primary/20 to-color-accent/20">
                    <ShoppingBag className="w-8 h-8 text-color-primary" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-color-foreground">{item.title}</h3>
                    <p className="text-color-primary font-bold text-lg mt-2">${item.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 glass rounded-lg p-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:text-color-primary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:text-color-primary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-color-danger/20 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-color-danger" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass-lg rounded-xl p-6 space-y-4 sticky top-20">
                <h2 className="text-xl font-bold">Order Summary</h2>

                <div className="space-y-3 border-t border-color-glass-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-color-muted-foreground">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-color-muted-foreground">Shipping</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-color-muted-foreground">Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-color-glass-border pt-4">
                    <span>Total</span>
                    <span className="gradient-text">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full py-3 bg-color-primary text-color-background font-semibold rounded-lg hover:bg-color-primary-dark transition-all block text-center mt-6"
                >
                  Proceed to Checkout
                </Link>

                <button
                  onClick={() => clearCart()}
                  className="w-full py-2 glass rounded-lg hover:bg-color-danger/20 transition-all text-color-danger font-semibold"
                >
                  Clear Cart
                </button>

                <Link
                  href="/shop"
                  className="w-full py-2 glass rounded-lg hover:bg-color-glass-border transition-all text-center block"
                >
                  Continue Shopping
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
