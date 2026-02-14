
import React from 'react';
import SelfAssessment from '../components/SelfAssessment';

interface CareAndSupportProps {
  onNavigateToKontakt?: () => void;
}

const CareAndSupport: React.FC<CareAndSupportProps> = ({ onNavigateToKontakt }) => {
  const carlaImageUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/Carla.JPG";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="bg-white pt-16 md:pt-24 pb-12 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-accentGreen tracking-tight leading-tight">
                Pflege & Begleitung
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-accentBrown uppercase tracking-wider">
                Unterstützung dort, wo der Alltag stattfindet
              </h2>
            </div>
            <div className="space-y-6 text-lg md:text-xl text-textDark/70 leading-relaxed">
              <p className="font-semibold text-textDark">
                Ambulante psychiatrische Pflege unterstützt Menschen mit psychischen Erkrankungen im täglichen Leben.
              </p>
              <p>
                Im Mittelpunkt steht nicht die Diagnose, sondern die konkrete Alltagssituation und die Frage, wie Stabilität, Orientierung und Selbstständigkeit gefördert werden können.
              </p>
              <p className="bg-secondary/50 p-6 rounded-2xl border-l-4 border-accentGreen">
                Die Begleitung erfolgt überwiegend aufsuchend – im gewohnten Umfeld und angepasst an die individuelle Lebenssituation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion: Abklärung, Beratung und Koordination */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-accentGreen tracking-tight">Abklärung, Beratung und Koordination</h2>
            <div className="space-y-6 text-lg text-textDark/70 leading-relaxed">
              <p>
                Am Anfang steht eine sorgfältige pflegerische Abklärung. Gemeinsam wird eingeschätzt, wo Unterstützung notwendig ist und welche Ressourcen bereits vorhanden sind.
              </p>
              <p className="text-sm font-bold text-accentBrown uppercase tracking-[0.2em]">Dazu gehören:</p>
              <ul className="space-y-4">
                {[
                  "Einschätzung des Unterstützungsbedarfs im Alltag",
                  "Einbezug von Angehörigen, wenn gewünscht",
                  "Klärung von Zuständigkeiten",
                  "Koordination mit Ärzt:innen, Psychiater:innen und weiteren Stellen",
                  "Mitwirkung an Krisen- und Notfallplänen"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-full bg-accentGreen/10 flex items-center justify-center text-accentGreen flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative w-full">
            <SelfAssessment />
          </div>
        </div>
      </section>

      {/* Sektion: Pflegerische Begleitung (Das neue detaillierte Leistungsangebot) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-accentGreen tracking-tight">Pflegerische Begleitung</h2>
            <p className="text-xl text-textDark/80 leading-relaxed font-medium">
              Die pflegerische Begleitung unterstützt Menschen mit psychischen Belastungen dabei, ihren Alltag stabiler, sicherer und selbstbestimmter zu gestalten. 
              Sie orientiert sich an den individuellen Bedürfnissen und vorhandenen Ressourcen und arbeitet handlungsorientiert im Hier und Jetzt.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Linke Spalte: Begleitinhalte */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-accentBrown">Leistungsspektrum</h3>
                <p className="text-lg font-bold text-accentGreen">Die Begleitung kann unter anderem beinhalten:</p>
              </div>
              <ul className="space-y-5">
                {[
                  "Unterstützung im Umgang mit belastenden psychischen Symptomen im Alltag",
                  "Begleitung, Stabilisierung und Entlastung in akuten Krisensituationen",
                  "Förderung von Orientierung, Tagesstruktur und innerer Sicherheit",
                  "Unterstützung bei der Medikamenteneinnahme nach ärztlicher Anordnung",
                  "Wahrnehmen, Einordnen und frühzeitiges Erkennen von Frühwarnzeichen",
                  "Gemeinsames Erarbeiten von alltagsnahen Strategien zur rechtzeitigen Stabilisierung"
                ].map((text, i) => (
                  <li key={i} className="flex gap-5 items-start bg-secondary/40 p-5 rounded-2xl border border-gray-100/50">
                    <span className="w-8 h-8 rounded-full bg-accentGreen text-white flex items-center justify-center font-bold shrink-0 text-xs">0{i+1}</span>
                    <span className="text-textDark font-semibold leading-tight">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rechte Spalte: Methoden */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-accentBrown">Methoden & Ansätze</h3>
                <p className="text-lg font-bold text-accentGreen">Ergänzend fliessen strukturierende, ressourcen- und handlungsorientierte Methoden ein:</p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Sozialkompetenztraining",
                    desc: "Elemente zur Stärkung von Kommunikations-, Abgrenzungs- und Beziehungskompetenzen."
                  },
                  {
                    title: "Dialektisch-Behaviorale Therapie (DBT)",
                    desc: "Fertigkeiten und Übungen, insbesondere aus dem Bereich Achtsamkeit, zur Emotionsregulation, Stressbewältigung und Stabilisierung im Alltag."
                  },
                  {
                    title: "Verhaltenstherapeutisch orientierte Massnahmen",
                    desc: "An den Alltag und die individuellen Ziele angepasste Strategien."
                  },
                  {
                    title: "Komplementäre Methoden",
                    desc: "Auf Wunsch Einsatz von Aromatherapie oder Akupunktur zur Förderung von Entspannung, Körperwahrnehmung und Selbstregulation."
                  }
                ].map((item, i) => (
                  <div key={i} className="group border-l-4 border-accentBrown/20 hover:border-accentBrown pl-6 py-2 transition-all">
                    <h4 className="font-bold text-accentGreen mb-2 group-hover:text-accentBrown transition-colors">{item.title}</h4>
                    <p className="text-sm text-textDark/70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-8">
                <div className="bg-accentGreen p-8 rounded-[32px] shadow-xl text-white">
                  <p className="text-lg font-bold leading-relaxed">
                    Ziel der pflegerischen Begleitung ist es, Sicherheit zu vermitteln, Selbstwirksamkeit zu stärken und Menschen dabei zu unterstützen, ihren Alltag möglichst eigenständig und stabil zu bewältigen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion: Unterstützung im täglichen Leben (Cards) */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-accentGreen tracking-tight">Unterstützung im täglichen Leben</h2>
            <p className="text-lg text-textDark/70 leading-relaxed">
              Psychische Erkrankungen können alltägliche Tätigkeiten erheblich erschweren. Ambulante psychiatrische Pflege unterstützt dort, wo krankheitsbedingt Einschränkungen bestehen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Tagesstruktur", desc: "Strukturierung des Tages und Aufbau von Routinen." },
               { title: "Selbstfürsorge", desc: "Unterstützung bei Selbstfürsorge und Grundbedürfnissen." },
               { title: "Eigenständigkeit", desc: "Förderung von Eigenständigkeit im Alltag." },
               { title: "Kompetenzen", desc: "Erhalt oder Wiedergewinnung von Alltagskompetenzen." }
             ].map((item, i) => (
               <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 bg-accentBrown/10 rounded-2xl flex items-center justify-center text-accentBrown">
                    <span className="font-bold">0{i+1}</span>
                  </div>
                  <h3 className="font-bold text-accentGreen uppercase tracking-widest text-xs">{item.title}</h3>
                  <p className="text-sm text-textDark/60">{item.desc}</p>
               </div>
             ))}
          </div>

          <div className="text-center pt-8">
             <p className="text-lg font-bold text-accentGreen">
               Ziel ist nicht die Übernahme von Aufgaben, sondern die Förderung von Selbstständigkeit.
             </p>
          </div>
        </div>
      </section>

      {/* Sektion: Recovery-orientierte Haltung */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-accentGreen tracking-tight">Recovery-orientierte Haltung</h2>
            <p className="text-lg text-textDark/70 leading-relaxed">
              Die Arbeit orientiert sich am Recovery-Ansatz. Recovery bedeutet nicht zwingend Heilung, sondern ein möglichst selbstbestimmtes Leben trotz psychischer Erkrankung.
            </p>
            <p className="text-base text-textDark/60 font-bold">
              Die pflegerische Begleitung versteht sich dabei als Unterstützung im persönlichen Entwicklungsprozess.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
             {[
               { title: "Beziehung", text: "Beziehung und Vertrauen als Basis." },
               { title: "Fähigkeiten", text: "Stärkung vorhandener Fähigkeiten." },
               { title: "Hoffnung", text: "Förderung von Hoffnung und Eigenverantwortung." },
               { title: "Augenhöhe", text: "Arbeit auf Augenhöhe." }
             ].map((item, i) => (
               <div key={i} className="p-6 bg-accentGreen/5 rounded-3xl border border-accentGreen/10 space-y-2">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-accentBrown">{item.title}</span>
                  <p className="text-sm font-bold text-accentGreen">{item.text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Sektion: Klare Abgrenzung */}
      <section className="py-24 px-6 bg-accentGreen text-white rounded-[60px] mx-6 my-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Klare Abgrenzung</h2>
            <p className="text-xl opacity-70">
              Ambulante psychiatrische Pflege ist keine Psychotherapie und ersetzt diese nicht. 
              Sie versteht sich vielmehr als ergänzende Unterstützung, die Menschen dabei hilft, therapeutische Inhalte im Alltag umzusetzen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/10 space-y-6">
                <h3 className="text-2xl font-bold text-white">Psychotherapie</h3>
                <p className="opacity-80 leading-relaxed font-bold">
                  Arbeitet an innerpsychischen Prozessen, Mustern und Zusammenhängen. Findet in der Regel in einer Praxis statt.
                </p>
             </div>
             <div className="bg-white p-10 rounded-[40px] shadow-2xl text-accentGreen space-y-6">
                <h3 className="text-2xl font-bold">Psychiatrische Pflege</h3>
                <p className="text-textDark/70 leading-relaxed font-bold">
                  Unterstützt die praktische Umsetzung im Alltag und findet im häuslichen und sozialen Umfeld statt.
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center gap-3 text-accentBrown font-bold text-sm uppercase tracking-widest">
                   <div className="w-2 h-2 rounded-full bg-accentBrown"></div>
                   <span>Brücke zum Alltag</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Sektion: Einordnung im Gesundheitssystem */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-accentGreen tracking-tight">Einordnung im Gesundheitssystem</h2>
          <div className="space-y-6 text-lg text-textDark/70 leading-relaxed">
            <p>
              Die ambulante psychiatrische Pflege ist Teil der regulären Gesundheitsversorgung im Fürstentum Liechtenstein. Sie erfolgt auf ärztliche Anordnung und ist in den gesetzlichen Rahmen der Krankenpflege eingebettet.
            </p>
            <p className="font-semibold">
              Die Zusammenarbeit mit behandelnden Ärzt:innen und weiteren Fachstellen ist zentraler Bestandteil der Arbeit.
            </p>
          </div>
        </div>
      </section>

      {/* Sektion: Ruhiger Abschluss mit personalisiertem Zitat */}
      <section className="pb-32 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-secondary/40 p-12 md:p-20 rounded-[60px] border border-gray-50 space-y-10">
             <h3 className="text-2xl md:text-4xl font-bold text-accentGreen leading-tight max-w-3xl mx-auto">
               "Welche Form der Unterstützung sinnvoll ist, hängt immer von der individuellen Situation ab."
             </h3>
             
             {/* Attribuierung mit Foto */}
             <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                   <img 
                    src={carlaImageUrl} 
                    alt="Carla Vanessa Carcaiso" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <div className="text-center">
                   <p className="text-lg md:text-xl font-bold text-accentGreen">Carla Vanessa Carcaiso</p>
                   <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-accentBrown">Gründerin & Geschäftsführerin</p>
                </div>
             </div>

             <p className="text-lg text-textDark/60 max-w-2xl mx-auto leading-relaxed pt-8 border-t border-accentGreen/5 font-bold">
               Ein klärendes Gespräch kann helfen, den Bedarf einzuordnen und nächste Schritte zu überlegen.
             </p>
          </div>

          <div className="pt-8">
            <button 
              onClick={onNavigateToKontakt} 
              className="inline-block bg-accentGreen text-white px-10 py-5 rounded-2xl font-bold hover:bg-accentBrown transition-all shadow-xl"
            >
              Unverbindlich anfragen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareAndSupport;
