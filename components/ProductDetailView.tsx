'use client';

import React, { useState } from 'react';
import { ChevronRight, Star, Minus, Plus, Truck, RotateCcw } from 'lucide-react';
import { Product } from './ShopApp';

interface ProductDetailViewProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number, color: string) => void;
  onNavigate: (view: 'home' | 'detail' | 'checkout') => void;
}

export default function ProductDetailView({ product, onAddToCart, onNavigate }: ProductDetailViewProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500">
        <span className="cursor-pointer hover:text-gray-900" onClick={() => onNavigate('home')}>Electronics</span>
        <ChevronRight className="w-4 h-4" />
        <span className="cursor-pointer hover:text-gray-900">Audio</span>
        <ChevronRight className="w-4 h-4" />
        <span className="cursor-pointer hover:text-gray-900">Headphones</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-[#f5f6f8] rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#f5f6f8] rounded-xl aspect-square cursor-pointer border-2 border-transparent hover:border-[#003d29] transition-colors overflow-hidden">
                <img 
                  src={`${product.image}?var=${i}`} 
                  alt={`${product.name} view ${i}`} 
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-500">{product.description}</p>
            <div className="flex items-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < product.rating ? 'fill-green-600 text-green-600' : 'fill-gray-200 text-gray-200'}`} />
              ))}
              <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</div>
            <p className="text-sm text-gray-500">Suggested payments with 6 months special financing</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Choose a Color</h3>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-[#003d29]' : 'border-transparent'} shadow-sm`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1 hover:text-[#003d29] transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-1 hover:text-[#003d29] transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="text-sm text-orange-500 font-medium">
              Only <span className="font-bold">12 items</span> Left!<br/>Don&apos;t miss it
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              className="flex-1 bg-[#003d29] text-white px-8 py-3 rounded-full font-medium hover:bg-[#002b1d] transition-colors"
            >
              Buy Now
            </button>
            <button 
              onClick={() => onAddToCart(product, quantity, selectedColor)}
              className="flex-1 border border-[#003d29] text-[#003d29] px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Add to Cart
            </button>
          </div>

          <div className="space-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-500">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Free Delivery</h4>
                <p className="text-sm text-gray-500 underline cursor-pointer">Enter your Postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-500">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Return Delivery</h4>
                <p className="text-sm text-gray-500">Free 30days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
