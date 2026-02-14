import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'care' | 'billing' | 'about' | 'referrers' | 'imprint' | 'privacy' | 'kontakt') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const logoUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/hand%20tree.png";

  const handleNavClick = (e: React.MouseEvent, view: any) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(view);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Branding & Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
              <div className="w-12 h-12 flex-shrink-0">
                <img src={logoUrl} alt="CarlaCares Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-accentGreen tracking-tight">CarlaCares</span>
                <span className="text-[10px] text-accentBrown font-black uppercase tracking-widest">Liechtenstein</span>
              </div>
            </div>
            <p className="text-[13px] text-textDark/60 leading-relaxed max-w-xs">
              Professionelle ambulante psychiatrische Pflege im Fürstentum Liechtenstein. Aufsuchend, alltagsnah und auf Augenhöhe.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <div className="group cursor-help relative">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center border border-gray-100 transition-colors group-hover:border-accentBrown/30">
                  <span className="text-[10px] font-black text-accentGreen/40 group-hover:text-accentBrown transition-colors">HF</span>
                </div>
                <span className="absolute -top-8 left-0 bg-accentGreen text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Höhere Fachschule</span>
              </div>
              <div className="group cursor-help relative">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center border border-gray-100 transition-colors group-hover:border-accentBrown/30">
                  <span className="text-[10px] font-black text-accentGreen/40 group-hover:text-accentBrown transition-colors">KVG</span>
                </div>
                <span className="absolute -top-8 left-0 bg-accentGreen text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Krankenpflege-Leistungsverordnung</span>
              </div>
              <div className="group cursor-help relative">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center border border-gray-100 transition-colors group-hover:border-accentBrown/30">
                  <span className="text-[10px] font-black text-accentGreen/40 group-hover:text-accentBrown transition-colors">LKV</span>
                </div>
                <span className="absolute -top-8 left-0 bg-accentGreen text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Mitglied LKV</span>
              </div>
            </div>
          </div>

          {/* Column 2: Patient & Support */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-accentBrown">Angebot & Hilfe</h4>
            <nav className="flex flex-col space-y-3">
              <a href="/pflege-begleitung" onClick={(e) => handleNavClick(e, 'care')} className="text-[14px] text-textDark/70 hover:text-accentGreen transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-accentBrown/30 mr-3 group-hover:bg-accentBrown transition-colors"></span>
                Pflege & Begleitung
              </a>
              <a href="/abrechnung" onClick={(e) => handleNavClick(e, 'billing')} className="text-[14px] text-textDark/70 hover:text-accentGreen transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-accentBrown/30 mr-3 group-hover:bg-accentBrown transition-colors"></span>
                Abrechnung & Kosten
              </a>
              <a href="/ueber-mich" onClick={(e) => handleNavClick(e, 'about')} className="text-[14px] text-textDark/70 hover:text-accentGreen transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-accentBrown/30 mr-3 group-hover:bg-accentBrown transition-colors"></span>
                Über uns
              </a>
              <a href="/kontakt" onClick={(e) => handleNavClick(e, 'kontakt')} className="text-[14px] text-accentBrown hover:text-accentGreen transition-colors flex items-center group font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-accentBrown/30 mr-3 group-hover:bg-accentBrown transition-colors"></span>
                Kontakt anfragen
              </a>
            </nav>
          </div>

          {/* Column 3: Professionals */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-accentBrown">Fachbereich</h4>
            <nav className="flex flex-col space-y-3">
              <a href="/fuer-zuweisende" onClick={(e) => handleNavClick(e, 'referrers')} className="text-[14px] text-textDark/70 hover:text-accentGreen transition-colors flex items-center group font-bold">
                <ExternalLink className="w-3.5 h-3.5 mr-3 text-accentBrown/50 group-hover:text-accentBrown transition-colors" />
                Für Zuweisende
              </a>
              <div className="pt-4 space-y-2">
                <p className="text-[11px] text-textDark/40 uppercase font-black tracking-widest">Zusammenarbeit</p>
                <p className="text-[13px] text-textDark/60 leading-relaxed font-bold">
                  Eng vernetzt mit Ärzten, Psychiateren und Sozialdiensten in der Region.
                </p>
              </div>
            </nav>
          </div>

          {/* Column 4: Contact & Action */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-accentBrown">Direktkontakt</h4>
            <div className="space-y-4">
              <a href="mailto:carla@carlacares.li" className="flex items-center space-x-3 text-[14px] text-textDark/80 hover:text-accentGreen transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accentGreen/5 transition-colors">
                  <Mail className="w-4 h-4 text-accentBrown" />
                </div>
                <span>carla@carlacares.li</span>
              </a>
              <a href="tel:+41791940718" className="flex items-center space-x-3 text-[14px] text-textDark/80 hover:text-accentGreen transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accentGreen/5 transition-colors">
                  <Phone className="w-4 h-4 text-accentBrown" />
                </div>
                <span>+41 79 194 07 18</span>
              </a>
              <div className="flex items-start space-x-3 text-[14px] text-textDark/80">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4 text-accentBrown" />
                </div>
                <div className="flex flex-col">
                  <span>Fürstentum</span>
                  <span>Liechtenstein</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2 text-[11px] text-textDark/40 font-medium">
            <span>&copy; {new Date().getFullYear()} carlacares.li</span>
            <span className="w-1 h-1 rounded-full bg-gray-200"></span>
            <span>Carla Vanessa Carcaiso</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="flex space-x-6 text-[10px] font-black uppercase tracking-widest text-textDark/30">
              <a 
                href="/impressum" 
                onClick={(e) => handleNavClick(e, 'imprint')}
                className="hover:text-accentBrown transition-colors"
              >
                Impressum
              </a>
              <a 
                href="/datenschutz" 
                onClick={(e) => handleNavClick(e, 'privacy')}
                className="hover:text-accentBrown transition-colors"
              >
                Datenschutz
              </a>
            </nav>
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-secondary rounded-full border border-gray-100">
              <ShieldCheck className="w-3 h-3 text-accentGreen/40" />
              <span className="text-[9px] font-bold text-accentGreen/40 uppercase tracking-tighter">Zertifizierte Pflegefachfrau</span>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;