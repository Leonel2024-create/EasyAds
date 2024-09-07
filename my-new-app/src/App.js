import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CreateCampaign from './components/CreateCampaign';
import UploadMedia from './components/UploadMedia';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Bienvenido a EasyAds con Vite</h1>
      <CreateCampaign />
      <UploadMedia />
      <Dashboard />
    </div>
  );
}

export default App;
