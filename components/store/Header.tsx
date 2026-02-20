'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBag, Search, Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-color-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg glass-lg flex items-center justify-center">
              <span className="gradient-text font-bold text-xl">LA</span>
            </div>
            <span className="text-white font-bold hidden sm:inline">LuxeAccess</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/shop" className="text-color-muted-foreground hover:text-color-primary transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-color-muted-foreground hover:text-color-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-color-muted-foreground hover:text-color-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-color-muted-foreground hover:text-color-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link 
              href="/chat" 
              className="hidden sm:flex text-color-muted-foreground hover:text-color-primary transition-colors"
              title="AI Chat Assistant"
            >
              <MessageCircle className="w-5 h-5" />
            </Link>
            <Link 
              href="/cart" 
              className="relative text-color-muted-foreground hover:text-color-primary transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-color-primary text-color-background text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-color-muted-foreground hover:text-color-foreground"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-color-glass-border pt-4">
            <Link href="/shop" className="block text-color-muted-foreground hover:text-color-primary py-2">
              Shop
            </Link>
            <Link href="/about" className="block text-color-muted-foreground hover:text-color-primary py-2">
              About
            </Link>
            <Link href="/contact" className="block text-color-muted-foreground hover:text-color-primary py-2">
              Contact
            </Link>
            <Link href="/chat" className="block text-color-muted-foreground hover:text-color-primary py-2">
              AI Chat
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
