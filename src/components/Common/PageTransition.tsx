import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  isVisible: boolean;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, isVisible }) => {
  return (
    <div className={`page-transition ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};