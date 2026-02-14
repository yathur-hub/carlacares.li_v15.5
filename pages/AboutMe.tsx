import React from 'react';

interface AboutMeProps {
  onNavigateToKontakt?: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onNavigateToKontakt }) => {
  const carlaImageUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/Carla.JPG";
  const louiImageUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/Loui.jpeg";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section: Über uns */}
      <section className="bg-white pt-16 md:pt-24 pb-12 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-accentGreen tracking-tight leading-tight">
                Über uns
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-accentBrown uppercase tracking-wider">
                Fachliche Begleitung mit Erfahrung und Haltung
              </h2>
            </div>
            <div className="space-y-6 text-lg md:text-xl text-textDark/70 leading-relaxed">
              <p className="font-semibold text-textDark">
                Mein Name ist Carla Vanessa Carcaiso. Ich bin selbständige ambulante psychiatrische Pflegefachfrau und arbeite im Fürstentum Liechtenstein.
              </p>
              <p>
                Seit über 15 Jahren begleite ich Menschen mit psychischen Erkrankungen in unterschiedlichen Versorgungssettings. Diese langjährige Erfahrung prägt meine Arbeit bis heute: ruhig, fachlich fundiert und alltagsnah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion: Erfahrung aus allen Versorgungsstufen */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="aspect-[4/5] bg-white rounded-[60px] p-4 shadow-xl border border-gray-100 overflow-hidden">
                <img 
                  src={carlaImageUrl} 
                  alt="Carla Vanessa Carcaiso" 
                  className="w-full h-full object-cover rounded-[48px] transition-all duration-700"
                />
             </div>
             {/* Abstract Badge */}
             <div className="absolute -bottom-6 -right-6 bg-accentGreen text-white p-8 rounded-3xl shadow-2xl z-10">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">Jahre Erfahrung</div>
             </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">Erfahrung aus allen Versorgungsstufen</h2>
            <div className="space-y-6 text-lg text-textDark/70 leading-relaxed">
              <p>
                Psychische Erkrankungen zeigen sich selten isoliert. Sie wirken sich auf den Alltag, auf Beziehungen, auf Selbstständigkeit und auf das soziale Umfeld aus. Genau hier setzt meine berufliche Erfahrung an.
              </p>
              <p>
                Über rund sieben Jahre war ich auf der Akut- und Notfallstation der Klinik St. Pirminsberg in Pfäfers tätig, gefolgt von zwei Jahren auf einer Psychotherapiestation am selben Standort. Weitere rund drei Jahre arbeitete ich in der Kinder- und Jugendpsychiatrie der PUK Männedorf. Seit vier Jahren begleite ich Menschen als selbständige ambulante psychiatrische Pflegefachfrau im häuslichen und sozialen Umfeld.
              </p>
              <div className="bg-accentGreen p-8 rounded-2xl border-l-4 border-accentBrown shadow-lg text-white font-medium space-y-4">
                <p>
                  Diese Stationen stehen für ein breites und realistisches Verständnis des psychiatrischen Versorgungsalltags: von akuten Krisen über länger andauernde Belastungssituationen bis hin zu sensiblen Übergangsphasen nach stationären Aufenthalten oder bei instabilen Lebenslagen.
                </p>
                <p>
                  Diese Erfahrung ermöglicht es mir, Situationen differenziert einzuschätzen und Unterstützung dort anzusetzen, wo sie im Alltag tatsächlich Wirkung entfaltet.
                </p>
                <p className="text-accentBrown font-bold italic pt-2 border-t border-white/10">
                  „Mir ist eine Zusammenarbeit auf Augenhöhe wichtig, die Sicherheit gibt und Entwicklung im eigenen Tempo ermöglicht.“
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion: Haltung in der Arbeit (Recovery) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">Haltung in der Arbeit</h2>
            <p className="text-lg text-textDark/70 leading-relaxed">
              Meine Arbeit orientiert sich an einer recovery-orientierten Grundhaltung. Dabei steht nicht die Erkrankung im Zentrum, sondern der Mensch und seine Lebenssituation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Augenhöhe", desc: "Arbeit auf Augenhöhe und partnerschaftliche Zusammenarbeit." },
              { title: "Respekt", desc: "Respekt vor individuellen Lebenswegen und Biografien." },
              { title: "Eigenverantwortung", desc: "Förderung von Selbstständigkeit und Eigenverantwortung." },
              { title: "Kontinuität", desc: "Verlässlichkeit und Kontinuität in der Begleitung." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-secondary/50 rounded-3xl border border-gray-100 hover:bg-accentGreen hover:text-white transition-all group duration-500">
                <div className="w-10 h-10 bg-accentBrown text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-accentGreen transition-colors">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-widest text-xs text-accentGreen group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-sm opacity-70 group-hover:opacity-100">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-accentBrown p-10 rounded-[40px] shadow-xl text-center">
             <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
               "Ich verstehe meine Rolle nicht als ‚Behandlung‘, sondern als fachliche Begleitung im Alltag."
             </p>
          </div>
        </div>
      </section>

      {/* Sektion: Zusammenarbeit mit Fachstellen - Ökosystem Grafik */}
      <section className="py-24 px-6 bg-accentGreen text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Zusammenarbeit mit Fachstellen
            </h2>
            <div className="space-y-6 text-lg opacity-80 leading-relaxed">
              <p>
                Ambulante psychiatrische Pflege ist Teil eines vernetzten Versorgungssystems. Eine enge Zusammenarbeit mit Ärzt:innen, Psychiater:innen, Sozialdiensten und weiteren beteiligten Fachstellen ist daher zentral.
              </p>
              <p>
                Ziel dieser Zusammenarbeit ist eine abgestimmte, kontinuierliche Versorgung, die Versorgungsbrüche vermeidet und Stabilität fördert.
              </p>
            </div>
          </div>

          {/* Ecosystem Visualized */}
          <div className="relative aspect-square flex items-center justify-center">
             {/* Orbital Rings */}
             <div className="absolute w-[85%] h-[85%] border border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
             <div className="absolute w-[65%] h-[65%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

             {/* Connection Lines & Foundation (SVG) */}
             <svg className="absolute w-full h-full" viewBox="0 0 400 400">
                {/* Orbital connecting lines */}
                <line x1="200" y1="200" x2="200" y2="70" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                <line x1="200" y1="200" x2="80" y2="280" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                <line x1="200" y1="200" x2="320" y2="280" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                
                {/* DIE ALLTAGS-LINIE (White) */}
                <line x1="20" y1="196" x2="380" y2="196" stroke="white" strokeWidth="1" opacity="0.4" />
                <text x="380" y="190" fill="white" fontSize="7" fontWeight="bold" textAnchor="end" className="uppercase tracking-[0.2em] opacity-60">Alltag</text>
                
                {/* DIE PFLEGE & BEGLEITUNG-LINIE (Brown) */}
                <line x1="20" y1="204" x2="380" y2="204" stroke="#bc8d4b" strokeWidth="1.5" opacity="0.9" />
                <text x="380" y="218" fill="#bc8d4b" fontSize="7" fontWeight="bold" textAnchor="end" className="uppercase tracking-[0.2em]">Pflege & Begleitung</text>
             </svg>

             {/* Central Node: Klienten */}
             <div className="relative z-20 group">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-transform duration-500 group-hover:scale-110">
                   <span className="text-accentGreen font-bold text-xl md:text-2xl">Klienten</span>
                </div>
                {/* Pulse Effect */}
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
             </div>

             {/* Satellite Node 1: Ärzte */}
             <div className="absolute top-[8%] left-1/2 -translate-x-1/2 z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl transition-all duration-300 hover:bg-white hover:text-accentGreen cursor-default">
                   <span className="font-bold text-sm md:text-base">Ärzte</span>
                </div>
             </div>

             {/* Satellite Node 2: Psychiater */}
             <div className="absolute bottom-[18%] left-[8%] z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl transition-all duration-300 hover:bg-white hover:text-accentGreen cursor-default">
                   <span className="font-bold text-sm md:text-base">Psychiater</span>
                </div>
             </div>

             {/* Satellite Node 3: Sozialdienste */}
             <div className="absolute bottom-[18%] right-[8%] z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl transition-all duration-300 hover:bg-white hover:text-accentGreen cursor-default">
                   <span className="font-bold text-sm md:text-base">Sozialdienste</span>
                </div>
             </div>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accentBrown opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Sektion: Arbeitsweise */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start border-b border-gray-100 pb-24">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">Arbeitsweise</h2>
            <p className="text-lg text-textDark/70 leading-relaxed">
              Die Begleitung erfolgt überwiegend aufsuchend und orientiert sich an der individuellen Situation. Gemeinsam wird geklärt, welche Unterstützung sinnvoll ist und in welchem Umfang.
            </p>
          </div>
          <div className="space-y-6">
             {[
               "Unterstützung ersetzt keine Therapie",
               "Pflege ergänzt ärztliche und therapeutische Behandlungen",
               "Der Alltag bildet den Ausgangspunkt der Arbeit"
             ].map((text, i) => (
               <div key={i} className="flex gap-4 items-center p-6 bg-secondary/30 rounded-2xl border border-gray-50">
                  <div className="w-2 h-2 rounded-full bg-accentBrown"></div>
                  <span className="text-accentGreen font-bold uppercase tracking-widest text-xs">{text}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Sektion: Begleitung auf vier Pfoten (Loui) */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
               <div className="aspect-[4/5] bg-white rounded-[60px] p-4 shadow-xl border border-gray-100 overflow-hidden">
                  <img 
                    src={louiImageUrl} 
                    alt="Hund Loui" 
                    className="w-full h-full object-cover rounded-[48px] object-bottom"
                  />
               </div>
            </div>
            
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight leading-tight">
                  Loui als ruhiger Begleiter
                </h2>
                <div className="w-12 h-1 bg-accentBrown rounded-full"></div>
              </div>

              <div className="space-y-6 text-lg text-textDark/70 leading-relaxed">
                <p>
                  Loui ist mein Mischlingsrüde und begleitet mich bei ausgewählten Einsätzen im Arbeitsalltag. 
                  Seine Anwesenheit ist ruhig, zurückhaltend and stets freiwillig. Sowohl für die betreuten Personen als auch für ihn selbst.
                </p>
                <p>
                  Für manchen Menschen ist es angenehm, wenn ein Hund ruhig im Raum anwesend ist. Loui bewegt sich unaufdringlich im Hintergrund und ist Teil einer normalen Alltagssituation. 
                  Seine Präsenz kann als vertraut und stabilisierend wahrgenommen werden, ohne im Mittelpunkt zu stehen.
                </p>
                <p>
                  Ob Loui bei einer Begleitung anwesend ist, wird immer individuell abgestimmt. Wünsche und Grenzen werden respektiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion: Abschluss */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-secondary/40 p-12 md:p-20 rounded-[60px] border border-gray-50 space-y-8">
             <h3 className="text-2xl md:text-4xl font-bold text-accentGreen leading-tight">
               "Vertrauen entsteht durch Zeit, Klarheit and Verlässlichkeit."
             </h3>
             <p className="text-lg text-textDark/60 max-w-2xl mx-auto">
               Ein persönliches Gespräch kann helfen, die eigene Situation einzuordnen und zu prüfen, ob eine ambulante psychiatrische Begleitung passend ist.
             </p>
             <div className="w-20 h-1 bg-accentBrown mx-auto"></div>
          </div>

          <div className="pt-8">
            <button 
              onClick={onNavigateToKontakt} 
              className="inline-block bg-accentGreen text-white px-10 py-5 rounded-2xl font-bold hover:bg-accentBrown transition-all shadow-xl"
            >
              Persönliches Gespräch anfragen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;