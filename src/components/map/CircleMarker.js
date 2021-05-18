import React from 'react';
import ReactDOMServer from 'react-dom/server'
import L from 'leaflet';
import { Marker } from 'react-leaflet';

const Icon = ({ text }) => {
    return (
      <svg width="40px" height="40px" viewBox="0 0 42 42" className="circle" role="img">
        <circle cx="21" cy="21" r="15.91549430918954" fill="dimGrey" role="presentation"></circle>
        <g className="circle-text">
          <text className="circle-number" textAnchor="middle" stroke="#fff" x="50%" y="60%">
            {text}
          </text>
        </g>
      </svg>
    );
  }
  
  const CircleMarker = ({ position, index }) => {
    const icon = L.divIcon({
      className: 'custom-icon',
      html: ReactDOMServer.renderToString(<Icon text={index}/>)
    });
    return (
      <Marker position={position} icon={icon}/>
    )
  }

  export default CircleMarker;
  