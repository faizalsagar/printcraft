import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px] py-12">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Space with 
              <span className="block text-yellow-300">Stunning Posters</span>
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-lg">
              Discover thousands of high-quality posters or create your own custom designs. 
              From art prints to motivational quotes, we have everything to make your walls amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Shop Posters
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Create Custom Design
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 transform rotate-3">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop"
                    alt="Modern Art Poster"
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=400&fit=crop"
                    alt="Nature Poster"
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-lg p-4 shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=400&fit=crop"
                    alt="Typography Poster"
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1549490349-8643362247b5?w=300&h=400&fit=crop"
                    alt="Abstract Poster"
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}