import React, { useState } from 'react';

const WaypointsContext = React.createContext(null);

const WaypointsContextProvider = ({ children }) => {
  const [waypoints, setWaypoints] = useState([]);

  const value = {
    waypoints,
    setWaypoints,
  }
  return (
    <WaypointsContext.Provider value={value}>
      {children}
    </WaypointsContext.Provider>
  )
}

const useWaypointsContext = () => {
  const value = React.useContext(WaypointsContext);
  if (value === null) {
    throw new Error('`useWaypointsContext` is used outside of `WaypointsContextProvider`');
  }
  return value;
};

export {
  useWaypointsContext,
  WaypointsContextProvider,
};