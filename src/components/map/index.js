import React, { useState } from 'react';
import { MapContainer, TileLayer, SVGOverlay, Polyline, useMapEvents } from 'react-leaflet';

const NumberMarker = ({ position, index }) => {
  const boundScale = 0.055;
  const bounds = [{ lat: position.lat - boundScale, lng: position.lng - boundScale}, { lat: position.lat + boundScale, lng: position.lng + boundScale}]
  return ( 
    <SVGOverlay bounds={bounds}>
      <circle r="10" cx="10" cy="10" fill="grey" />
      <text textAnchor="middle" x="50%" y="50%" stroke="white">
        {index+1}
      </text>
    </SVGOverlay>
  )
}

const Markers = () => {
  const [waypoints, setWaypoints] = useState([]);
  const lineOptions = { color: 'black' }
  useMapEvents({
    click(e) {
      setWaypoints([...waypoints, e.latlng]);
    },
  })
  return (
    <>
      <Polyline pathOptions={lineOptions} positions={waypoints} />
      {waypoints.map((position, index) => <NumberMarker key={position} index={index} position={position} />)}
    </>
  )
}

const defaultLatLng = [48.865572, 2.283523];
const zoom = 8;

const LeafletMap = () => {
   return (
     <MapContainer id="mapId"
        center={defaultLatLng}
        zoom={zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
          </TileLayer>
          <Markers />
     </MapContainer>
   )
}

export default LeafletMap;