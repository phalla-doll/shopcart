'use client';

import React from 'react';
import { Phone, Search, User, ShoppingCart, ChevronDown, Menu } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onNavigate: (view: 'home' | 'detail' | 'checkout') => void;
}

export default function Header({ cartCount, onNavigate }: HeaderProps) {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#003d29] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            <span>+001234567890</span>
          </div>
          <div className="hidden sm:block">
            Get 50% Off on Selected Items | <span className="font-semibold cursor-pointer">Shop Now</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer">
              Eng <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              Location <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-[#003d29] text-white rounded-full flex items-center justify-center font-bold text-lg">
              S
            </div>
            <span className="text-xl font-bold text-[#003d29]">Shopcart</span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 font-medium text-sm">
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#003d29]">
              Categories <ChevronDown className="w-4 h-4" />
            </div>
            <div className="cursor-pointer hover:text-[#003d29]">Deals</div>
            <div className="cursor-pointer hover:text-[#003d29]">What&apos;s New</div>
            <div className="cursor-pointer hover:text-[#003d29]">Delivery</div>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
              <input 
                type="text" 
                placeholder="Search Product" 
                className="bg-transparent border-none outline-none text-sm w-full"
              />
              <Search className="w-4 h-4 text-gray-500" />
            </div>
            
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#003d29]">
              <User className="w-5 h-5" />
              <span className="hidden sm:block text-sm font-medium">Account</span>
            </div>
            
            <div 
              className="flex items-center gap-2 cursor-pointer hover:text-[#003d29] relative"
              onClick={() => onNavigate('checkout')}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:block text-sm font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            <Menu className="w-6 h-6 lg:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}
