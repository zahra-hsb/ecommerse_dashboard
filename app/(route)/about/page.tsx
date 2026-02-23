'use client';

import Header from '@/components/store/Header';
import Footer from '@/components/store/Footer';
import { Award, Heart, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-color-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-bold">درباره ما</h1>
            <p className="text-xl text-color-muted-foreground max-w-2xl mx-auto">
              یوتاب فروشگاه اکسسوری، آماده خدمت رسانی به شما مردم در سراسر کشور
            </p>
          </div>

          <div className="glass-lg rounded-2xl p-12 space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-color-foreground">
                Founded in 2020, LuxeAccess is dedicated to bringing the finest luxury accessories to discerning customers worldwide. We believe that true luxury is not just about price, but about craftsmanship, quality, and timeless design.
              </p>
              <p className="text-lg leading-relaxed text-color-foreground mt-6">
                Every piece in our collection is carefully curated from master artisans and premium manufacturers who share our commitment to excellence. From elegant jewelry to sophisticated watches, we offer accessories that elevate your style and stand the test of time.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">ارزش های ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-lg rounded-xl p-8 text-center space-y-4">
              <Award className="w-12 h-12 text-color-primary mx-auto" />
              <h3 className="text-xl font-bold">کیفیت بالا</h3>
              <p className="text-color-muted-foreground">
                We only source accessories from premium manufacturers who maintain the highest standards of craftsmanship.
              </p>
            </div>
            <div className="glass-lg rounded-xl p-8 text-center space-y-4">
              <Heart className="w-12 h-12 text-color-primary mx-auto" />
              <h3 className="text-xl font-bold">اصالت</h3>
              <p className="text-color-muted-foreground">
                Every product is guaranteed to be 100% authentic. We provide certificates of authenticity with all premium pieces.
              </p>
            </div>
            <div className="glass-lg rounded-xl p-8 text-center space-y-4">
              <Sparkles className="w-12 h-12 text-color-primary mx-auto" />
              <h3 className="text-xl font-bold">استایل</h3>
              <p className="text-color-muted-foreground">
                Our collection celebrates timeless elegance and contemporary design, ensuring something for every taste.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="glass-lg rounded-xl p-8 text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">500+</div>
              <p className="text-color-muted-foreground">آیتم های باکیفیت</p>
            </div>
            <div className="glass-lg rounded-xl p-8 text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">50K+</div>
              <p className="text-color-muted-foreground">رضایتمندی مشتریان</p>
            </div>
            <div className="glass-lg rounded-xl p-8 text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">4.9★</div>
              <p className="text-color-muted-foreground">میانگین رتبه</p>
            </div>
            <div className="glass-lg rounded-xl p-8 text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">24H</div>
              <p className="text-color-muted-foreground">ارسال سریع</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="glass-lg rounded-2xl p-12 text-center space-y-6">
            <p className="text-xl text-color-foreground leading-relaxed max-w-2xl mx-auto">
              Our team consists of passionate professionals with decades of combined experience in luxury goods, design, and customer service. We are committed to providing an exceptional shopping experience from browsing to after-sale support.
            </p>
            <p className="text-color-muted-foreground">
              Each team member is dedicated to helping you find the perfect accessory and ensuring your complete satisfaction.
            </p>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
