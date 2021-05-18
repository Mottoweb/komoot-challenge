import React from 'react';
import { MapContainer, TileLayer, Polyline, useMapEvents } from 'react-leaflet';
import { useWaypointsContext } from '../../context/WaypointsContext';
import CircleMarker from './CircleMarker';

const Markers = () => {
  const { waypoints, setWaypoints } = useWaypointsContext();
  const lineOptions = { color: 'dodgerBlue' };

  // get the highest number in current waypoints array or length
  const currentNumber = waypoints.length === 0 ? waypoints.length : Math.max.apply(null, waypoints.map(item => item.number));
  useMapEvents({
    click(e) {
      setWaypoints([...waypoints, { number: currentNumber + 1, position: e.latlng}]);
    },
  })
  return (
    <>
      <Polyline pathOptions={lineOptions} positions={waypoints.map(each => each.position)} />
      {waypoints.map(({ position, number }) => (<CircleMarker key={`marker-${number}`} position={position} index={number} />))}
    </>
  )
}

const LeafletMap = () => {
  return (
    <MapContainer id="mapId" center={[45.832672, 6.865223]} zoom={8} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
      </TileLayer>
      <Markers />
    </MapContainer>
  )
}

export default LeafletMap;