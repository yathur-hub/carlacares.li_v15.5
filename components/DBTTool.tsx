
import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Phone, ArrowLeft, CheckCircle, HeartPulse, ExternalLink, Star, Info, Layers, ChevronRight, X } from 'lucide-react';

type ToolView = 'disclaimer' | 'assessment' | 'zone' | 'exercise' | 'sequence' | 'emergency' | 'recheck';
type Zone = 'green' | 'yellow' | 'red' | 'blue';

interface Skill {
  id: string;
  title: string;
  description: string;
  primary: boolean;
  psychoEdu?: string;
}

interface Sequence {
  id: string;
  title: string;
  skills: string[]; // IDs der Skills
  description: string;
}

const DBT_SKILLS: Record<string, Skill> = {
  // GRÜN
  g1: { id: 'g1', title: '5-4-3-2-1 (leicht)', description: 'Benenne 5 Dinge, die du siehst, 4 die du hörst, 3 die du fühlst, 2 die du riechst und 1 Sache, die du schmeckst.', primary: true, psychoEdu: 'Achtsamkeit verbindet dich wieder mit dem Hier und Jetzt.' },
  g2: { id: 'g2', title: 'Atemzählung 4–4', description: 'Atme 4 Sekunden lang ein und 4 Sekunden lang aus. Wiederhole dies 5-mal.', primary: true, psychoEdu: 'Ein gleichmäßiger Atemrhythmus harmonisiert dein System.' },
  g3: { id: 'g3', title: 'Dankbarkeits-Notiz', description: 'Notiere oder denke an eine Sache, für die du heute dankbar bist.', primary: true, psychoEdu: 'Fokus auf positive Aspekte stärkt deine Resilienz.' },
  g4: { id: 'g4', title: 'Kurzer Body-Scan', description: 'Spüre kurz in jeden Teil deines Körpers, von den Zehen bis zum Kopf.', primary: false, psychoEdu: 'Körperwahrnehmung hilft, Anspannung frühzeitig zu erkennen.' },
  g5: { id: 'g5', title: 'Mini-Achtsamkeit', description: 'Tue eine Sache (z.B. Trinken) für 2 Minuten ganz bewusst.', primary: false, psychoEdu: 'Bewusstes Handeln verankert dich im Moment.' },
  g6: { id: 'g6', title: 'Werte-Reminder', description: 'Erinnere dich an einen Wert, der dir wichtig ist (z.B. Ehrlichkeit, Mitgefühl).', primary: false, psychoEdu: 'Werte geben Orientierung und Sinn, auch in kleinen Momenten.' },
  
  // GELB
  y1: { id: 'y1', title: 'Paced Breathing 4–6', description: 'Atme 4 Sekunden ein und 6 Sekunden aus. Das beruhigt dein Nervensystem.', primary: true, psychoEdu: 'Langes Ausatmen aktiviert den Ruhenerv (Parasympathikus).' },
  y2: { id: 'y2', title: 'Progressive Muskelentspannung', description: 'Spanne deine fäuste für 5 Sek. fest an und lasse dann schlagartig locker.', primary: true, psychoEdu: 'Der Kontrast hilft, körperlichen Stress abzubauen.' },
  y3: { id: 'y3', title: 'Check the Facts', description: 'Frage dich: Ist meine Reaktion gerade angemessen? Was sind die harten Fakten?', primary: true, psychoEdu: 'Faktenprüfung trennt Gefühle von der Realität.' },
  y4: { id: 'y4', title: 'Pleasant Activity Selector', description: 'Wähle eine kleine angenehme Tätigkeit aus, die du sofort tun kannst.', primary: false, psychoEdu: 'Angenehme Aktivitäten verbessern die Stimmung kurzfristig.' },
  y5: { id: 'y5', title: 'Gedanken parken', description: 'Stell dir vor, du legst deine störenden Gedanken in einen Safe.', primary: false, psychoEdu: 'Distanzierung schafft Raum für das Hier und Jetzt.' },
  y6: { id: 'y6', title: 'Struktur-Reset (1 To-Do)', description: 'Wähle genau EINE Sache aus, die du als nächstes erledigst. Nur diese.', primary: false, psychoEdu: 'Kleine Ziele reduzieren das Gefühl der Überwältigung.' },

  // ROT
  r1: { id: 'r1', title: 'TIPP – Kälte', description: 'Halte deine Hände unter eiskaltes Wasser oder nutze ein Kühlpack.', primary: true, psychoEdu: 'Starke Kälte senkt den Puls sofort (Tauchreflex).' },
  r2: { id: 'r2', title: 'STOP-Skill', description: 'S (Stop), T (Take a breath), O (Observe), P (Proceed mindfully).', primary: true, psychoEdu: 'STOP verhindert impulsives Handeln in Krisen.' },
  r3: { id: 'r3', title: 'Paced Breathing (stark)', description: 'Konzentriere dich nur auf das Ausatmen. Mache es doppelt so lang wie das Einatmen.', primary: true, psychoEdu: 'Konzentriertes Atmen gibt deinem Geist einen Anker.' },
  r4: { id: 'r4', title: 'Erdung über Druck', description: 'Drücke deine Handflächen so fest du kannst gegeneinander.', primary: false, psychoEdu: 'Widerstand reduziert das Gefühl der Überwältigung.' },
  r5: { id: 'r5', title: 'Fokus-Objekt fixieren', description: 'Fixiere einen Punkt im Raum für 1 Minute ohne zu blinzeln.', primary: false, psychoEdu: 'Starre Fixierung kann Dissoziation unterbrechen.' },
  r6: { id: 'r6', title: 'Kurz-Mantra', description: 'Wiederhole leise: "Das geht vorbei. Ich bin hier. Ich atme."', primary: false, psychoEdu: 'Mantras beruhigen durch Rhythmus und Bestätigung.' },
};

const DBT_SEQUENCES: Record<Exclude<Zone, 'blue'>, Sequence[]> = {
  green: [
    { id: 'seq_g1', title: 'Achtsame Stabilisierung', skills: ['g5', 'g3', 'g6'], description: 'Eine sanfte Kette für mehr Ruhe und Fokus.' }
  ],
  yellow: [
    { id: 'seq_y1', title: 'Regulations-Kette', skills: ['y1', 'y2', 'y3'], description: 'Vom Atem zur Entspannung zur Klärung.' },
    { id: 'seq_y2', title: 'Struktur-Fokus', skills: ['y1', 'y5', 'y6'], description: 'Beruhigen, Sortieren und Handeln.' }
  ],
  red: [
    { id: 'seq_r1', title: 'Sofort-Stopp Krise', skills: ['r1', 'r3', 'r4'], description: 'Maximale Beruhigung für Körper und Geist.' },
    { id: 'seq_r2', title: 'Impuls-Kontrolle', skills: ['r2', 'r4', 'r6'], description: 'Innehalten, Erden und Bestärken.' }
  ]
};

const DBTTool: React.FC = () => {
  const [view, setView] = useState<ToolView>('disclaimer');
  const [suds, setSuds] = useState<number>(5);
  const [zone, setZone] = useState<Zone>('yellow');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSequence, setActiveSequence] = useState<Sequence | null>(null);
  const [sequenceStep, setSequenceStep] = useState(0);
  const [showSecondary, setShowSecondary] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('carlacares_dbt_favs');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn("Could not parse favorites from localStorage", e);
      return [];
    }
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  // UX: Automatischer Scroll zum Anfang bei View-Wechsel
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [view]);

  useEffect(() => {
    localStorage.setItem('carlacares_dbt_favs', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (suds === 10) {
      setZone('blue');
      setView('emergency');
    } else if (suds >= 7) {
      setZone('red');
    } else if (suds >= 4) {
      setZone('yellow');
    } else {
      setZone('green');
    }
  }, [suds]);

  const startSequence = (seq: Sequence) => {
    setActiveSequence(seq);
    setSequenceStep(0);
    setView('sequence');
  };

  const nextSequenceStep = () => {
    if (activeSequence && sequenceStep < activeSequence.skills.length - 1) {
      setSequenceStep(prev => prev + 1);
    } else {
      setView('recheck');
      setActiveSequence(null);
    }
  };

  const selectSkill = (skill: Skill) => {
    setSelectedSkill(skill);
    setView('exercise');
  };

  const toggleFavorite = (e: React.MouseEvent, skillId: string) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(skillId) ? prev.filter(id => id !== skillId) : [...prev, skillId]
    );
  };

  const getZoneStyles = () => {
    switch (zone) {
      case 'green': return 'bg-emerald-50 text-accentGreen border-emerald-100';
      case 'yellow': return 'bg-amber-50 text-accentGreen border-amber-100';
      case 'red': return 'bg-rose-50 text-rose-900 border-rose-100';
      case 'blue': return 'bg-accentGreen text-white border-accentGreen';
      default: return 'bg-gray-50';
    }
  };

  const renderView = () => {
    const logoUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/hand%20tree.png";

    switch (view) {
      case 'disclaimer':
        return (
          <div className="p-8 flex flex-col h-full space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col items-center text-center space-y-4 pt-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-3">
                <img src={logoUrl} alt="Branding Icon" className="w-full h-full object-contain opacity-80" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight text-accentGreen leading-tight">
                  Soforthilfe bei psychischer Belastung
                </h3>
                <p className="text-[11px] font-bold text-accentBrown/80 leading-relaxed max-w-[280px] mx-auto">
                  Dieses Tool orientiert sich an Prinzipien und Fertigkeiten der Dialektisch-Behavioralen Therapie (DBT)
                </p>
              </div>
            </div>

            <div className="flex-grow space-y-5">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-[28px] border border-gray-100/50 shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-accentGreen opacity-40">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Sicherheitshinweis</span>
                </div>
                <div className="text-[13px] text-textDark/80 leading-relaxed space-y-3">
                  <p>Dieses System dient der <strong>Selbstregulation</strong> und ist kein Ersatz für eine professionelle medizinische oder therapeutische Behandlung.</p>
                  <p>Bei akuter Lebensgefahr oder massiver Eigengefährdung rufen Sie bitte direkt die Sanität (144) an.</p>
                </div>
              </div>

              <div className="px-2">
                <label className="flex items-start space-x-4 cursor-pointer group">
                  <div className="relative flex items-center mt-1">
                    <input 
                      type="checkbox" 
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded-lg border border-gray-200 bg-white transition-all checked:bg-accentGreen checked:border-accentGreen" 
                      checked={agreement} 
                      onChange={(e) => setAgreement(e.target.checked)} 
                    />
                    <CheckCircle className="absolute h-5 w-5 text-white scale-0 transition-transform peer-checked:scale-75 pointer-events-none" />
                  </div>
                  <span className="text-xs text-textDark/60 leading-relaxed group-hover:text-textDark/80 transition-colors">
                    Ich verstehe den Hinweis und nutze das Tool eigenverantwortlich. <span className="text-rose-500 font-bold">*</span>
                  </span>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => agreement && setView('assessment')} 
                disabled={!agreement} 
                className={`w-full py-5 rounded-[22px] font-bold text-sm transition-all duration-300 ${
                  agreement 
                  ? 'bg-accentGreen text-white shadow-xl shadow-accentGreen/10 hover:bg-accentBrown hover:shadow-accentBrown/20 transform hover:-translate-y-0.5' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                }`}
              >
                Tool starten
              </button>
              <div className="text-center">
                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-accentGreen/20">Version 1.2.1 | CarlaCares</span>
              </div>
            </div>
          </div>
        );

      case 'assessment':
        return (
          <div className="p-8 flex flex-col h-full space-y-8 animate-in fade-in">
            <h3 className="text-2xl font-bold text-accentGreen text-center leading-tight">Wie hoch ist deine Belastung gerade?</h3>
            <div className="flex-grow flex flex-col justify-center space-y-12">
              <div className="text-center">
                <span className="text-8xl font-black text-accentBrown">{suds}</span>
                <p className="mt-3 text-accentBrown/60 font-bold uppercase tracking-widest text-[10px]">Belastungsskala (0-10)</p>
              </div>
              <div className="px-4">
                <input type="range" min="0" max="10" step="1" value={suds} onChange={(e) => setSuds(parseInt(e.target.value))} className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accentGreen" />
                <div className="flex justify-between mt-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <span>Stabil</span>
                  <span>Anspannung</span>
                  <span>Krise</span>
                </div>
              </div>
            </div>
            <button onClick={() => suds === 10 ? setView('emergency') : setView('zone')} className="w-full bg-accentGreen text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-accentBrown transition-all">Weiter zur Hilfe</button>
          </div>
        );

      case 'zone':
        const currentZoneSequences = DBT_SEQUENCES[zone as Exclude<Zone, 'blue'>];
        const allZoneSkills = Object.values(DBT_SKILLS).filter(s => {
          if (zone === 'green') return s.id.startsWith('g');
          if (zone === 'yellow') return s.id.startsWith('y');
          if (zone === 'red') return s.id.startsWith('r');
          return false;
        }).sort((a, b) => (favorites.includes(b.id) ? 1 : 0) - (favorites.includes(a.id) ? 1 : 0));

        return (
          <div className="flex flex-col h-full animate-in fade-in">
            <div className={`p-6 border-b-2 ${getZoneStyles()}`}>
               <div className="flex justify-between items-center mb-2">
                 <h3 className="font-black uppercase tracking-widest text-[10px] opacity-60">Status: {zone === 'red' ? 'Krise' : zone === 'yellow' ? 'Belastung' : 'Stabil'}</h3>
                 <button onClick={() => setView('assessment')} className="text-[10px] font-black uppercase text-accentBrown underline">Ändern</button>
               </div>
               <p className="text-sm font-semibold leading-relaxed">{zone === 'red' ? 'Bleib bei mir. Wir konzentrieren uns nur auf das Nötigste.' : 'Wähle eine Hilfe-Option, die sich jetzt richtig anfühlt.'}</p>
            </div>
            <div className="flex-grow p-6 space-y-4 overflow-y-auto custom-scrollbar">
              <div className="space-y-3">
                <h4 className="text-[10px] font-black text-textDark/30 uppercase tracking-[0.2em]">Geführte Hilfe:</h4>
                {currentZoneSequences.map(seq => (
                  <button key={seq.id} onClick={() => startSequence(seq)} className="w-full text-left p-5 bg-accentGreen text-white rounded-[24px] shadow-lg flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                      <Layers className="w-6 h-6 opacity-60" />
                      <div>
                        <span className="block font-bold">{seq.title}</span>
                        <span className="block text-[10px] opacity-60 uppercase font-black">{seq.skills.length} Schritte</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>

              <div className="space-y-2 pt-4">
                <h4 className="text-[10px] font-black text-textDark/30 uppercase tracking-[0.2em]">Einzel-Skills:</h4>
                {allZoneSkills.filter(s => s.primary || showSecondary).map(skill => (
                  <button key={skill.id} onClick={() => selectSkill(skill)} className="w-full text-left p-4 bg-white border border-gray-100 rounded-2xl flex justify-between items-center hover:border-accentBrown transition-all group">
                    <span className={`text-sm font-bold ${favorites.includes(skill.id) ? 'text-accentBrown' : 'text-accentGreen group-hover:text-accentBrown'}`}>{skill.title}</span>
                    <button onClick={(e) => toggleFavorite(e, skill.id)} className={`p-2 rounded-lg transition-colors ${favorites.includes(skill.id) ? 'text-accentBrown bg-accentBrown/5' : 'text-gray-200 hover:text-accentBrown'}`}>
                      <Star className={`w-4 h-4 ${favorites.includes(skill.id) ? 'fill-accentBrown' : ''}`} />
                    </button>
                  </button>
                ))}
                {!showSecondary && (
                  <button 
                    onClick={() => {
                      setShowSecondary(true);
                      // UX: Sanfter Scroll nach unten, damit neue Skills sichtbar werden
                      setTimeout(() => {
                        scrollRef.current?.scrollBy({ top: 120, behavior: 'smooth' });
                      }, 50);
                    }} 
                    className="w-full py-4 text-[10px] font-black text-accentBrown uppercase tracking-[0.2em] hover:bg-secondary/50 rounded-xl transition-all"
                  >
                    + Alle Skills dieser Zone anzeigen
                  </button>
                )}
              </div>
            </div>
            <div className="p-6 bg-white border-t border-gray-50">
              <button onClick={() => setView('emergency')} className="w-full flex items-center justify-center space-x-3 text-accentBrown font-bold py-3 border-2 border-accentBrown/10 rounded-2xl text-sm hover:bg-secondary transition-all"><Phone className="w-4 h-4" /><span>Notfall-Hilfe</span></button>
            </div>
          </div>
        );

      case 'sequence':
        if (!activeSequence) return null;
        const currentSkillId = activeSequence.skills[sequenceStep];
        const skillStep = DBT_SKILLS[currentSkillId];
        return (
          <div className="p-8 flex flex-col h-full animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-8">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-accentBrown">Sequenz: {activeSequence.title}</span>
                <span className="text-[10px] font-black opacity-40">Schritt {sequenceStep + 1} von {activeSequence.skills.length}</span>
              </div>
              <button onClick={() => setView('zone')} className="p-2 text-gray-300 hover:text-rose-500 transition-colors"><X className="w-5 h-5" /></button>
            </div>
            <div className="flex-grow space-y-6">
              <h3 className="text-2xl font-extrabold text-accentGreen leading-tight">{skillStep.title}</h3>
              <div className="bg-secondary/50 p-8 rounded-[32px] border border-gray-100 relative shadow-sm">
                <p className="text-lg leading-relaxed text-textDark/80 font-medium">{skillStep.description}</p>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accentBrown rounded-2xl flex items-center justify-center text-white shadow-lg"><HeartPulse className="w-6 h-6" /></div>
              </div>
              {skillStep.psychoEdu && (
                <div className="bg-accentGreen/5 p-6 rounded-[24px] border border-accentGreen/10 flex items-start space-x-4">
                  <Info className="w-5 h-5 text-accentGreen mt-1 shrink-0" />
                  <p className="text-sm text-textDark/70 leading-relaxed font-bold">{skillStep.psychoEdu}</p>
                </div>
              )}
            </div>
            <button onClick={nextSequenceStep} className="w-full bg-accentGreen text-white py-5 rounded-[24px] font-bold shadow-xl hover:bg-accentBrown transition-all flex items-center justify-center space-x-3">
              <span>{sequenceStep < activeSequence.skills.length - 1 ? 'Nächster Schritt' : 'Sequenz abschließen'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        );

      case 'exercise':
        return (
          <div className="p-8 flex flex-col h-full animate-in slide-in-from-right">
            <button onClick={() => setView('zone')} className="flex items-center space-x-2 text-accentBrown text-[11px] font-black uppercase tracking-widest mb-10 hover:opacity-70 transition-opacity"><ArrowLeft className="w-4 h-4" /><span>Zurück zur Auswahl</span></button>
            <div className="flex-grow space-y-6">
              <h3 className="text-2xl font-extrabold text-accentGreen">{selectedSkill?.title}</h3>
              <div className="bg-secondary/50 p-8 rounded-[32px] border border-gray-100"><p className="text-lg leading-relaxed text-textDark/80 font-medium">{selectedSkill?.description}</p></div>
              {selectedSkill?.psychoEdu && (
                <div className="bg-accentGreen/5 p-6 rounded-[24px] border border-accentGreen/10 flex items-start space-x-4">
                  <Info className="w-5 h-5 text-accentGreen mt-1" />
                  <p className="text-sm text-textDark/70 font-bold leading-relaxed">{selectedSkill.psychoEdu}</p>
                </div>
              )}
            </div>
            <button onClick={() => setView('recheck')} className="w-full bg-accentGreen text-white py-5 rounded-[24px] font-bold shadow-xl hover:bg-accentBrown transition-all">Übung abgeschlossen</button>
          </div>
        );

      case 'recheck':
        return (
          <div className="p-8 flex flex-col h-full space-y-8 animate-in fade-in">
            <h3 className="text-xl font-bold text-accentGreen text-center leading-tight">Kurzer Check-In</h3>
            <p className="text-sm text-center text-textDark/60 leading-relaxed">Wie hoch ist deine Belastung nach dieser Übung?</p>
            <div className="flex-grow flex flex-col justify-center space-y-8">
              <span className="text-8xl font-black text-center text-accentGreen">{suds}</span>
              <input type="range" min="0" max="10" step="1" value={suds} onChange={(e) => setSuds(parseInt(e.target.value))} className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accentGreen" />
            </div>
            <div className="space-y-4">
              <button onClick={() => setView('zone')} className="w-full bg-accentGreen text-white py-5 rounded-[24px] font-bold shadow-xl hover:bg-accentBrown transition-all">Weitere Übungen machen</button>
              <button onClick={() => setView('disclaimer')} className="w-full py-4 text-accentBrown font-black text-[11px] uppercase tracking-[0.2em] hover:underline">Tool beenden</button>
            </div>
          </div>
        );

      case 'emergency':
        return (
          <div className="p-8 bg-accentGreen text-white flex flex-col h-full animate-in zoom-in duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accentBrown opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex-grow space-y-8 relative z-10">
              <div className="space-y-4 mt-4">
                <h3 className="text-3xl font-black leading-tight tracking-tight">Das hier ist ein Notfall.</h3>
                <p className="text-lg opacity-80 leading-relaxed">Bitte hol dir jetzt Hilfe. Es ist ein Zeichen von Stärke, in diesem Moment Hilfe anzunehmen.</p>
              </div>
              <div className="space-y-4">
                <a href="tel:144" className="flex items-center justify-between p-5 bg-white text-accentGreen rounded-[24px] font-bold shadow-2xl hover:bg-accentBrown hover:text-white transition-all transform hover:-translate-y-1">
                  <div className="flex flex-col"><span className="text-xs uppercase tracking-widest opacity-60 mb-1">Sanität / Rettung</span><span className="text-xl">144 anrufen</span></div>
                  <Phone className="w-6 h-6" />
                </a>
                <a href="tel:143" className="flex items-center justify-between px-6 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all"><span>143 – Dargebotene Hand</span><ExternalLink className="w-4 h-4 opacity-40" /></a>
                <a href="tel:147" className="flex items-center justify-between px-6 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all"><span>147 – Pro Juventute</span><ExternalLink className="w-4 h-4 opacity-40" /></a>
                <a href="tel:117" className="flex items-center justify-between px-6 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all"><span>117 – Polizei Notruf</span><ExternalLink className="w-4 h-4 opacity-40" /></a>
              </div>
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10 text-[10px] leading-relaxed opacity-50 font-bold uppercase tracking-widest text-center">
                Wende dich alternativ an das Landesspital Liechtenstein oder die nächste psychiatrische Klinik.
              </div>
            </div>
            <button onClick={() => { setSuds(5); setView('assessment'); }} className="mt-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-all hover:bg-white/5 rounded-xl">Abbrechen & zurück zum Start</button>
          </div>
        );

      default: return null;
    }
  };

  return <div ref={scrollRef} className="h-full flex flex-col font-sans overflow-hidden">{renderView()}</div>;
};

export default DBTTool;