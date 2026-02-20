'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/store/Header';
import Footer from '@/components/store/Footer';
import { useCartStore } from '@/utils/stores/cartStore';
import { CheckCircle, Loader } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
  });

  const { items, getTotalPrice, clearCart } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();
  };

  if (!mounted) return null;

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen flex flex-col bg-color-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="glass-lg rounded-xl p-12 text-center space-y-6 max-w-md">
            <h2 className="text-2xl font-bold">Cart is Empty</h2>
            <p className="text-color-muted-foreground">Add items to proceed with checkout</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 bg-color-primary text-color-background font-semibold rounded-lg hover:bg-color-primary-dark transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const shippingCost = 15;
  const tax = totalPrice * 0.1;
  const finalTotal = totalPrice + shippingCost + tax;

  if (orderComplete) {
    return (
      <div className="min-h-screen flex flex-col bg-color-background">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="glass-lg rounded-xl p-12 text-center space-y-6 max-w-md animate-fade-in-up">
            <CheckCircle className="w-16 h-16 text-color-success mx-auto" />
            <h1 className="text-3xl font-bold">Order Confirmed!</h1>
            <div className="space-y-2">
              <p className="text-color-muted-foreground">
                Thank you for your purchase. Your order has been confirmed.
              </p>
              <p className="text-color-primary font-semibold">
                Order ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
            <div className="glass rounded-lg p-4 space-y-2 text-left">
              <p className="text-sm">
                <span className="text-color-muted-foreground">Subtotal:</span>
                <span className="float-right">${totalPrice.toFixed(2)}</span>
              </p>
              <p className="text-sm">
                <span className="text-color-muted-foreground">Shipping:</span>
                <span className="float-right">${shippingCost.toFixed(2)}</span>
              </p>
              <p className="text-sm">
                <span className="text-color-muted-foreground">Tax:</span>
                <span className="float-right">${tax.toFixed(2)}</span>
              </p>
              <p className="text-sm font-bold border-t border-color-glass-border pt-2">
                <span>Total:</span>
                <span className="float-right gradient-text">${finalTotal.toFixed(2)}</span>
              </p>
            </div>
            <p className="text-sm text-color-muted-foreground">
              A confirmation email has been sent to {formData.email}
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 bg-color-primary text-color-background font-semibold rounded-lg hover:bg-color-primary-dark transition-all w-full justify-center"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-color-background">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="glass-lg rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-bold">Shipping Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary sm:col-span-2"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary sm:col-span-2"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary"
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary"
                />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-color-foreground focus:outline-none focus:ring-2 focus:ring-color-primary sm:col-span-2"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            {/* Payment Information */}
            <div className="glass-lg rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-bold">Payment Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number (Simulated)"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary w-full"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="cardExpiry"
                    placeholder="MM/YY"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    required
                    className="glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary"
                  />
                  <input
                    type="text"
                    name="cardCVC"
                    placeholder="CVC"
                    value={formData.cardCVC}
                    onChange={handleInputChange}
                    required
                    className="glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary"
                  />
                </div>
                <p className="text-xs text-color-muted-foreground">
                  This is a simulated checkout. No real payments are processed.
                </p>
              </div>
            </div>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-lg rounded-xl p-6 space-y-4 sticky top-20">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="space-y-3 border-b border-color-glass-border pb-4 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-color-muted text-xs">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 py-4 border-b border-color-glass-border">
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
              </div>

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="gradient-text">${finalTotal.toFixed(2)}</span>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isProcessing}
                className="w-full py-3 bg-color-primary text-color-background font-semibold rounded-lg hover:bg-color-primary-dark transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Complete Purchase'
                )}
              </button>

              <Link
                href="/cart"
                className="w-full py-2 glass rounded-lg hover:bg-color-glass-border transition-all text-center block"
              >
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
