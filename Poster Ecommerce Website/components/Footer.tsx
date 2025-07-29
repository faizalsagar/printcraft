import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">PosterCraft</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transform your space with high-quality posters and custom designs. 
              We bring your walls to life with stunning art and personalized creations.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Browse Posters</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bestsellers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
            
            <div className="space-y-2 text-sm pt-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>1-800-POSTERS</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>hello@postercraft.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to get special offers, new arrivals, and design inspiration.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-white"
              />
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>


      </div>
    </footer>
  );
}