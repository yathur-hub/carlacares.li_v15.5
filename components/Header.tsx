import React, { useState } from 'react';

interface HeaderProps {
  currentView: 'home' | 'care' | 'billing' | 'about';
  onNavigate: (view: 'home' | 'care' | 'billing' | 'about' | 'referrers' | 'imprint' | 'privacy' | 'kontakt') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (view: any) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'care', label: 'Pflege & Begleitung' },
    { id: 'about', label: 'Über uns' },
    { id: 'billing', label: 'Abrechnung' },
  ] as const;

  const logoUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/hand%20tree.png";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo Section */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNav('home')}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
               <img 
                 src={logoUrl} 
                 alt="CarlaCares Logo Icon" 
                 className="w-full h-full object-contain"
               />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-accentGreen leading-none group-hover:text-accentBrown transition-colors">CarlaCares</span>
              <span className="text-[10px] md:text-[11px] text-accentBrown font-semibold uppercase tracking-wider">Liechtenstein</span>
            </div>
          </div>

          {/* Persistent Menu Button (Hamburger) */}
          <button 
            className="p-2 text-accentGreen hover:text-accentBrown transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Persistent Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white border-t border-gray-50 absolute w-full shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="max-w-7xl mx-auto flex flex-col p-8 md:p-12 space-y-8 md:space-y-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-2xl md:text-4xl font-bold uppercase tracking-widest text-left transition-all hover:translate-x-2 ${
                  currentView === link.id ? 'text-accentGreen' : 'text-textDark/40 hover:text-accentGreen'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row gap-6 md:gap-12">
               <div className="space-y-2">
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accentBrown">Kontakt</p>
                 <a href="mailto:carla@carlacares.li" className="block text-sm font-bold text-textDark hover:text-accentGreen">carla@carlacares.li</a>
               </div>
               <div className="space-y-2">
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accentBrown">Telefon</p>
                 <a href="tel:+41791940718" className="block text-sm font-bold text-textDark hover:text-accentGreen">+41 79 194 07 18</a>
               </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;