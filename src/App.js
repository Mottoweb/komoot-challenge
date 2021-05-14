import React from 'react';
import LeafletMap from './components/map'
import './App.css';
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <div className="app">
      <div className="sidebar-container">
        Sidebar
      </div>
      <div className="map-container">
        <LeafletMap />
      </div>
    </div>
  );
}

export default App;
