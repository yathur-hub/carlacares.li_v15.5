
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, ChevronRight, ArrowLeft, RefreshCw, 
  ClipboardCheck, HeartPulse, Layout, 
  Zap, Users, Anchor, Sun, HelpCircle, BookOpen, 
  Mail, Phone 
} from 'lucide-react';

interface AnswerOption {
  label: string;
  value: number; 
}

interface Question {
  id: string;
  text: string;
  options: AnswerOption[];
  dimensionTitle: string;
  dimensionSubtitle: string;
  dimensionIcon: React.ReactNode;
}

const FREQUENCY_OPTIONS: AnswerOption[] = [
  { label: 'Selten oder nie', value: 0 },
  { label: 'Gelegentlich', value: 1 },
  { label: 'Häufig', value: 2 },
  { label: 'Fast immer', value: 3 },
];

const AGREEMENT_OPTIONS: AnswerOption[] = [
  { label: 'Trifft nicht zu', value: 0 },
  { label: 'Trifft eher nicht zu', value: 1 },
  { label: 'Trifft eher zu', value: 2 },
  { label: 'Trifft voll zu', value: 3 },
];

const ALL_QUESTIONS: Question[] = [
  // Dimension: Structure
  { id: 'as1', dimensionTitle: 'Alltagsstruktur', dimensionSubtitle: 'Tagesgestaltung', dimensionIcon: <Layout className="w-5 h-5" />, text: 'Wie gut gelingt es Ihnen derzeit, Ihren Tag mit festen Routinen zu füllen?', options: AGREEMENT_OPTIONS },
  { id: 'as2', dimensionTitle: 'Alltagsstruktur', dimensionSubtitle: 'Organisation', dimensionIcon: <Layout className="w-5 h-5" />, text: 'Fallen Aufgaben im Haushalt oder Besorgungen aktuell öfter an als früher?', options: FREQUENCY_OPTIONS },
  { id: 'as3', dimensionTitle: 'Alltagsstruktur', dimensionSubtitle: 'Verpflichtungen', dimensionIcon: <Layout className="w-5 h-5" />, text: 'Gelingt es Ihnen, Termine und Verpflichtungen selbstständig zu koordinieren?', options: AGREEMENT_OPTIONS },
  // Dimension: Demands
  { id: 'ar1', dimensionTitle: 'Anforderungen & Reize', dimensionSubtitle: 'Wahrnehmung', dimensionIcon: <Zap className="w-5 h-5" />, text: 'Wie oft erleben Sie, dass Umgebungsgeräusche oder viele Menschen als anstrengend wahrgenommen werden?', options: FREQUENCY_OPTIONS },
  { id: 'ar2', dimensionTitle: 'Anforderungen & Reize', dimensionSubtitle: 'Resilienz', dimensionIcon: <Zap className="w-5 h-5" />, text: 'Fühlen Sie sich von kurzfristigen Änderungen in Ihrem Zeitplan schneller aus der Ruhe gebracht?', options: FREQUENCY_OPTIONS },
  { id: 'ar3', dimensionTitle: 'Anforderungen & Reize', dimensionSubtitle: 'Belastung', dimensionIcon: <Zap className="w-5 h-5" />, text: 'Erleben Sie Ihren Alltag aktuell als eine Aneinanderreihung von Anforderungen?', options: FREQUENCY_OPTIONS },
  // Dimension: Emotions
  { id: 'eb1', dimensionTitle: 'Emotionale Belastung', dimensionSubtitle: 'Einfluss auf Pläne', dimensionIcon: <HeartPulse className="w-5 h-5" />, text: 'Wie oft beeinflussen Ihre aktuellen Empfindungen die Umsetzung Ihrer täglichen Pläne?', options: FREQUENCY_OPTIONS },
  { id: 'eb2', dimensionTitle: 'Emotionale Belastung', dimensionSubtitle: 'Innere Unruhe', dimensionIcon: <HeartPulse className="w-5 h-5" />, text: 'In welchem Maße fühlen Sie sich durch innere Unruhe in Ihren Vorhaben eingeschränkt?', options: FREQUENCY_OPTIONS },
  { id: 'eb3', dimensionTitle: 'Emotionale Belastung', dimensionSubtitle: 'Konzentration', dimensionIcon: <HeartPulse className="w-5 h-5" />, text: 'Wie gut können Sie sich von belastenden Gedanken distanzieren, um sich auf eine Aufgabe zu konzentrieren?', options: AGREEMENT_OPTIONS },
  // Dimension: Social
  { id: 'se1', dimensionTitle: 'Soziale Einbindung', dimensionSubtitle: 'Kontakte', dimensionIcon: <Users className="w-5 h-5" />, text: 'Haben Sie Personen in Ihrem Umfeld, mit denen Sie über Alltägliches sprechen können?', options: AGREEMENT_OPTIONS },
  { id: 'se2', dimensionTitle: 'Soziale Einbindung', dimensionSubtitle: 'Teilhabe', dimensionIcon: <Users className="w-5 h-5" />, text: 'Wie oft nehmen Sie derzeit am gesellschaftlichen Leben teil (Hobbys, Treffen, Vereine)?', options: FREQUENCY_OPTIONS },
  { id: 'se3', dimensionTitle: 'Soziale Einbindung', dimensionSubtitle: 'Unterstützung', dimensionIcon: <Users className="w-5 h-5" />, text: 'Fühlen Sie sich in Ihrem aktuellen Umfeld bei praktischen Fragen unterstützt?', options: AGREEMENT_OPTIONS },
  // Dimension: Stability
  { id: 'st1', dimensionTitle: 'Stabilität', dimensionSubtitle: 'Befinden', dimensionIcon: <Anchor className="w-5 h-5" />, text: 'Wenn Sie auf die letzten Wochen blicken: Wie stabil war Ihr allgemeines Befinden im Alltag?', options: AGREEMENT_OPTIONS },
  { id: 'st2', dimensionTitle: 'Stabilität', dimensionSubtitle: 'Unterbrechungen', dimensionIcon: <Anchor className="w-5 h-5" />, text: 'Wie häufig gab es Situationen, in denen Sie Ihre Tagesplanung kurzfristig abbrechen mussten?', options: FREQUENCY_OPTIONS },
  { id: 'st3', dimensionTitle: 'Stabilität', dimensionSubtitle: 'Rhythmus', dimensionIcon: <Anchor className="w-5 h-5" />, text: 'Erscheint Ihnen Ihr aktueller Lebensrhythmus als verlässlich?', options: AGREEMENT_OPTIONS },
  // Dimension: Resources
  { id: 're1', dimensionTitle: 'Ressourcen', dimensionSubtitle: 'Sicherheit', dimensionIcon: <Sun className="w-5 h-5" />, text: 'Gibt es Orte oder Tätigkeiten, an denen Sie sich sicher und wohl fühlen?', options: AGREEMENT_OPTIONS },
  { id: 're2', dimensionTitle: 'Ressourcen', dimensionSubtitle: 'Erholung', dimensionIcon: <Sun className="w-5 h-5" />, text: 'Haben Sie Strategien, die Ihnen helfen, nach einem anstrengenden Tag zur Ruhe zu kommen?', options: AGREEMENT_OPTIONS },
  { id: 're3', dimensionTitle: 'Ressourcen', dimensionSubtitle: 'Selbstwirksamkeit', dimensionIcon: <Sun className="w-5 h-5" />, text: 'Bemerken Sie Momente, in denen Sie stolz auf das Erreichte im Alltag sind?', options: FREQUENCY_OPTIONS },
];

const SelfAssessment: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const carlaImageUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/Carla.JPG";
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Flow Definition: Intro -> Questions (18) -> ResultSummary -> Context -> Reflection -> CTA
  const steps = [
    'intro',
    ...ALL_QUESTIONS.map(q => `q_${q.id}`),
    'result_summary',
    'result_context',
    'result_reflection',
    'cta'
  ];

  const currentStepId = steps[stepIndex];

  // UX: Automatischer Scroll zum Anfang bei Step-Wechsel
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [stepIndex]);

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setDirection(1);
      setStepIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      setDirection(-1);
      setStepIndex(prev => prev - 1);
    }
  };

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    // Kleine Verzögerung für visuelles Feedback der Auswahl, dann Auto-Advance
    setTimeout(() => {
      handleNext();
    }, 450);
  };

  const reset = () => {
    setAnswers({});
    setDirection(-1);
    setStepIndex(0);
  };

  const calculateOutcome = () => {
    const getVal = (id: string, def = 0) => answers[id] ?? def;
    const load = 
      ((3 - getVal('as1')) + getVal('as2') + (3 - getVal('as3'))) +
      (getVal('ar1') + getVal('ar2') + getVal('ar3')) +
      (getVal('eb1') + getVal('eb2') + (3 - getVal('eb3'))) +
      ((3 - getVal('se1')) + (3 - getVal('se2')) + (3 - getVal('se3'))) +
      ((3 - getVal('st1')) + getVal('st2') + (3 - getVal('st3')));
    const resValue = getVal('re1') + getVal('re2') + getVal('re3');
    const net = load - resValue;

    if (net <= 7) return 'A';
    if (net <= 18) return 'B';
    return 'C';
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const renderContent = () => {
    if (currentStepId === 'intro') {
      return (
        <motion.div key="intro" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5, ease: "circOut" }} className="p-8 space-y-6">
          <div className="flex items-center space-x-3 text-accentBrown">
            <ClipboardCheck className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Pflegerische Standortbestimmung</span>
          </div>
          <h3 className="text-2xl font-bold text-accentGreen leading-tight">Ihre persönliche Orientierung</h3>
          <div className="text-[13px] text-textDark/70 leading-relaxed space-y-4">
            <p>Dieses Tool unterstützt Sie dabei, Ihren Alltag zu reflektieren. Wir schauen gemeinsam auf Belastungen und Kraftquellen in Ihrem Leben.</p>
            <p>Dauer: ca. 5 Minuten. Es geht um Ihre persönliche Wahrnehmung – ganz ohne Bewertung oder Diagnose.</p>
          </div>
          <div className="bg-secondary/50 p-5 rounded-[24px] border border-gray-100 flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-accentGreen shrink-0 mt-0.5" />
            <p className="text-[11px] text-accentGreen/70 leading-relaxed font-bold">
              Wichtig: Dies stellt keine medizinische Untersuchung dar, sondern dient der persönlichen Orientierung.
            </p>
          </div>
          <div className="space-y-3">
            <button onClick={handleNext} className="w-full bg-accentGreen text-white py-4 rounded-[20px] font-bold shadow-lg hover:bg-accentBrown transition-all flex items-center justify-center space-x-2 group">
              <span>Assessment starten</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-[11px] font-bold text-accentBrown/60 uppercase tracking-widest">
              Dauert ungefähr 7 Minuten.
            </p>
          </div>
        </motion.div>
      );
    }

    if (currentStepId.startsWith('q_')) {
      const qId = currentStepId.replace('q_', '');
      const question = ALL_QUESTIONS.find(q => q.id === qId);
      if (!question) return null;

      return (
        <motion.div key={question.id} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5, ease: "circOut" }} className="p-8 space-y-8">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-accentBrown">
                {question.dimensionIcon}
                <span className="text-[10px] font-black uppercase tracking-widest">{question.dimensionTitle}</span>
              </div>
              <p className="text-[11px] text-textDark/50 font-medium">{question.dimensionSubtitle}</p>
            </div>
            <span className="text-[10px] font-black text-gray-300">Frage {ALL_QUESTIONS.indexOf(question) + 1} von {ALL_QUESTIONS.length}</span>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl md:text-2xl font-bold text-accentGreen leading-tight">{question.text}</h4>
            <div className="grid gap-3">
              {question.options.map((opt) => (
                <button 
                  key={opt.label}
                  onClick={() => handleAnswer(question.id, opt.value)}
                  className={`w-full text-left px-6 py-4 rounded-2xl border transition-all text-sm font-medium shadow-sm active:scale-95 ${
                    answers[question.id] === opt.value 
                    ? 'bg-accentGreen text-white border-accentGreen shadow-md' 
                    : 'bg-white text-textDark/70 border-gray-100 hover:border-accentBrown hover:bg-secondary/50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button onClick={handleBack} className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-accentBrown transition-colors">
              <ArrowLeft className="w-3 h-3" />
              <span>Zurück</span>
            </button>
            <button onClick={() => handleNext()} className="text-[10px] font-black uppercase tracking-widest text-accentBrown/40 hover:text-accentBrown">Frage überspringen</button>
          </div>
        </motion.div>
      );
    }

    if (currentStepId === 'result_summary') {
      const outcome = calculateOutcome();
      return (
        <motion.div key="result_summary" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5 }} className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-accentBrown">Zusammenfassende Betrachtung</span>
            <h4 className="text-xl font-extrabold text-accentGreen uppercase tracking-tight leading-tight">
              {outcome === 'A' && "Aktuell stabile Orientierung"}
              {outcome === 'B' && "Hinweise auf möglichen Unterstützungsbedarf"}
              {outcome === 'C' && "Erhöhter Unterstützungsbedarf im Alltag"}
            </h4>
          </div>
          <div className="bg-white p-7 rounded-[32px] border border-gray-100 shadow-sm space-y-5 text-[13px] text-textDark/80 leading-relaxed">
            {outcome === 'A' && <p>Ihr Alltag wirkt aktuell überwiegend tragfähig. Belastungen werden durch vorhandene Ressourcen aufgefangen.</p>}
            {outcome === 'B' && <p>Mehrere Bereiche Ihres Alltags wirken aktuell herausfordernd. Ressourcen sind zwar vorhanden, werden jedoch teils beansprucht.</p>}
            {outcome === 'C' && <p>Mehrere Alltagsbereiche wirken gleichzeitig belastet. Ressourcen erscheinen aktuell begrenzt oder schwer zugänglich.</p>}
            <p className="pt-4 border-t border-gray-50 flex items-center space-x-2 opacity-50">
              <span className="text-[10px] font-bold">Diese Einschätzung basiert auf der Gesamtschau Ihrer Angaben.</span>
            </p>
          </div>
          <button onClick={handleNext} className="w-full bg-accentGreen text-white py-4 rounded-[20px] font-bold shadow-lg hover:bg-accentBrown transition-all flex items-center justify-center space-x-2">
            <span>Einordnung ansehen</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      );
    }

    if (currentStepId === 'result_context') {
      return (
        <motion.div key="result_context" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5 }} className="p-8 space-y-6">
          <div className="flex items-center space-x-3 text-accentBrown">
            <BookOpen className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Kontextuelle Einordnung</span>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-accentGreen">Was bedeutet dieses Ergebnis?</h4>
            <div className="space-y-4 text-sm text-textDark/70 leading-relaxed">
              <p>Belastungen im Alltag sind oft dynamisch. Solche Phasen entstehen häufig, wenn äussere Anforderungen and innere Ressourcen zeitweise nicht mehr im Gleichgewicht stehen.</p>
              <p>Ambulante psychiatrische Pflege setzt genau hier an, um diese Brücke zwischen Belastung und Bewältigung wieder tragfähig zu machen.</p>
            </div>
          </div>
          <button onClick={handleNext} className="w-full bg-accentGreen text-white py-4 rounded-[20px] font-bold shadow-lg hover:bg-accentBrown transition-all">Weiter zur Reflexion</button>
        </motion.div>
      );
    }

    if (currentStepId === 'result_reflection') {
      return (
        <motion.div key="result_reflection" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5 }} className="p-8 space-y-8">
          <div className="flex items-center space-x-3 text-accentBrown">
            <HelpCircle className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Reflexive Selbstklärung</span>
          </div>
          <div className="space-y-8 text-center">
            <h4 className="text-xl font-bold text-accentGreen">Für Sie zum Nachdenken:</h4>
            <div className="space-y-12">
              <div className="space-y-3">
                <p className="text-base font-semibold text-textDark leading-relaxed">Gibt es einen Bereich, der sich heute besonders schwer anfühlt?</p>
                <div className="w-12 h-1 bg-accentBrown/20 mx-auto rounded-full" />
              </div>
              <div className="space-y-3">
                <p className="text-base font-semibold text-textDark leading-relaxed">Was war in den letzten Tagen ein kleiner Moment der Ruhe?</p>
                <div className="w-12 h-1 bg-accentBrown/20 mx-auto rounded-full" />
              </div>
            </div>
          </div>
          <button onClick={handleNext} className="w-full bg-accentGreen text-white py-4 rounded-[20px] font-bold shadow-lg hover:bg-accentBrown transition-all">Zum Abschluss</button>
        </motion.div>
      );
    }

    if (currentStepId === 'cta') {
      return (
        <motion.div key="cta" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5 }} className="p-8 space-y-10">
          <div className="text-center space-y-4">
            <div className="relative w-28 h-28 mx-auto">
              <img src={carlaImageUrl} alt="Carla Vanessa Carcaiso" className="w-full h-full rounded-full border-4 border-accentBrown/20 object-cover shadow-xl" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-accentGreen">Carla Vanessa Carcaiso</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accentBrown">Gründerin & Geschäftsführerin</p>
            </div>
          </div>
          <div className="grid gap-3">
            <a href="mailto:carla@carlacares.li" className="w-full bg-accentGreen text-white py-4 rounded-[20px] font-bold shadow-xl flex items-center justify-center space-x-3 group">
              <Mail className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform" />
              <span>carla@carlacares.li</span>
            </a>
            <a href="tel:+41791940718" className="w-full bg-white border-2 border-accentGreen/10 text-accentGreen py-4 rounded-[20px] font-bold flex items-center justify-center space-x-3 group">
              <Phone className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform" />
              <span>+41 79 194 07 18</span>
            </a>
          </div>
          <div className="pt-4 flex flex-col items-center space-y-4">
            <button onClick={reset} className="text-[11px] font-black uppercase tracking-widest text-accentGreen/40 hover:text-accentGreen flex items-center space-x-2">
              <RefreshCw className="w-3 h-3" />
              <span>Neu starten</span>
            </button>
          </div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div ref={scrollRef} className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden min-h-[620px] flex flex-col relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-50 z-10">
        <motion.div animate={{ width: `${(stepIndex / (steps.length - 1)) * 100}%` }} className="h-full bg-accentBrown transition-all duration-500" />
      </div>
      <div className="flex-grow flex flex-col justify-center overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {renderContent()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SelfAssessment;
