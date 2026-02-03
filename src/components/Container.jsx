import React from 'react';

const Container = ({ children }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#eef0f2', // Grey background for browser
    }}>
      {/* This is the CARD that holds your app */}
      <div style={{
        width: '100%',
        // maxWidth: '450px', // FIXED WIDTH: Prevents shrinking/squeezing
        // minHeight: '667px',
        width: '375px',
height: '812px',
        maxHeight: '90vh', // Fits on screen nicely
        backgroundColor: '#ffffff',
        boxShadow: '0px 0px 20px rgba(0,0,0,0.1)',
        borderRadius: '4px',
        overflowY: 'auto', // Scroll if content is too long
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {children}
      </div>
    </div>
  );
};

export default Container;