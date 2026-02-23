'use client';

import { useState } from 'react';
import Header from '@/components/store/Header';
import Footer from '@/components/store/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('پیام شما ارسال شد! به زودی در قالب ایمیل به شما پاسخ ارسال خواهد شد.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-color-background">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">با ما در تماس باش</h1>
          <p className="text-xl text-color-muted-foreground max-w-2xl mx-auto">
           پاسخگوی سوال های شما هستیم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-lg rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-color-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">شماره تماس</h3>
                  <Link href="tel:09354345714" className="text-color-muted-foreground">989354345714+</Link>
                  <p className="text-sm text-color-muted"> شنبه تا جمعه - پشتیبانی 24 ساعته</p>
                </div>
              </div>
            </div>

            <div className="glass-lg rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-color-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">ایمیل</h3>
                  <Link href={"mailto:youtab.shop@gmail.com"} className="text-color-muted-foreground">youtab.shop@gmail.com</Link>
                  <p className="text-sm text-color-muted">تا 24 ساعت آینده پاسخگو هستیم</p>
                </div>
              </div>
            </div>

            <div className="glass-lg rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-color-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">نشانی</h3>
                  <p className="text-color-muted-foreground"></p>
                  <p className="text-color-muted-foreground">تهران، شهرقدس</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 glass-lg rounded-xl p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary"
              />
            </div>

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full glass rounded-lg px-4 py-3 text-color-foreground focus:outline-none focus:ring-2 focus:ring-color-primary"
            >
              <option value="" className="text-black">انتخاب موضوع</option>
              <option value="general" className="text-black">عمومی</option>
              <option value="order" className="text-black">پشتیبانی محصول</option>
              <option value="return" className="text-black">بازگشت محصول</option>
              <option value="feedback" className="text-black">ارسال نظر</option>
              <option value="partnership" className="text-black">همکاری باما</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-color-primary text-color-background font-bold rounded-lg hover:bg-color-primary-dark transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? 'درحال ارسال...' : 'ارسال پیام'}
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <section className="glass-lg rounded-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold">سوالات متداول</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2 text-color-primary">شرایط بازگشت محصول چیه؟</h3>
              <p className="text-color-muted-foreground">
                We offer a 30-day return policy on all items. Items must be in original condition with all packaging.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-color-primary">ارسال محصول چقدر طول میکشه؟</h3>
              <p className="text-color-muted-foreground">
                Standard shipping takes 3-5 business days. Express shipping available for 1-2 day delivery.
              </p>
            </div>
            {/* <div>
              <h3 className="font-bold text-lg mb-2 text-color-primary">Are your products authentic?</h3>
              <p className="text-color-muted-foreground">
                Yes, all products are 100% authentic. Premium items include certificates of authenticity.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-color-primary">Do you offer warranty?</h3>
              <p className="text-color-muted-foreground">
                Most items come with a 2-year manufacturer's warranty. Check product details for specifics.
              </p>
            </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
