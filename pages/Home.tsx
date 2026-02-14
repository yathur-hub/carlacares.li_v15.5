
import React from 'react';
import Hero from '../components/Hero';

interface HomeProps {
  onNavigateReferrers: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateReferrers }) => {
  const carlaImageUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/Carla.JPG";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Hero onNavigateReferrers={onNavigateReferrers} />
      
      {/* Sektion: Wenn der Alltag aus dem Gleichgewicht gerät */}
      <section className="py-24 px-6 bg-secondary/30 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">
                Wenn der Alltag aus dem Gleichgewicht gerät
              </h2>
              <div className="w-20 h-1 bg-accentBrown rounded-full"></div>
            </div>
            <div className="space-y-6 text-lg text-textDark/70 leading-relaxed">
              <p>
                Psychische Belastungen zeigen sich oft nicht nur in Gedanken oder Gefühlen, sondern ganz konkret im täglichen Leben. 
                Struktur geht verloren, Termine werden schwierig, Selbstfürsorge fällt schwer oder soziale Kontakte brechen weg.
              </p>
              <p>
                Ambulante psychiatrische Pflege setzt genau hier an. 
                Nicht mit Therapie, sondern mit praktischer Unterstützung im Alltag – angepasst an deine aktuelle Situation und deine Möglichkeiten.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <p className="text-xl md:text-2xl font-bold text-accentGreen leading-tight text-center">
                "Im Mittelpunkt steht nicht eine Diagnose, sondern die Frage: 
                Was brauchst du jetzt, um deinen Alltag bewältigen zu können?"
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-white rounded-[60px] p-4 shadow-xl border border-gray-100">
                <img 
                  src="https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/Gemini_Generated_Image_tmhxectmhxectmhx.png" 
                  alt="Ruhe und Balance" 
                  className="w-full h-full object-cover rounded-[48px]"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Sektion: Was ambulante psychiatrische Pflege bedeutet */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="aspect-[4/5] bg-secondary rounded-[60px] p-4 shadow-xl">
                <img 
                  src="https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/Gemini_Generated_Image_9stdfr9stdfr9std.png" 
                  alt="Was ambulante psychiatrische Pflege bedeutet" 
                  className="w-full h-full object-cover rounded-[48px]"
                />
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">
              Was ambulante psychiatrische Pflege bedeutet
            </h2>
            <div className="space-y-6 text-lg text-textDark/70 leading-relaxed">
              <p>
                Ambulante psychiatrische Pflege ist eine spezialisierte Form der Pflege für Menschen mit psychischen Erkrankungen. 
                Sie richtet sich an Personen, deren Erkrankung die Selbstständigkeit, Alltagsbewältigung oder soziale Teilhabe beeinträchtigt.
              </p>
              <p className="bg-secondary/50 p-6 rounded-2xl border-l-4 border-accentGreen font-medium">
                Die Begleitung erfolgt überwiegend aufsuchend. Das bedeutet: Die Pflege findet dort statt, wo du lebst. 
                So wird Unterstützung auch dann möglich, wenn der Weg in eine Praxis aktuell zu belastend ist.
              </p>
              <p>
                Die Arbeit ist alltagsnah, strukturiert und auf Kontinuität ausgerichtet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion: Keine Therapie – sondern Unterstützung im Alltag */}
      <section className="py-24 px-6 bg-accentGreen text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Keine Therapie – sondern Unterstützung im Alltag</h2>
            <p className="text-xl opacity-70">
              Ambulante psychiatrische Pflege ist keine Psychotherapie und ersetzt diese nicht. 
              Sie versteht sich vielmehr als ergänzende Unterstützung, die Menschen dabei hilft, therapeutische Inhalte im Alltag umzusetzen und Stabilität im täglichen Leben zu fördern.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/10 space-y-6">
                <h3 className="text-2xl font-bold text-white">Psychotherapie</h3>
                <ul className="space-y-4 opacity-80 font-bold">
                  <li className="flex gap-3">
                    <span className="text-accentBrown">•</span>
                    <span>Arbeitet an innerpsychischen Prozessen, Mustern und Zusammenhängen</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accentBrown">•</span>
                    <span>Findet in der Regel in einer therapeutischen Praxis oder Institution statt</span>
                  </li>
                </ul>
             </div>
             <div className="bg-white p-10 rounded-[40px] shadow-2xl text-accentGreen space-y-6">
                <h3 className="text-2xl font-bold">Psychiatrische Pflege</h3>
                <p className="text-textDark/70 font-bold">
                  Unterstützt die praktische Umsetzung im Alltag und findet im häuslichen und sozialen Umfeld statt.
                </p>
                <ul className="space-y-4 pt-4 border-t border-gray-100">
                   {[
                     "Unterstützung beim Aufbau oder Erhalt einer Tagesstruktur",
                     "Begleitung im Umgang mit belastenden psychischen Symptomen",
                     "Unterstützung bei der Medikamenteneinnahme nach ärztlicher Anordnung",
                     "Stabilisierung, Orientierung und Entlastung in belastenden Lebensphasen"
                   ].map((item, i) => (
                     <li key={i} className="flex gap-4 items-start">
                        <svg className="w-6 h-6 text-accentBrown flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                        <span className="font-medium">{item}</span>
                     </li>
                   ))}
                </ul>
                <p className="text-sm font-bold pt-4 text-accentBrown leading-relaxed">
                  Oft schafft die pflegerische Begleitung damit erst die Voraussetzungen, damit therapeutische Behandlungen wirksam greifen und nachhaltig im Alltag verankert werden können.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Sektion: Für wen diese Begleitung sinnvoll ist */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">Für wen diese Begleitung sinnvoll ist</h2>
            <p className="text-lg text-textDark/60 max-w-3xl mx-auto">
              Ambulante psychiatrische Pflege richtet sich an Menschen, die im Alltag Unterstützung benötigen – unabhängig davon, ob die Erkrankung akut oder längerfristig besteht.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Alltagsbewältigung", desc: "Der Alltag fühlt sich nicht mehr bewältigbar an." },
              { title: "Strukturverlust", desc: "Struktur, Selbstversorgung oder Termine gelingen kaum noch." },
              { title: "Symptombelastung", desc: "Symptome erschweren das Leben zu Hause." },
              { title: "Nachsorge", desc: "Nach einem Klinikaufenthalt fehlt Stabilität." },
              { title: "Angehörige", desc: "Angehörige stossen an ihre Grenzen." },
              { title: "Individuell", desc: "Bedarf wird individuell and gemeinsam geklärt." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-secondary/30 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-accentBrown/10 rounded-xl flex items-center justify-center text-accentBrown mb-6">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-accentGreen mb-2">{item.title}</h3>
                <p className="text-textDark/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion: Wie die Begleitung im Alltag aussieht */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen mb-6">Wie die Begleitung im Alltag aussieht</h2>
            <p className="text-lg text-textDark/70 max-w-3xl">
              Die Arbeit orientiert sich am Recovery-Ansatz. Dabei geht es nicht primär um Heilung, sondern um ein möglichst selbstbestimmtes Leben trotz psychischer Erkrankung.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-6">
               <span className="text-accentBrown font-black uppercase tracking-widest text-xs">Im gewohnten Umfeld</span>
               <p className="text-textDark/70 leading-relaxed">
                 Die Begleitung findet dort statt, wo dein Alltag ist. So können Belastungen, Ressourcen und Unterstützungsbedarfe realistisch eingeschätzt und gemeinsam bearbeitet werden.
               </p>
            </div>
            <div className="space-y-6">
               <span className="text-accentBrown font-black uppercase tracking-widest text-xs">Auf Augenhöhe</span>
               <p className="text-textDark/70 leading-relaxed">
                 Psychiatrische Pflege arbeitet beziehungsorientiert. Ziele werden gemeinsam definiert, Entscheidungen gemeinsam getroffen. Deine Erfahrungen und dein Erleben stehen im Zentrum.
               </p>
            </div>
            <div className="space-y-6">
               <span className="text-accentBrown font-black uppercase tracking-widest text-xs">Zusammenarbeit</span>
               <p className="text-textDark/70 leading-relaxed">
                 Ambulante psychiatrische Pflege ist Teil des medizinischen Versorgungssystems. Sie arbeitet eng mit behandelnden Ärzt:innen, Psychiater:innen und weiteren Fachstellen zusammen.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion: Warum ambulante Unterstützung Stabilität geben kann */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-accentGreen/5 rounded-[60px] p-12 md:p-20 border border-accentGreen/5">
          <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen mb-12 text-center">Warum ambulante Unterstützung Stabilität geben kann</h2>
          <div className="grid md:grid-cols-2 gap-12">
             <div className="space-y-6 text-lg text-textDark/70 leading-relaxed font-bold">
               <p>Ambulante pflegerische Begleitung kann dabei helfen:</p>
             </div>
             <ul className="space-y-4">
               {[
                 "Krisen frühzeitig zu erkennen und den Umgang damit zu stärken",
                 "Akute Belastungen abzufedern und stationäre Aufenthalte zu vermeiden oder zu verkürzen",
                 "Selbstständigkeit, Alltagskompetenzen und Lebensqualität zu fördern und zu erhalten",
                 "Sicherheit und Orientierung im täglichen Leben zu schaffen",
                 "Angehörige zu entlasten und in herausfordernden Situationen zu unterstützen",
                 "Kontinuität und Verlässlichkeit in der psychiatrischen Versorgung sicherzustellen",
                 "Übergänge zwischen stationärer Behandlung und Alltag behutsam zu begleiten",
                 "Ressourcen sichtbar zu machen und Selbstwirksamkeit zu stärken"
               ].map((text, i) => (
                 <li key={i} className="flex gap-4 font-bold text-accentGreen tracking-tight text-sm border-b border-accentGreen/10 pb-4 last:border-0">
                    <span className="text-accentBrown shrink-0">0{i+1}</span>
                    <span className="leading-tight">{text}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* Sektion: Eingebettet ins Gesundheitssystem in Liechtenstein */}
      <section className="py-24 px-6 bg-white border-t border-gray-50 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">Eingebettet ins Gesundheitssystem in Liechtenstein</h2>
          <div className="space-y-6 text-lg text-textDark/70 leading-relaxed max-w-3xl mx-auto">
            <p>Die Tätigkeit erfolgt ausschliesslich im Fürstentum Liechtenstein und ist Teil der regulären Gesundheitsversorgung.</p>
            <p>
              Ambulante psychiatrische Pflege erfolgt auf ärztliche Anordnung und ist gesetzlich verankert. 
              Die Zusammenarbeit mit Ärzt:innen, Psychiater:innen, Sozialdiensten und weiteren Stellen ist zentraler Bestandteil der Arbeit.
            </p>
          </div>
        </div>
      </section>

      {/* Finaler CTA */}
      <section id="kontakt" className="py-24 px-6 bg-accentGreen text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">Ein erster Schritt kann Orientierung geben</h2>
          <div className="space-y-8">
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              Manchmal hilft ein ruhiges Gespräch, um die eigene Situation besser einzuordnen. 
              Wenn du unsicher bist, ob ambulante psychiatrische Pflege für dich oder deine Angehörigen passend ist, darfst du dich gerne melden.
            </p>

            {/* Personalisierung: Foto & Name */}
            <div className="flex flex-col items-center space-y-4 animate-in fade-in zoom-in duration-1000 delay-300">
               <div className="w-24 h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src={carlaImageUrl} 
                    alt="Carla Vanessa Carcaiso" 
                    className="w-full h-full object-cover"
                  />
               </div>
               <div className="text-center">
                  <p className="text-xl font-bold text-white tracking-wide">Carla Vanessa Carcaiso</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accentBrown">Gründerin & Geschäftsführerin</p>
               </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
             <a href="mailto:carla@carlacares.li" className="bg-white text-accentGreen px-10 py-5 rounded-2xl font-bold text-xl hover:bg-accentBrown hover:text-white transition-all shadow-2xl">
                carla@carlacares.li
             </a>
             <a href="tel:+41791940718" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">
                +41 79 194 07 18
             </a>
          </div>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accentBrown opacity-10 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </section>
    </div>
  );
};

export default Home;
