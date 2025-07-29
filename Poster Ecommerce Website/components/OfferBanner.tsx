export function OfferBanner() {
  const offerText = "🎉 FREE DELIVERY FOR PREPAID ORDERS! BUY 4 GET 3 FREE! BUY 5 GET 5 FREE! BUY 6 GET 12 FREE! 🎉";
  
  return (
    <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-2 overflow-hidden relative">
      <div 
        className="flex whitespace-nowrap"
        style={{
          animation: 'scroll-right-to-left 30s linear infinite'
        }}
      >
        <span className="text-sm font-medium px-4">{offerText}</span>
        <span className="text-sm font-medium px-4">{offerText}</span>
        <span className="text-sm font-medium px-4">{offerText}</span>
        <span className="text-sm font-medium px-4">{offerText}</span>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-right-to-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `
      }} />
    </div>
  );
}