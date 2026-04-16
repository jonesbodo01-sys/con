import { HardHat, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const quickLinks = ['Home', 'About Us', 'Services', 'Gallery'];
const serviceLinks = ['Building Construction', 'Renovations & Remodeling', 'Concrete & Masonry Work'];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/c8.jpg')" }}
      />
      <div className="absolute inset-0 bg-gray-950/92" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-red-700 p-2 rounded-lg">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-white font-extrabold text-base tracking-wide">ACHIMWENE</div>
                <div className="text-gray-400 text-xs tracking-widest uppercase">Neat Construction Group</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Building durable, quality structures across Zambia. Your trusted partner in construction excellence.
            </p>
            <a
              href="tel:+260976759948"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 font-bold text-base transition-colors duration-200 mb-5"
            >
              <Phone className="w-4 h-4" />
              +260 976 759 948
            </a>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 hover:bg-green-700 p-2 rounded-lg transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5 tracking-wide">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                  Services
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                Lusaka, Zambia
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 group-hover:bg-green-400 transition-colors duration-200 flex-shrink-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5 tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-700 group-hover:bg-red-400 transition-colors duration-200 flex-shrink-0" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-green-700 hover:bg-green-600 text-white font-bold text-xs px-6 py-3 rounded tracking-widest transition-all duration-200 hover:shadow-lg hover:shadow-green-900/40 w-full">
              GET A QUOTE
            </button>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-yellow-500 text-sm font-bold tracking-wide text-center sm:text-left">
              READY TO START YOUR CONSTRUCTION PROJECT?{' '}
              <a href="tel:+260976759948" className="hover:text-yellow-300 transition-colors duration-200">
                +260 976 759 948
              </a>
            </p>
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Achimwene Neat Construction Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
