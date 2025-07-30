import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import LandlordsPage from './components/LandlordsPage';
import MultiFamilyPage from './components/MultiFamilyPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landlords':
        return <LandlordsPage onNavigateToContact={() => navigateToPage('contact')} />;
      case 'multifamily':
        return <MultiFamilyPage onNavigateToContact={() => navigateToPage('contact')} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigateToContact={() => navigateToPage('contact')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        isScrolled={isScrolled}
        currentPage={currentPage}
        onNavigateToPage={navigateToPage}
      />
      {renderCurrentPage()}
      <Footer onNavigateToContact={() => navigateToPage('contact')} />
    </div>
  );
}

export default App;