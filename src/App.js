import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './styles/index.css';  // Importamos estilos globales

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
