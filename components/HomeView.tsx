'use client';

import React from 'react';
import { ChevronDown, SlidersHorizontal, Heart, Star } from 'lucide-react';
import { products, categories } from '@/lib/data';
import { Product } from './ShopApp';

interface HomeViewProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function HomeView({ onProductClick, onAddToCart }: HomeViewProps) {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-[#fcf0e4] rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden min-h-[400px]">
        <div className="z-10 max-w-lg space-y-6 relative">
          <h1 className="text-4xl md:text-6xl font-medium text-[#003d29] leading-tight">
            Grab Upto 50% Off On Selected Headphone
          </h1>
          <button className="bg-[#003d29] text-white px-8 py-3 rounded-full font-medium hover:bg-[#002b1d] transition-colors">
            Buy Now
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:absolute md:inset-y-0 md:right-0 md:w-1/2 z-0">
          <img 
            src="https://picsum.photos/seed/heroheadphone/800/600" 
            alt="Person with headphones" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap items-center gap-4">
        {['Headphone Type', 'Price', 'Review', 'Color', 'Material', 'Offer'].map((filter) => (
          <button key={filter} className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            {filter} <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        ))}
        <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors ml-auto">
          All Filters <SlidersHorizontal className="w-4 h-4 text-gray-500" />
        </button>
        <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
          Sort by <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>
      </section>

      {/* Product Grid */}
      <section>
        <h2 className="text-2xl font-medium mb-6">Headphones For You!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer" onClick={() => onProductClick(product)}>
              <div className="bg-[#f5f6f8] rounded-2xl relative aspect-square flex items-center justify-center mb-4 overflow-hidden">
                <button 
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm hover:text-red-500 transition-all z-10 opacity-0 group-hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Toggle wishlist logic here
                  }}
                >
                  <Heart className="w-5 h-5 text-gray-400" />
                </button>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-lg text-gray-900">{product.name}</h3>
                  <span className="font-medium text-lg">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < product.rating ? 'fill-green-600 text-green-600' : 'fill-gray-200 text-gray-200'}`} />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>
                <button 
                  className="w-full sm:w-auto mt-4 border border-gray-900 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
