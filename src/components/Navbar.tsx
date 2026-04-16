import { HardHat, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-red-700 p-2 rounded-lg">
              <HardHat className="w-6 h-6 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-extrabold text-sm sm:text-base tracking-wide">ACHIMWENE</div>
              <div className="text-gray-300 text-xs tracking-widest uppercase">Neat Construction Group</div>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-4 overflow-x-auto scrollbar-hide flex-shrink-0">
            {['Home', 'About Us', 'Services', 'Gallery'].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-gray-300 hover:text-white text-xs sm:text-sm font-medium whitespace-nowrap px-1 sm:px-2 py-1 transition-colors duration-200 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="tel:+260976759948"
              className="flex items-center gap-1 text-xs sm:text-sm text-gray-300 hover:text-green-400 transition-colors duration-200 whitespace-nowrap px-1 sm:px-2"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden md:inline">+260 976 759 948</span>
            </a>
            <button className="bg-green-700 hover:bg-green-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-5 py-2 rounded transition-all duration-200 hover:shadow-lg hover:shadow-green-900/40 whitespace-nowrap flex-shrink-0">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
