import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Product } from './ProductCard';

export interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function ShoppingCart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: ShoppingCartProps) {
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-4">Add some posters to get started!</p>
                <Button onClick={onClose}>Continue Shopping</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="p-4">
                    <div className="flex gap-4">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-sm leading-tight">{item.title}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveItem(item.id)}
                            className="w-6 h-6 p-0 text-gray-400 hover:text-gray-600"
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                        
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                              className="w-7 h-7 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          
                          <span className="font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Checkout */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-green-600">✓ Free shipping on orders over $50</p>
                )}
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
              
              <Button variant="outline" className="w-full" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}