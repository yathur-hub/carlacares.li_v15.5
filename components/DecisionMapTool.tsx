
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ArrowLeft, RefreshCw, 
  ShieldCheck, HeartPulse, ClipboardCheck,
  Layout, Zap, Users, Info, Mail, Phone
} from 'lucide-react';

type Zone = 'Z0' | 'Z1' | 'Z2';
type Step = 'intro' | 'af' | 'su' | 'ss' | 'result' | 'contact';

interface Option {
  label: string;
  value: number;
}

const DecisionMapTool: React.FC = () => {
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [direction, setDirection] = useState(1);
  const carlaImageUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/Carla.JPG";
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // UX: Automatischer Scroll zum Anfang bei Step-Wechsel
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [step]);

  const OPTIONS_AF: Option[] = [
    { label: 'Alltag stabil und selbstständig', value: 0 },
    { label: 'Einschränkungen vorhanden, aber kompensiert', value: 1 },
    { label: 'Struktur bricht wiederholt weg', value: 2 },
    { label: 'Alltag nicht verlässlich aufrechterhaltbar', value: 3 },
  ];

  const OPTIONS_SU: Option[] = [
    { label: 'Umsetzung zuverlässig', value: 0 },
    { label: 'Umsetzung schwankend', value: 1 },
    { label: 'Nur mit externer Struktur möglich', value: 2 },
    { label: 'Wiederholt nicht gewährleistet', value: 3 },
  ];

  const OPTIONS_SS: Option[] = [
    { label: 'Stabil, Umfeld trägt', value: 0 },
    { label: 'Fragil, Belastung spürbar', value: 1 },
    { label: 'Wiederkehrende Krisen / Eskalationen', value: 2 },
    { label: 'Koordination unklar oder fragmentiert', value: 3 },
  ];

  const handleNext = (nextStep: Step) => {
    setDirection(1);
    setStep(nextStep);
  };

  const handleBack = (prevStep: Step) => {
    setDirection(-1);
    setStep(prevStep);
  };

  const handleSelect = (dim: string, val: number, next: Step) => {
    setAnswers(prev => ({ ...prev, [dim]: val }));
    handleNext(next);
  };

  const calculateZone = (): Zone => {
    const af = answers.af ?? 0;
    const su = answers.su ?? 0;
    const ss = answers.ss ?? 0;

    // Trigger-Logiken für Z2 (Versorgungslücke)
    if ((af >= 2 && su >= 2) || (af >= 2 && ss >= 2) || ss === 3) {
      return 'Z2';
    }

    // Veto-Logiken für Z0 (Ausreichend)
    if (af <= 1 && su === 0 && ss === 0) {
      return 'Z0';
    }

    // Graubereich
    return 'Z1';
  };

  const getReasoning = (zone: Zone) => {
    const af = answers.af ?? 0;
    const su = answers.su ?? 0;
    const ss = answers.ss ?? 0;

    if (zone === 'Z2') {
      let reasons = [];
      if (af >= 2) reasons.push("einer instabilen Alltagsfunktion");
      if (su >= 2) reasons.push("eingeschränkter Umsetzung");
      if (ss >= 2) reasons.push("einem belasteten Gesamtsystem");
      
      return `Die Einordnung ergibt sich aus ${reasons.join(", ")}. In dieser Konstellation entsteht häufig eine Versorgungslücke zwischen Behandlung und Alltag, in der ambulante psychiatrische Pflege stabilisierend und koordinierend wirken kann.`;
    }
    
    if (zone === 'Z1') {
      return "Es zeigen sich Belastungsaspekte, die aktuell noch kompensiert werden können. Eine Beobachtung der Stabilität im Alltag ist empfohlen. Bei einer Verschlechterung der Selbststeuerung oder Struktur kann APP präventiv unterstützen.";
    }

    return "Die aktuelle Versorgungssituation erscheint tragfähig. Die Alltagsbewältigung und die Umsetzung der Massnahmen sind aktuell gewährleistet.";
  };

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 50 : -50, opacity: 0 }),
  };

  return (
    <div ref={scrollRef} className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-full min-h-[500px]">
      <AnimatePresence mode="wait" custom={direction}>
        {step === 'intro' && (
          <motion.div key="intro" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="p-8 flex flex-col h-full space-y-8">
            <div className="flex items-center space-x-3 text-accentBrown">
              <ClipboardCheck className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Clinical Support Tool</span>
            </div>
            <div className="space-y-4 flex-grow">
              <h3 className="text-2xl font-extrabold text-accentGreen leading-tight">Versorgungsindikator für die Ambulante Psychiatrische Pflege (APP)</h3>
              <div className="space-y-4 text-[13px] text-textDark/70 leading-relaxed font-bold">
                <p>Ein Instrument zur fachlichen Einordnung von Versorgungssituationen und Identifikation von Lücken im Versorgungsalltag.</p>
                <p>Es unterstützt Fachpersonen dabei zu beurteilen, ob bestehende medizinische und psychotherapeutische Massnahmen ausreichen, um den Alltag stabil zu tragen.</p>
                <p>Der Fokus liegt auf alltagsbezogener Umsetzung, Stabilität und Koordination – nicht auf Diagnostik oder Therapieentscheidungen.</p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-3xl border border-gray-100 space-y-4">
                <div className="flex items-center space-x-2 opacity-40">
                  <Info className="w-4 h-4" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Für wen?</span>
                </div>
                <p className="text-[11px] text-accentGreen font-bold leading-relaxed">
                  Dieses Tool richtet sich an Ärzt:innen, Psychiater:innen und Fachstellen zur Indikationsstellung der ambulanten psychiatrischen Pflege (APP).
                </p>
              </div>
            </div>
            <button onClick={() => handleNext('af')} className="w-full bg-accentGreen text-white py-4 rounded-2xl font-bold hover:bg-accentBrown transition-all shadow-lg flex items-center justify-center space-x-2">
              <span>Starten</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {step === 'af' && (
          <motion.div key="af" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="p-8 flex flex-col h-full space-y-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-accentBrown">
                <Layout className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Runde 1: Alltagsfunktion</span>
              </div>
              <span className="text-[10px] font-black text-gray-300">1/3</span>
            </div>
            <h4 className="text-xl font-bold text-accentGreen">Wie zeigt sich die Situation aktuell im Alltag?</h4>
            <div className="grid gap-3 flex-grow">
              {OPTIONS_AF.map(opt => (
                <button 
                  key={opt.value} 
                  onClick={() => handleSelect('af', opt.value, 'su')}
                  className="w-full text-left p-5 bg-white border border-gray-100 rounded-2xl text-[13px] font-bold text-textDark/70 hover:border-accentBrown hover:bg-secondary/30 transition-all flex justify-between items-center group"
                >
                  <span>{opt.label}</span>
                  <ChevronRight className="w-4 h-4 text-accentBrown opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              ))}
            </div>
            <button onClick={() => handleBack('intro')} className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center space-x-2 hover:text-accentBrown">
              <ArrowLeft className="w-3 h-3" />
              <span>Abbrechen</span>
            </button>
          </motion.div>
        )}

        {step === 'su' && (
          <motion.div key="su" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="p-8 flex flex-col h-full space-y-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-accentBrown">
                <Zap className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Runde 2: Selbststeuerung</span>
              </div>
              <span className="text-[10px] font-black text-gray-300">2/3</span>
            </div>
            <h4 className="text-xl font-bold text-accentGreen">Wie gelingt die Umsetzung medizinischer Massnahmen im Alltag?</h4>
            <div className="grid gap-3 flex-grow">
              {OPTIONS_SU.map(opt => (
                <button 
                  key={opt.value} 
                  onClick={() => handleSelect('su', opt.value, 'ss')}
                  className="w-full text-left p-5 bg-white border border-gray-100 rounded-2xl text-[13px] font-bold text-textDark/70 hover:border-accentBrown hover:bg-secondary/30 transition-all flex justify-between items-center group"
                >
                  <span>{opt.label}</span>
                  <ChevronRight className="w-4 h-4 text-accentBrown opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              ))}
            </div>
            <button onClick={() => handleBack('af')} className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center space-x-2 hover:text-accentBrown">
              <ArrowLeft className="w-3 h-3" />
              <span>Zurück</span>
            </button>
          </motion.div>
        )}

        {step === 'ss' && (
          <motion.div key="ss" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="p-8 flex flex-col h-full space-y-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-accentBrown">
                <Users className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Runde 3: Stabilität & System</span>
              </div>
              <span className="text-[10px] font-black text-gray-300">3/3</span>
            </div>
            <h4 className="text-xl font-bold text-accentGreen">Wie stabil ist das Gesamtsystem aktuell?</h4>
            <div className="grid gap-3 flex-grow">
              {OPTIONS_SS.map(opt => (
                <button 
                  key={opt.value} 
                  onClick={() => handleSelect('ss', opt.value, 'result')}
                  className="w-full text-left p-5 bg-white border border-gray-100 rounded-2xl text-[13px] font-bold text-textDark/70 hover:border-accentBrown hover:bg-secondary/30 transition-all flex justify-between items-center group"
                >
                  <span>{opt.label}</span>
                  <ChevronRight className="w-4 h-4 text-accentBrown opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              ))}
            </div>
            <button onClick={() => handleBack('su')} className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center space-x-2 hover:text-accentBrown">
              <ArrowLeft className="w-3 h-3" />
              <span>Zurück</span>
            </button>
          </motion.div>
        )}

        {step === 'result' && (
          <motion.div key="result" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="p-8 flex flex-col h-full space-y-6">
            <div className="flex items-center space-x-3 text-accentBrown">
              <HeartPulse className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Fachliche Einschätzung</span>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-2xl font-extrabold text-accentGreen leading-tight">
                {calculateZone() === 'Z0' && "Versorgung aktuell ausreichend"}
                {calculateZone() === 'Z1' && "Übergangsbereich – Beobachtung sinnvoll"}
                {calculateZone() === 'Z2' && "Versorgungslücke – APP fachlich sinnvoll"}
              </h4>
            </div>

            <div className="bg-secondary/50 p-6 rounded-[32px] border border-gray-100 space-y-4">
               <p className="text-[11px] font-black uppercase tracking-widest text-accentBrown">Begründung:</p>
               <p className="text-[13px] text-textDark/80 leading-relaxed font-bold">
                 {getReasoning(calculateZone())}
               </p>
            </div>

            {answers.ss >= 2 && (
              <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-start space-x-3">
                 <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                 <p className="text-[11px] text-rose-900 font-bold leading-relaxed">
                   Bei erhöhter Instabilität oder Sicherheitsnähe ist eine engmaschige fachliche Einschätzung besonders wichtig. Dieses Tool ersetzt keine Krisenintervention.
                 </p>
              </div>
            )}

            <div className="p-5 bg-white border border-dashed border-gray-200 rounded-2xl">
               <p className="text-[10px] text-textDark/50 leading-relaxed font-bold">
                 Dieses Tool stellt keine Diagnose, ersetzt keine medizinische Abklärung und trifft keine Aussagen zur spezifischen Behandlung.
               </p>
            </div>

            <div className="pt-4 space-y-4">
              <button 
                onClick={() => {
                  if (calculateZone() === 'Z2') {
                    handleNext('contact');
                  } else {
                    setStep('intro');
                    setAnswers({});
                  }
                }}
                className="w-full bg-accentGreen text-white py-4 rounded-2xl font-bold hover:bg-accentBrown transition-all shadow-xl"
              >
                {calculateZone() === 'Z2' ? "Fachliche Rücksprache anfragen" : "Einschätzung beenden"}
              </button>
              {calculateZone() !== 'Z2' && (
                <button onClick={() => { setStep('intro'); setAnswers({}); }} className="w-full py-2 text-[10px] font-black uppercase tracking-widest text-accentBrown/40 hover:text-accentBrown flex items-center justify-center space-x-2">
                  <RefreshCw className="w-3 h-3" />
                  <span>Neu starten</span>
                </button>
              )}
            </div>
          </motion.div>
        )}

        {step === 'contact' && (
          <motion.div key="contact" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="p-8 flex flex-col h-full space-y-10 items-center text-center">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-32 h-32 rounded-full border-4 border-accentBrown/20 overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src={carlaImageUrl} 
                  alt="Carla Vanessa Carcaiso" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-extrabold text-accentGreen">Carla Vanessa Carcaiso</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accentBrown">Gründerin & Geschäftsführerin</p>
              </div>
            </div>

            <div className="grid gap-4 w-full">
              <a href="mailto:carla@carlacares.li" className="w-full bg-accentGreen text-white py-4 rounded-2xl font-bold shadow-xl flex items-center justify-center space-x-3 group hover:bg-accentBrown transition-all">
                <Mail className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform" />
                <span>carla@carlacares.li</span>
              </a>
              <a href="tel:+41791940718" className="w-full bg-white border-2 border-accentGreen/10 text-accentGreen py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 group hover:border-accentBrown hover:text-accentBrown transition-all">
                <Phone className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform" />
                <span>+41 79 194 07 18</span>
              </a>
            </div>

            <div className="pt-4 w-full">
              <button 
                onClick={() => handleBack('result')} 
                className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-accentBrown transition-colors flex items-center justify-center space-x-2 w-full"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Zurück zur Einschätzung</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DecisionMapTool;
