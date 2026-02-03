import React from 'react';
import '../styles/form.css'; // Importing the CSS file is crucial

const Container = ({ children }) => {
  return (
    // Replaced inline styles with the "main-wrapper" class
    <div className="main-wrapper">
      
      {/* Replaced inline styles with the "app-card" class */}
      <div className="app-card">
        {children}
      </div>
      
    </div>
  );
};

export default Container;