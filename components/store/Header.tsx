'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBag, Search, Menu, X, MessageCircle } from 'lucide-react';
import SiteLogo from '../globals/SiteLogo';
import Navigation from './Navigation';
import ThemeToggle from '../globals/ThemeToggle';
import { usePathname } from 'next/navigation';

const mobileMenuItems = [
  { name: "فروشگاه", href: "/shop" },
  { name: "درباره ما", href: "/about" },
  { name: "تماس باما", href: "/contact" },
  { name: "چت با هوش مصنوعی", href: "/chat" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 glass border-b border-glass-border backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <SiteLogo />

          {/* Navigation */}
          <Navigation />

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/chat"
              className="hidden sm:flex text-muted-foreground hover:text-primary transition-colors"
              title="AI Chat Assistant"
            >
              <MessageCircle className="w-5 h-5" />
            </Link>
            <Link
              href="/cart"
              className="relative text-muted-foreground hover:text-primary transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-background text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-glass-border pt-4">
            {mobileMenuItems.map(mobileItem => (
              <Link key={mobileItem.name} href={mobileItem.href} className={`${pathname === mobileItem.href ? "text-primary" : ""} block text-muted-foreground hover:text-primary py-2 duration-300`}>
                {mobileItem.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
