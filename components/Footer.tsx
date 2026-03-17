import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#003d29] text-white rounded-full flex items-center justify-center font-medium text-lg">
                S
              </div>
              <span className="text-xl font-medium text-[#003d29]">Shopcart</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              We provide the best quality products to our customers. Our goal is to ensure customer satisfaction and deliver the best shopping experience.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#003d29] hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#003d29] hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#003d29] hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#003d29] hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-[#003d29] text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#003d29] text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#003d29] text-sm transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#003d29] text-sm transition-colors">Login</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#003d29] text-sm transition-colors">Sign Up</a></li>
            </ul>
          </div>

          {/* Customer Area */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-gray-900">Customer Area</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-[#003d29] text-sm transition-colors">My Account</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#003d29] text-sm transition-colors">Orders</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#003d29] text-sm transition-colors">Tracking List</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#003d29] text-sm transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#003d29] text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#003d29] shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm">123 Shopcart Street, New York, NY 10001, United States</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#003d29] shrink-0" />
                <span className="text-gray-500 text-sm">+001 234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#003d29] shrink-0" />
                <span className="text-gray-500 text-sm">support@shopcart.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shopcart. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">Accepted Payments:</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-medium text-gray-500">VISA</div>
              <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-medium text-gray-500">MC</div>
              <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-medium text-gray-500">PP</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
