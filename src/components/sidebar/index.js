import React, { useCallback, useState } from 'react';
import createGpx from 'gps-to-gpx';
import { useWaypointsContext } from '../../context/WaypointsContext';
import IconBars from './BarsIcon';
import IconCross from './CrossIcon';

const ListItem = ({ index, handleDrag, handleDrop, deleteWaypoint }) => {
  const handleDelete = useCallback(() => {
    deleteWaypoint(index)
  }, [index, deleteWaypoint]);
  return (
    <div className="sidebar-list--item-wrapper">
      <div
        draggable={true}
        id={index}
        className="sidebar-list--item"
        onDragOver={(ev) => ev.preventDefault()}
        onDragStart={handleDrag}
        onDrop={handleDrop}
      >
        <IconBars className="icon icon-bars" />
        Waypoint {index}
      </div>
      <IconCross className="icon icon-cross" onClick={handleDelete} />
    </div>
  )
}

const Sidebar = () => {
  const [dragId, setDragId] = useState();
  const { waypoints, setWaypoints } = useWaypointsContext();

  const handleDrag = useCallback((ev) => {
    setDragId(ev.currentTarget.id);
  }, [setDragId]);

  const handleDrop = useCallback((ev) => {
    const dropIndex = waypoints.findIndex(item => item.number === parseInt(ev.currentTarget.id));
    const dragIndex = waypoints.findIndex(item => item.number === parseInt(dragId));

    const newWaypoints = [...waypoints];
    newWaypoints.splice(dropIndex, 0, newWaypoints.splice(dragIndex, 1)[0]);

    setWaypoints(newWaypoints);
  }, [waypoints, dragId, setWaypoints]);

  const handleDelete = useCallback((index) => {
    setWaypoints(waypoints.filter(waypoint => waypoint.number !== index));
  }, [setWaypoints, waypoints])

  const handleDownload = useCallback(() => {
    const gpx = createGpx(waypoints.map(item => item.position), {
      activityName: 'Cross country run',
      startTime: Date.now(),
      latKey: 'lat',
      lonKey: 'lng',  
    });

    const element = document.createElement("a");
    const file = new Blob([gpx], {type: 'text/xml'});
    element.href = URL.createObjectURL(file);
    element.download = "myRoute.gpx";
    document.body.appendChild(element);
    element.click();
  }, [waypoints])

  return (
    <>
      <header className="sidebar-header">Route builder</header>
      <div className="sidebar-list">
        <div className="sidebar-list--wrapper">
          {waypoints.length === 0 && <span className="sidebar-list--no-items">Please add waypoints on the map</span>}
          {waypoints.map(({ number }) => <ListItem key={`list-item-${number}`} handleDrag={handleDrag} handleDrop={handleDrop} deleteWaypoint={handleDelete} index={number} />)}
        </div>
      </div>
      <div className="sidebar-button--wrapper">
        <button className="sidebar-button" onClick={handleDownload} disabled={waypoints.length === 0}>Download your Route</button>
      </div>
    </>
  )
}

export default Sidebar;
