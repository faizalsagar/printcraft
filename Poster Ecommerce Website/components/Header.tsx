import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">PosterCraft</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Posters</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Custom Design</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Categories</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">About</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="w-4 h-4 mr-2" />
              Account
            </Button>
            
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="sm" onClick={onCartClick} className="relative">
              <ShoppingCart className="w-4 h-4" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}