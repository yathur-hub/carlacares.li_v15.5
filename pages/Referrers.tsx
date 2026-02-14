
import React from 'react';
import DecisionMapTool from '../components/DecisionMapTool';

interface ReferrersProps {
  onNavigateToKontakt?: () => void;
}

const Referrers: React.FC<ReferrersProps> = ({ onNavigateToKontakt }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="bg-white pt-16 md:pt-24 pb-12 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-accentGreen tracking-tight leading-tight">
                Ambulante psychiatrische Pflege als verlässlicher Teil der Versorgung
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-accentBrown uppercase tracking-wider">
                Fachinformationen für Zuweisende und Kooperationspartner
              </h2>
            </div>
            <div className="space-y-6 text-lg md:text-xl text-textDark/70 leading-relaxed">
              <p>
                Ambulante psychiatrische Pflege ist ein integraler Bestandteil der psychiatrischen und psychosozialen Versorgung im Fürstentum Liechtenstein.
              </p>
              <p>
                Sie ergänzt ärztliche, psychiatrische und psychotherapeutische Behandlungen dort, wo Alltagsbewältigung, Stabilität und Kontinuität im Vordergrund stehen. Als spezialisierte Pflegefachdisziplin arbeitet sie im unmittelbaren Lebensumfeld der betroffenen Personen und übernimmt eine verbindende Rolle zwischen Behandlung und Alltag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion: Wann eine Zuweisung sinnvoll ist */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-accentGreen tracking-tight">Wann eine Zuweisung sinnvoll ist</h2>
            <p className="text-lg text-textDark/70 leading-relaxed">
              Eine Zuweisung zur ambulanten psychiatrischen Pflege ist insbesondere dann angezeigt, wenn psychische Erkrankungen zu funktionellen Einschränkungen im Alltag führen.
            </p>
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
               <h3 className="text-sm font-bold text-accentBrown uppercase tracking-[0.2em] mb-6">Typische Indikationen:</h3>
               <ul className="space-y-4">
                 {[
                   "Eingeschränkte Alltagsstruktur oder Selbstversorgung",
                   "Instabile Verläufe mit erhöhtem Krisenrisiko",
                   "Übergangsphasen nach stationären Aufenthalten",
                   "Eingeschränkte Therapiefähigkeit aufgrund der Lebenssituation",
                   "Bedarf an engmaschiger, aufsuchender Begleitung"
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4 items-start">
                     <div className="w-6 h-6 rounded-full bg-accentGreen/10 flex items-center justify-center text-accentGreen flex-shrink-0 mt-1">
                       <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                     </div>
                     <span className="font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
            <p className="text-base font-bold text-textDark/60">
              Die Pflege richtet sich nicht nach Diagnosen, sondern nach dem funktionalen Unterstützungsbedarf.
            </p>
          </div>
          <div className="relative w-full">
             <DecisionMapTool />
          </div>
        </div>
      </section>

      {/* Sektion: Rolle im Behandlungsprozess */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-accentGreen tracking-tight">Rolle der ambulanten psychiatrischen Pflege im Behandlungsprozess</h2>
            <p className="text-lg text-textDark/70 leading-relaxed">
              Die ambulante psychiatrische Pflege arbeitet handlungsorientiert im Hier und Jetzt. Ihr Fokus liegt auf der Umsetzung medizinischer und therapeutische Empfehlungen im Alltag.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Stabilisierung", desc: "Stabilisierung im häuslichen Umfeld durch verlässliche Präsenz." },
              { title: "Medikamentenadhärenz", desc: "Unterstützung bei der Medikamenteneinnahme nach ärztlicher Anordnung." },
              { title: "Tagesstruktur", desc: "Förderung von Tagesstruktur und Selbstfürsorge im Alltag." },
              { title: "Früherkennung", desc: "Erkennung von Krisen und Rückfallanzeichen im gewohnten Umfeld." },
              { title: "Entlastung", desc: "Gezielte Entlastung und Beratung von Angehörigen." },
              { title: "Voraussetzung", desc: "Schafft die Basis, damit therapeutische Interventionen wirksam greifen können." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-secondary/30 rounded-3xl border border-gray-100 space-y-4">
                <h3 className="font-bold text-accentGreen uppercase tracking-widest text-xs">{item.title}</h3>
                <p className="text-sm text-textDark/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion: Zusammenarbeit & Recovery */}
      <section className="py-24 px-6 bg-accentGreen text-white rounded-[60px] mx-6 my-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Zusammenarbeit im Versorgungssystem</h2>
            <div className="space-y-6 text-lg opacity-80 leading-relaxed">
              <p>
                Die ambulante psychiatrische Pflege ist Teil eines vernetzten Versorgungssystems. Eine enge Zusammenarbeit mit Ärzt:innen, Psychiater:innen, Psycholog:innen und Sozialdiensten ist zentraler Bestandteil der Arbeit.
              </p>
              <p>
                Ziel dieser Zusammenarbeit ist eine abgestimmte, kontinuierliche Versorgung, die Versorgungsbrüche vermeidet und Stabilität fördert. Die Kommunikation erfolgt bedarfsorientiert, strukturiert und unter Wahrung der fachlichen Zuständigkeiten.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Recovery-orientierte Pflegehaltung</h2>
            <div className="space-y-6 text-lg opacity-80 leading-relaxed">
              <p>
                Die Arbeit orientiert sich am Recovery-Modell. Im Mittelpunkt steht nicht die Symptomfreiheit, sondern die Förderung von Selbstständigkeit, Teilhabe und Lebensqualität trotz bestehender Erkrankung.
              </p>
              <p>
                Diese Haltung ergänzt medizinische und therapeutische Behandlungsansätze und unterstützt langfristige Stabilisierung im Alltag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion: Abrechnung & Nutzen */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-accentGreen tracking-tight">Abrechnung und rechtlicher Rahmen</h2>
            <p className="text-lg text-textDark/70 leading-relaxed">
              Die ambulante psychiatrische Pflege erfolgt auf ärztliche Anordnung und ist Teil der obligatorischen Krankenpflegeversicherung. Die Abrechnung richtet sich nach den geltenden gesetzlichen Vorgaben und erfolgt transparent nach Art und Umfang der erbrachten Pflegeleistungen.
            </p>
            <div className="p-6 bg-secondary/50 rounded-2xl border border-gray-100 flex items-center gap-4">
               <div className="w-10 h-10 bg-accentBrown rounded-xl flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
               </div>
               <span className="font-bold text-accentGreen">Gesetzlich verankert & KVG anerkannt</span>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-accentGreen tracking-tight">Nutzen für Zuweisende und Systeme</h2>
            <div className="space-y-6">
              {[
                "Stationäre Aufenthalte reduzieren oder verkürzen",
                "Übergänge zwischen Versorgungsstufen stabilisieren",
                "Die Therapietreue im Alltag erhöhen",
                "Notfallinterventionen entlasten",
                "Versorgungslücken im ambulanten Setting schliessen"
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-center p-4 bg-accentGreen/5 rounded-2xl border-l-4 border-accentBrown">
                  <span className="text-textDark font-medium">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-textDark/60 leading-relaxed">
              Studien zeigen, dass aufsuchende psychiatrische Pflegeprogramme signifikant zur Reduktion von Rehospitalisierungen beitragen und gleichzeitig kosteneffektiv sind.
            </p>
          </div>
        </div>
      </section>

      {/* Abschluss */}
      <section className="py-24 px-6 bg-secondary/30 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white p-12 md:p-20 rounded-[60px] border border-gray-100 space-y-8 shadow-sm">
             <h3 className="text-2xl md:text-4xl font-bold text-accentGreen leading-tight">
               "Die ambulante psychiatrische Pflege versteht sich als verlässliche Ergänzung im Versorgungssystem."
             </h3>
             <p className="text-lg text-textDark/60 max-w-2xl mx-auto">
               Ein fachlicher Austausch zur Einordnung einer möglichen Zuweisung ist jederzeit möglich.
             </p>
             <div className="w-20 h-1 bg-accentBrown mx-auto"></div>
          </div>

          <div className="pt-8">
            <button 
              onClick={onNavigateToKontakt} 
              className="inline-block bg-accentGreen text-white px-10 py-5 rounded-2xl font-bold hover:bg-accentBrown transition-all shadow-xl"
            >
              Fachlichen Austausch anfragen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Referrers;
