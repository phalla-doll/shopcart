'use client';

import React from 'react';
import { ChevronRight, CreditCard, Wallet, CheckCircle2 } from 'lucide-react';
import { CartItem } from './ShopApp';

interface CheckoutViewProps {
  cart: CartItem[];
  onNavigate: (view: 'home' | 'detail' | 'checkout') => void;
}

export default function CheckoutView({ cart, onNavigate }: CheckoutViewProps) {
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="text-center py-24 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
        <button 
          onClick={() => onNavigate('home')}
          className="bg-[#003d29] text-white px-8 py-3 rounded-full font-medium hover:bg-[#002b1d] transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Left Column - Forms */}
      <div className="lg:col-span-2 space-y-8">
        {/* Review Item And Shipping */}
        <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Review Item And Shipping</h2>
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div key={`${item.product.id}-${item.color}-${index}`} className="flex gap-6 items-center border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <div className="bg-[#f5f6f8] rounded-xl w-24 h-24 flex items-center justify-center overflow-hidden shrink-0">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{item.product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Color: <span className="inline-block w-3 h-3 rounded-full border border-gray-300 ml-1 align-middle" style={{ backgroundColor: item.color }} /></p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">${item.product.price.toFixed(2)}</div>
                  <div className="text-sm text-gray-500 mt-1">Quantity: {item.quantity}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Information */}
        <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Delivery Information</h2>
            <button className="text-sm text-[#003d29] font-medium hover:underline">Edit Information</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">Name:</span>
              <span className="font-medium text-gray-900">Wade Warren</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">Address:</span>
              <span className="font-medium text-gray-900">4140 Parker Rd. Allentown, New Mexico 31134</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">City:</span>
              <span className="font-medium text-gray-900">Austin</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">Zip Code:</span>
              <span className="font-medium text-gray-900">85486</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">Mobile:</span>
              <span className="font-medium text-gray-900">+447700900054</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="text-gray-500">Email:</span>
              <span className="font-medium text-gray-900">georgia.young@example.com</span>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column - Summary & Payment */}
      <div className="space-y-8">
        {/* Order Summary */}
        <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
          <div className="flex gap-2 mb-6">
            <input 
              type="text" 
              placeholder="Enter Coupon Code" 
              className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-[#003d29]"
            />
            <button className="bg-[#003d29] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#002b1d] transition-colors">
              Apply coupon
            </button>
          </div>
          <div className="space-y-4 border-b border-gray-100 pb-6 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Shipping</span>
              <span className="font-medium text-gray-900">Free</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-900">Total</span>
            <span className="text-xl font-bold text-[#003d29]">${total.toFixed(2)}</span>
          </div>
        </section>

        {/* Payment Details */}
        <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h2>
          <div className="space-y-4 mb-8">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-[#003d29]">
                <div className="w-2.5 h-2.5 rounded-full bg-transparent" />
              </div>
              <span className="text-sm font-medium text-gray-700">Cash on Delivery</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-[#003d29]">
                <div className="w-2.5 h-2.5 rounded-full bg-transparent" />
              </div>
              <span className="text-sm font-medium text-gray-700">Shopcart Card</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-[#003d29]">
                <div className="w-2.5 h-2.5 rounded-full bg-transparent" />
              </div>
              <span className="text-sm font-medium text-gray-700">Paypal</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 rounded-full border-2 border-[#003d29] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#003d29]" />
              </div>
              <span className="text-sm font-medium text-gray-900">Credit or Debit card</span>
            </label>
          </div>

          <div className="flex gap-2 mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded px-3 py-1 text-xs font-bold text-gray-600">amazon</div>
            <div className="bg-gray-50 border border-gray-200 rounded px-3 py-1 text-xs font-bold text-gray-600">MasterCard</div>
            <div className="bg-gray-50 border border-gray-200 rounded px-3 py-1 text-xs font-bold text-gray-600">VISA</div>
          </div>

          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-700">Email*</label>
              <input 
                type="email" 
                placeholder="Type here..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#003d29]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-700">Card Holder Name*</label>
              <input 
                type="text" 
                placeholder="Type here..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#003d29]"
              />
            </div>
            <button 
              type="button"
              className="w-full bg-[#003d29] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#002b1d] transition-colors mt-4"
            >
              Pay ${total.toFixed(2)}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
