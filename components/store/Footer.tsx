'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-color-glass-border glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg glass-lg flex items-center justify-center">
                <span className="gradient-text font-bold text-xl">LA</span>
              </div>
              <span className="text-white font-bold">LuxeAccess</span>
            </div>
            <p className="text-color-muted text-sm">
              Premium accessories for those who appreciate quality and style.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-color-muted hover:text-color-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-color-muted hover:text-color-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-color-muted hover:text-color-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-color-foreground">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="text-color-muted hover:text-color-primary transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=jewelry" className="text-color-muted hover:text-color-primary transition-colors">Jewelry</Link></li>
              <li><Link href="/shop?category=watches" className="text-color-muted hover:text-color-primary transition-colors">Watches</Link></li>
              <li><Link href="/shop?category=bags" className="text-color-muted hover:text-color-primary transition-colors">Bags</Link></li>
              <li><Link href="/shop?category=sunglasses" className="text-color-muted hover:text-color-primary transition-colors">Sunglasses</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-color-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-color-muted hover:text-color-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-color-muted hover:text-color-primary transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-color-muted hover:text-color-primary transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-color-muted hover:text-color-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-color-foreground">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-color-muted hover:text-color-primary transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                hello@luxeaccess.com
              </li>
              <li className="flex items-center gap-2 text-color-muted hover:text-color-primary transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-color-muted hover:text-color-primary transition-colors">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-color-glass-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-color-muted">
            &copy; {currentYear} LuxeAccess. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-color-muted hover:text-color-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-color-muted hover:text-color-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-color-muted hover:text-color-primary transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
