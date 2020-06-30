import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthProvider from './context';
import AppRouter from './router';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </div>
  );
}

export default App;
