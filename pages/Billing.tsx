
import React from 'react';

interface BillingProps {
  onNavigateToKontakt?: () => void;
}

const Billing: React.FC<BillingProps> = ({ onNavigateToKontakt }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section: Abrechnung */}
      <section className="bg-white pt-16 md:pt-24 pb-12 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-accentGreen tracking-tight leading-tight">
                Abrechnung
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-accentBrown uppercase tracking-wider">
                Ambulante psychiatrische Pflege als Teil der Grundversorgung
              </h2>
            </div>
            <div className="space-y-6 text-lg md:text-xl text-textDark/70 leading-relaxed">
              <p>
                Ambulante psychiatrische Pflege ist im Fürstentum Liechtenstein Teil der regulären Gesundheitsversorgung. 
                Die Leistungen sind gesetzlich verankert und in die obligatorische Krankenpflegeversicherung eingebettet.
              </p>
              <p className="font-semibold text-accentGreen">
                Die Abrechnung erfolgt nach klar definierten gesetzlichen Vorgaben und setzt eine ärztliche Anordnung voraus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion: Voraussetzungen */}
      <section className="py-20 px-6 bg-secondary/30 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-accentGreen tracking-tight">Voraussetzung für die Abrechnung</h2>
            <div className="space-y-6 text-textDark/70 leading-relaxed text-lg">
              <p>
                Damit ambulante psychiatrische Pflege über die Krankenversicherung abgerechnet werden kann, ist eine ärztliche Verordnung erforderlich. 
                Diese wird in der Regel durch eine Ärztin, einen Arzt oder eine psychiatrische Fachperson ausgestellt.
              </p>
              <p>
                Die Pflege ist dabei eingebettet in ein koordiniertes Versorgungssystem und ergänzt ärztliche und therapeutische Behandlungen.
              </p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 flex items-center justify-center">
             <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-accentGreen/10 rounded-2xl flex items-center justify-center text-accentGreen mx-auto">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <p className="text-accentGreen font-bold uppercase tracking-[0.2em] text-sm">Ärztliche Verordnung notwendig</p>
             </div>
          </div>
        </div>
      </section>

      {/* Sektion: Wie die Abrechnung erfolgt */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">Wie die Abrechnung erfolgt</h2>
            <p className="text-lg text-textDark/70 leading-relaxed">
              Die Abrechnung der ambulanten psychiatrischen Pflege erfolgt gemäss den Bestimmungen der Krankenpflege-Leistungsverordnung. Erfasst werden pflegerische Leistungen nach Art und Zeitaufwand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-8 bg-accentGreen text-white rounded-[32px] shadow-xl space-y-6">
                <h3 className="text-xl font-bold">Krankenversicherung</h3>
                <p className="opacity-80">Die Leistungen werden grundsätzlich von der Krankenversicherung übernommen.</p>
             </div>
             <div className="p-8 bg-secondary/50 rounded-[32px] border border-gray-100 space-y-6">
                <h3 className="text-xl font-bold text-accentGreen">Kostenbeteiligung</h3>
                <p className="text-textDark/60">Es gelten die gesetzlichen Regelungen zur Kostenbeteiligung (Franchise und Selbstbehalt).</p>
             </div>
             <div className="p-8 bg-secondary/50 rounded-[32px] border border-gray-100 space-y-6">
                <h3 className="text-xl font-bold text-accentGreen">Transparenz</h3>
                <p className="text-textDark/60">Es entstehen keine frei vereinbarten Honorare oder Pakete. Abrechnung erfolgt nach gesetzlichen Vorgaben.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Sektion: Welche Leistungen abgerechnet werden können */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">Welche Leistungen abgerechnet werden können</h2>
            <p className="text-lg text-textDark/70 leading-relaxed">
              Die abrechnungsfähigen Leistungen der ambulanten psychiatrischen Pflege sind klar definiert. Der konkrete Umfang richtet sich stets nach dem individuellen Bedarf und der ärztlichen Anordnung.
            </p>
            <div className="bg-accentBrown/10 p-6 rounded-2xl border-l-4 border-accentBrown">
               <p className="text-accentGreen font-bold text-sm">
                 Die Zusammenarbeit mit behandelnden Ärzt:innen und weiteren Fachstellen ist zentral, um eine abgestimmte Versorgung sicherzustellen.
               </p>
            </div>
          </div>

          <div className="space-y-4">
             {[
               { title: "Abklärung", desc: "Abklärung des pflegerischen Unterstützungsbedarfs." },
               { title: "Beratung", desc: "Beratung und Koordination mit beteiligten Fachpersonen." },
               { title: "Stabilisierung", desc: "Pflegerische Unterstützung in belastenden oder instabilen Phasen." },
               { title: "Anleitung", desc: "Anleitung und Unterstützung bei krankheitsbedingten Einschränkungen im Alltag." }
             ].map((item, i) => (
               <div key={i} className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-accentGreen/5 rounded-full flex items-center justify-center text-accentGreen flex-shrink-0 group-hover:bg-accentGreen group-hover:text-white transition-colors">
                     <span className="font-bold">0{i+1}</span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-accentGreen uppercase tracking-widest text-xs mb-1">{item.title}</h3>
                    <p className="text-textDark/70">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Sektion: Zusammenarbeit & Abschluss */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-accentGreen tracking-tight">Zusammenarbeit und Transparenz</h2>
            <p className="text-lg text-textDark/70 leading-relaxed">
              Fragen zur Abrechnung oder zum Ablauf können jederzeit in einem persönlichen Gespräch geklärt werden.
            </p>
          </div>
          
          <div className="bg-secondary/40 p-12 md:p-20 rounded-[60px] border border-gray-50">
             <h3 className="text-2xl md:text-4xl font-bold text-accentGreen leading-tight mb-8">
               "Die Abrechnung der ambulanten psychiatrischen Pflege folgt klaren gesetzlichen Rahmenbedingungen. Sie stellt sicher, dass notwendige Unterstützung im Alltag zugänglich bleibt."
             </h3>
             <div className="w-20 h-1 bg-accentBrown mx-auto"></div>
          </div>

          <div className="pt-8">
            <button 
              onClick={onNavigateToKontakt} 
              className="inline-block bg-accentGreen text-white px-10 py-5 rounded-2xl font-bold hover:bg-accentBrown transition-all shadow-xl"
            >
              Kontakt für Fragen aufnehmen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Billing;
