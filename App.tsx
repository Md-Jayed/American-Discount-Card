
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Fundraising from './pages/Fundraising';
import Advertisers from './pages/Advertisers';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  // Handle back button and scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={setActivePage} />;
      case 'how-it-works':
        return <HowItWorks onNavigate={setActivePage} />;
      case 'fundraising':
        return <Fundraising onNavigate={setActivePage} />;
      case 'advertisers':
        return <Advertisers onNavigate={setActivePage} />;
      case 'pricing':
        return <Pricing onNavigate={setActivePage} />;
      case 'faq':
        return <FAQ />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Legal type="privacy" />;
      case 'terms':
        return <Legal type="terms" />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      {renderPage()}
    </Layout>
  );
};

export default App;
