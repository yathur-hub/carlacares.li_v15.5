import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import CareAndSupport from './pages/CareAndSupport';
import Billing from './pages/Billing';
import AboutMe from './pages/AboutMe';
import Referrers from './pages/Referrers';
import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';
import Footer from './components/Footer';

type ViewType = 'home' | 'care' | 'billing' | 'about' | 'referrers' | 'imprint' | 'privacy';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');

  const getPathView = useCallback((): ViewType => {
    const path = window.location.pathname;
    switch (path) {
      case '/pflege-begleitung': return 'care';
      case '/abrechnung': return 'billing';
      case '/ueber-mich': return 'about';
      case '/fuer-zuweisende': return 'referrers';
      case '/impressum': return 'imprint';
      case '/datenschutz': return 'privacy';
      default: return 'home';
    }
  }, []);

  const scrollToSection = useCallback((id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  }, []);

  useEffect(() => {
    // Initial sync
    const initialView = getPathView();
    setView(initialView);
    
    if (window.location.pathname === '/kontakt') {
      scrollToSection('kontakt');
    }

    const handlePopState = () => {
      setView(getPathView());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getPathView, scrollToSection]);

  const navigateTo = (target: ViewType | 'kontakt') => {
    let path = '/';
    let nextView: ViewType = 'home';

    switch (target) {
      case 'care': path = '/pflege-begleitung'; nextView = 'care'; break;
      case 'billing': path = '/abrechnung'; nextView = 'billing'; break;
      case 'about': path = '/ueber-mich'; nextView = 'about'; break;
      case 'referrers': path = '/fuer-zuweisende'; nextView = 'referrers'; break;
      case 'imprint': path = '/impressum'; nextView = 'imprint'; break;
      case 'privacy': path = '/datenschutz'; nextView = 'privacy'; break;
      case 'kontakt': path = '/kontakt'; nextView = 'home'; break;
      default: path = '/'; nextView = 'home'; break;
    }

    // Always update internal state first
    setView(nextView);

    // Update URL if supported/needed
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }

    // Scroll handling
    if (target === 'kontakt') {
      scrollToSection('kontakt');
    } else {
      window.scrollTo(0, 0);
    }
  };

  const getActiveHeaderView = (): 'home' | 'care' | 'billing' | 'about' => {
    if (view === 'care') return 'care';
    if (view === 'billing') return 'billing';
    if (view === 'about') return 'about';
    return 'home';
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-accentBrown/20">
      <Header 
        currentView={getActiveHeaderView()} 
        onNavigate={navigateTo} 
      />
      
      <main className="flex-grow overflow-hidden">
        {view === 'home' && (
          <Home onNavigateReferrers={() => navigateTo('referrers')} />
        )}
        {view === 'care' && (
          <CareAndSupport onNavigateToKontakt={() => navigateTo('kontakt')} />
        )}
        {view === 'billing' && (
          <Billing onNavigateToKontakt={() => navigateTo('kontakt')} />
        )}
        {view === 'about' && (
          <AboutMe onNavigateToKontakt={() => navigateTo('kontakt')} />
        )}
        {view === 'referrers' && (
          <Referrers onNavigateToKontakt={() => navigateTo('kontakt')} />
        )}
        {view === 'imprint' && (
          <Imprint />
        )}
        {view === 'privacy' && (
          <Privacy />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;