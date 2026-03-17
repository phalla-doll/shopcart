'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, SlidersHorizontal, Heart, Star } from 'lucide-react';
import { products, categories } from '@/lib/data';
import { Product } from './ShopApp';

interface HomeViewProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function HomeView({ onProductClick, onAddToCart }: HomeViewProps) {
  const [priceFilter, setPriceFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Apply Price Filter
    if (priceFilter === 'under-100') {
      result = result.filter(p => p.price < 100);
    } else if (priceFilter === '100-300') {
      result = result.filter(p => p.price >= 100 && p.price <= 300);
    } else if (priceFilter === 'over-300') {
      result = result.filter(p => p.price > 300);
    }

    // Apply Rating Filter
    if (ratingFilter === '4-up') {
      result = result.filter(p => p.rating >= 4);
    } else if (ratingFilter === '5') {
      result = result.filter(p => p.rating === 5);
    }

    // Apply Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [priceFilter, ratingFilter, sortBy]);

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
        <div className="relative">
          <select 
            className="appearance-none flex items-center gap-2 bg-gray-100 px-4 py-2 pr-10 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors outline-none cursor-pointer"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">Price: All</option>
            <option value="under-100">Under $100</option>
            <option value="100-300">$100 - $300</option>
            <option value="over-300">Over $300</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <div className="relative">
          <select 
            className="appearance-none flex items-center gap-2 bg-gray-100 px-4 py-2 pr-10 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors outline-none cursor-pointer"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
          >
            <option value="all">Review: All</option>
            <option value="4-up">4+ Stars</option>
            <option value="5">5 Stars</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <div className="relative ml-auto">
          <select 
            className="appearance-none flex items-center gap-2 border border-gray-200 px-4 py-2 pr-10 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors outline-none cursor-pointer"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </section>

      {/* Product Grid */}
      <section>
        <h2 className="text-2xl font-medium mb-6">Headphones For You!</h2>
        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No products match your selected filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
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
        )}
      </section>
    </div>
  );
}
