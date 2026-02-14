import React from 'react';
import { ShieldCheck, GraduationCap, Briefcase, Award } from 'lucide-react';
import DBTTool from './DBTTool';

interface HeroProps {
  onNavigateReferrers?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateReferrers }) => {
  const scrollToKontakt = (e: React.MouseEvent) => {
    e.preventDefault();
    // Use the custom navigation logic if it was a deep link, but since we are on Home, just scroll
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/kontakt');
    }
  };

  const trustSignals = [
    { 
      icon: <ShieldCheck className="w-5 h-5" />, 
      text: "Gesundheitsamt FL",
      sub: "Bewilligte Pflegefachperson" 
    },
    { 
      icon: <Briefcase className="w-5 h-5" />, 
      text: "Krankenkassen-Anerkannt",
      sub: "Abrechnung via KVG" 
    },
    { 
      icon: <GraduationCap className="w-5 h-5" />, 
      text: "HF Psychiatrie",
      sub: "Höhere Fachschule" 
    },
    { 
      icon: <Award className="w-5 h-5" />, 
      text: "LKV Mitglied",
      sub: "Mitglied LKV" 
    },
  ];

  return (
    <section className="bg-white pt-8 md:pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-accentGreen leading-[1.1] tracking-tight">
                Unterstützung im Alltag bei psychischen Belastungen
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-accentBrown">
                Ambulante psychiatrische Pflege im Fürstentum Liechtenstein
              </h2>
            </div>
            
            <p className="text-lg md:text-xl font-semibold text-textDark border-l-4 border-accentBrown pl-6">
              Aufsuchend. Alltagsnah. Auf Augenhöhe.
            </p>

            <div className="space-y-6 text-textDark/70 leading-relaxed text-lg max-w-xl">
              <p>
                Psychische Erkrankungen können den Alltag schleichend, aber tiefgreifend verändern.
                Was früher selbstverständlich war, wird anstrengend oder kaum noch bewältigbar.
              </p>
              <p>
                Ambulante psychiatrische Pflege begleitet dich dort, wo dein Leben stattfindet: 
                in deinem Zuhause, in deinem gewohnten Umfeld, in deinem Tempo. 
                Ziel ist Stabilität im Alltag, Orientierung in belastenden Phasen und eine verlässliche fachliche Begleitung.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/kontakt" 
                onClick={scrollToKontakt}
                className="bg-accentGreen text-white px-8 py-4 rounded-xl font-bold hover:bg-accentBrown transition-all shadow-lg hover:shadow-accentBrown/20"
              >
                Erstgespräch vereinbaren
              </a>
              <button 
                onClick={onNavigateReferrers}
                className="border-2 border-accentGreen/10 text-accentGreen px-8 py-4 rounded-xl font-bold hover:bg-secondary transition-all"
              >
                für Zuweisende
              </button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="bg-secondary rounded-[40px] border border-gray-100 shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
              <DBTTool />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 p-4 bg-secondary/40 rounded-2xl border border-gray-100 hover:border-accentBrown/30 hover:bg-white transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accentBrown shadow-sm border border-gray-50 group-hover:scale-110 transition-transform duration-500">
                  {signal.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black uppercase tracking-wider text-accentGreen leading-tight">
                    {signal.text}
                  </span>
                  <span className="text-[10px] text-textDark/50 font-medium">
                    {signal.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;