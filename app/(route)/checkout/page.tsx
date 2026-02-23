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
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="glass-lg rounded-xl p-12 text-center space-y-6 max-w-md">
            <h2 className="text-2xl font-bold">سبدخرید خالی است</h2>
            <p className="text-muted-foreground">محصول های مورد نظر خود را به سبدخرید اضافه کنید.</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all"
            >
              ادامه خرید
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
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="glass-lg rounded-xl p-12 text-center space-y-6 max-w-md animate-fade-in-up">
            <CheckCircle className="w-16 h-16 text-success mx-auto" />
            <h1 className="text-3xl font-bold">سفارش شما تایید شد</h1>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                باتشکر از خرید شما. می توانید وارد حساب کاربری خود شده و سفارش خود را پیگیری کنید.
              </p>
              <p className="text-primary font-semibold">
                شناسه سفارش: {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
            <div className="glass rounded-lg p-4 space-y-2 text-left">
              <p className="text-sm">
                <span className="text-muted-foreground">هزینه محصول:</span>
                <span className="float-right">${totalPrice.toFixed(2)}</span>
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">روش ارسال:</span>
                <span className="float-right">${shippingCost.toFixed(2)}</span>
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">مالیات:</span>
                <span className="float-right">${tax.toFixed(2)}</span>
              </p>
              <p className="text-sm font-bold border-t border-glass-border pt-2">
                <span>مجموع:</span>
                <span className="float-right gradient-text">${finalTotal.toFixed(2)}</span>
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              تاییدیه سفارش به ایمیل {formData.email} ارسال شد.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all w-full justify-center"
            >
              ادامه خرید
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="glass-lg rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-bold">آدرس ارسال</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="نام کامل"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="ایمیل"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="شماره تماس"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary sm:col-span-2"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="خیابان"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary sm:col-span-2"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="شهر"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="کدپستی"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {/* <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary sm:col-span-2"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                </select> */}
              </div>
            </div>

            {/* Payment Information */}
            {/* <div className="glass-lg rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-bold">اطلاعات پرداخت</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="شماره کارت"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="glass rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary w-full"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="cardExpiry"
                    placeholder="MM/YY"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    required
                    className="glass rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    name="cardCVC"
                    placeholder="CVC"
                    value={formData.cardCVC}
                    onChange={handleInputChange}
                    required
                    className="glass rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  This is a simulated checkout. No real payments are processed.
                </p>
              </div>
            </div> */}
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-lg rounded-xl p-6 space-y-4 sticky top-20">
              <h2 className="text-xl font-bold">جزییات پرداخت</h2>

              <div className="space-y-3 border-b border-glass-border pb-4 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item._id} className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-muted text-xs">تعداد: {item.quantity}</p>
                    </div>
                    <span className="font-semibold">تومان {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 py-4 border-b border-glass-border">
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
              </div>

              <div className="flex justify-between font-bold text-lg">
                <span>مجموع</span>
                <span className="gradient-text">تومان {finalTotal.toFixed(2)}</span>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isProcessing}
                className="w-full py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all disabled:opacity-50 flex items-center justify-center gap-2"
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
                className="w-full py-2 glass rounded-lg hover:bg-glass-border transition-all text-center block"
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
