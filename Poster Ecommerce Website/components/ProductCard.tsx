import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  isCustomizable?: boolean;
  isBestseller?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite?: (productId: string) => void;
  isFavorite?: boolean;
}

export function ProductCard({ product, onAddToCart, onToggleFavorite, isFavorite }: ProductCardProps) {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:scale-[1.02]">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <ImageWithFallback
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isBestseller && (
              <Badge className="bg-orange-500 hover:bg-orange-600">
                Bestseller
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge variant="destructive">
                -{discountPercentage}%
              </Badge>
            )}
            {product.isCustomizable && (
              <Badge variant="secondary">
                Customizable
              </Badge>
            )}
          </div>

          {/* Favorite Button */}
          {onToggleFavorite && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 w-8 h-8 p-0 bg-white/80 hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(product.id);
              }}
            >
              <Heart 
                className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
              />
            </Button>
          )}
        </div>

        <div className="p-4">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
          </div>
          
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onAddToCart(product)}
          className="w-full"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}