import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Sidebar } from './components/Navigation/Sidebar';
import { Terminal } from './components/Navigation/Terminal';
import { PageTransition } from './components/Common/PageTransition';
import { LiveMetrics } from './components/Common/LiveMetrics';
import { PersonalStats } from './components/Common/PersonalStats';
import { About } from './components/Pages/About';
import { Projects } from './components/Pages/Projects';
import { Skills } from './components/Pages/Skills';
import { Experience } from './components/Pages/Experience';
import { Contact } from './components/Pages/Contact';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [themeChangeCount, setThemeChangeCount] = useState(0);

  const handlePageChange = (page: PageType) => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 150);
  };

  const handleLogoClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(null);
      setIsTransitioning(false);
    }, 150);
  };

  const handleThemeChange = () => {
    setThemeChangeCount(prev => prev + 1);
  };

  const renderPage = () => {
    if (isTransitioning) return null;
    
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider>
      <div className="flex min-h-screen">
        <Sidebar 
          currentPage={currentPage} 
          onPageChange={handlePageChange}
          onLogoClick={handleLogoClick}
          onThemeChange={handleThemeChange}
        />
        
        <main className="main-content">
          <LiveMetrics />
          
          {!currentPage ? (
            <>
              <Terminal onNavigate={handlePageChange} currentPage={currentPage} />
              <PersonalStats onThemeChange={themeChangeCount > 0 ? handleThemeChange : undefined} />
            </>
          ) : (
            <PageTransition isVisible={!isTransitioning}>
              {renderPage()}
            </PageTransition>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;