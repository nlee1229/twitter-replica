import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">

      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
    </div>
  );
}

export default App;
