import { useState } from 'react';
import { OfferBanner } from './components/OfferBanner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductGrid } from './components/ProductGrid';
import { CustomPosterCreator } from './components/CustomPosterCreator';
import { ShoppingCart, CartItem } from './components/ShoppingCart';
import { Footer } from './components/Footer';
import { Disclaimer } from './components/Disclaimer';
import { Product } from './components/ProductCard';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

// Mock product data
const sampleProducts: Product[] = [
  {
    id: '1',
    title: 'Modern Abstract Art - Geometric Shapes',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviewCount: 127,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
    category: 'Abstract',
    isBestseller: true,
  },
  {
    id: '2',
    title: 'Motivational Quote - Dream Big',
    price: 24.99,
    rating: 4.6,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=500&fit=crop',
    category: 'Typography',
    isCustomizable: true,
  },
  {
    id: '3',
    title: 'Mountain Landscape Photography',
    price: 34.99,
    rating: 4.9,
    reviewCount: 203,
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop',
    category: 'Nature',
  },
  {
    id: '4',
    title: 'Vintage Travel Poster - Paris',
    price: 27.99,
    originalPrice: 35.99,
    rating: 4.7,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=500&fit=crop',
    category: 'Vintage',
  },
  {
    id: '5',
    title: 'Botanical Illustration - Monstera',
    price: 22.99,
    rating: 4.5,
    reviewCount: 78,
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=500&fit=crop',
    category: 'Nature',
    isBestseller: true,
  },
  {
    id: '6',
    title: 'Street Art Graffiti Style',
    price: 31.99,
    rating: 4.4,
    reviewCount: 92,
    image: 'https://images.unsplash.com/photo-1578662015905-ec7abb2b3c51?w=400&h=500&fit=crop',
    category: 'Art',
  },
  {
    id: '7',
    title: 'Minimalist Line Art Portrait',
    price: 26.99,
    rating: 4.8,
    reviewCount: 134,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
    category: 'Art',
    isCustomizable: true,
  },
  {
    id: '8',
    title: 'City Skyline at Sunset',
    price: 33.99,
    originalPrice: 42.99,
    rating: 4.6,
    reviewCount: 167,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=500&fit=crop',
    category: 'Photography',
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        toast.success(`Updated ${product.title} quantity in cart`);
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(`Added ${product.title} to cart`);
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.id === productId);
      if (item) {
        toast.success(`Removed ${item.title} from cart`);
      }
      return prevItems.filter(item => item.id !== productId);
    });
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <OfferBanner />
      
      <Header 
        cartItemCount={cartItemCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main>
        <HeroSection />
        
        <ProductGrid 
          products={sampleProducts} 
          onAddToCart={addToCart}
          title="Featured Posters"
        />
        
        <CustomPosterCreator />
        
        <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose PosterCraft?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold">Premium Quality</h3>
                <p className="text-gray-600 text-sm">
                  High-resolution prints on premium paper that last for years
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="font-semibold">Fast Shipping</h3>
                <p className="text-gray-600 text-sm">
                  Free shipping on orders over $50, delivered in 3-5 business days
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold">Custom Designs</h3>
                <p className="text-gray-600 text-sm">
                  Create personalized posters with our easy-to-use design tool
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <Disclaimer />

      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      <Toaster position="bottom-right" />
    </div>
  );
}