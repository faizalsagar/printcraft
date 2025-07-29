import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function Disclaimer() {
  return (
    <div className="bg-black text-white">
      {/* Top black section with links */}
      <div className="py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300">
          <span>© 2025, Postercraft</span>
          <span className="text-gray-600">•</span>
          <a href="#" className="hover:text-white transition-colors">Refund policy</a>
          <span className="text-gray-600">•</span>
          <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
          <span className="text-gray-600">•</span>
          <a href="#" className="hover:text-white transition-colors">Terms of service</a>
          <span className="text-gray-600">•</span>
          <a href="#" className="hover:text-white transition-colors">Shipping policy</a>
          <span className="text-gray-600">•</span>
          <a href="#" className="hover:text-white transition-colors">Contact information</a>
        </div>
      </div>

      {/* Red disclaimer section */}
      <div className="bg-red-600 relative">
        <div className="py-4 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white text-sm leading-relaxed mb-2">
              All artwork posted on this website is intended as fan art and is not purported to be official merchandise unless indicated otherwise. 
              If you have any issues regarding the artwork, please write to us at{' '}
              <a href="mailto:support@postercraft.in" className="underline hover:no-underline">
                support@postercraft.in
              </a>
            </p>
            <p className="text-white text-xs">
              © Copyright - Powered by{' '}
              <a href="#" className="underline hover:no-underline">
                Postercraft.in
              </a>
            </p>
          </div>
        </div>

        {/* WhatsApp button */}
        <Button
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg z-50 p-0"
          onClick={() => window.open('https://wa.me/1234567890', '_blank')}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
}