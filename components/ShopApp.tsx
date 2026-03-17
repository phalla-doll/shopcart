'use client';

import React, { useState } from 'react';
import { products } from '@/lib/data';
import Header from './Header';
import HomeView from './HomeView';
import ProductDetailView from './ProductDetailView';
import CheckoutView from './CheckoutView';

export type Product = typeof products[0];

export type CartItem = {
  product: Product;
  quantity: number;
  color: string;
};

export default function ShopApp() {
  const [currentView, setCurrentView] = useState<'home' | 'detail' | 'checkout'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const navigateTo = (view: 'home' | 'detail' | 'checkout', product?: Product) => {
    setCurrentView(view);
    if (product) {
      setSelectedProduct(product);
    }
    window.scrollTo(0, 0);
  };

  const addToCart = (product: Product, quantity: number, color: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.color === color);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, color }];
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} onNavigate={navigateTo} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'home' && (
          <HomeView onProductClick={(p) => navigateTo('detail', p)} onAddToCart={(p) => addToCart(p, 1, p.colors[0])} />
        )}
        {currentView === 'detail' && selectedProduct && (
          <ProductDetailView product={selectedProduct} onAddToCart={addToCart} onNavigate={navigateTo} />
        )}
        {currentView === 'checkout' && (
          <CheckoutView cart={cart} onNavigate={navigateTo} />
        )}
      </main>
    </div>
  );
}
