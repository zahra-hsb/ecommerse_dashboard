'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import SiteLogo from '../globals/SiteLogo';
import { FaFacebook } from 'react-icons/fa6';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <SiteLogo />
            </div>
            <p className="text-color-muted text-sm">
              زیبایی را از اکسسوری های یوتاب به ارث ببرید
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <BsInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <BsTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">فروشگاه</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="text-muted hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=jewelry" className="text-muted hover:text-primary transition-colors">Jewelry</Link></li>
              <li><Link href="/shop?category=watches" className="text-muted hover:text-primary transition-colors">Watches</Link></li>
              <li><Link href="/shop?category=bags" className="text-muted hover:text-primary transition-colors">Bags</Link></li>
              <li><Link href="/shop?category=sunglasses" className="text-muted hover:text-primary transition-colors">Sunglasses</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">درباره</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-muted hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-muted hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">راه های ارتباطی</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted hover:text-primary transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                hello@luxeaccess.com
              </li>
              <li className="flex items-center gap-2 text-muted hover:text-primary transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-muted hover:text-primary transition-colors">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-glass-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            &copy; {currentYear} Youtaab. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted hover:text-primary transition-colors">
              {/* Privacy Policy */}
            </Link>
            <Link href="#" className="text-muted hover:text-primary transition-colors">
              {/* Terms of Service */}
            </Link>
            <Link href="#" className="text-muted hover:text-primary transition-colors">
              {/* Cookie Settings */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
