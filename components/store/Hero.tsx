'use client';

import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-50 h-50 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-light/20 rounded-full mix-blend-screen filter blur-3xl opacity-80 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 w-fit">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-semibold">کالکشن های 1405</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="block">استایل خودت رو با</span>
              <span className="gradient-text text-6xl lg:text-7xl">یوتاب</span>
              <span className="block">شگفت انگیز و جذاب کن</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              مجموعه منتخب ما از اکسسوری‌های لوکس را کشف کنید. از جواهرات زیبا گرفته تا ساعت‌های مچی ماندگار، قطعه‌ای بی‌نظیر برای بیان سبک منحصر به فرد خود پیدا کنید.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 group"
              >
                فروشگاه
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/chat"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-lg font-semibold hover:bg-glass-border transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                از هوشا بپرس
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-glass-border">
              <div>
                <p className="text-2xl font-bold gradient-text">500+</p>
                <p className="text-sm text-muted">موردهای جذاب</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">4.9★</p>
                <p className="text-sm text-muted">نظرات مشتریان</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">24h</p>
                <p className="text-sm text-muted">ارسال سریع</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-full min-h-96 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 glass-lg rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full bg-linear-to-br from-primary/20 via-accent/10 to-transparent flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="inline-block p-4 glass rounded-full">
                    <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">AI Shopping Assistant</h3>
                  <p className="text-muted text-sm">Get personalized recommendations powered by AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
