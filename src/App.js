import React from 'react';
import Sidebar from './Sidebar'; 
import MainContent from './MainContent';// Path to your Sidebar component

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;

