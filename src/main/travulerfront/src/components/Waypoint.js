import React from 'react';

const Waypoint = ({ waypoint, index, onChange, onDelete }) => {
  const waypointKey = `waypoint${index + 1}`;

  return (
    <>
    <div key={waypointKey}>
      <label htmlFor={waypointKey}>경유지 {index + 1}:</label>
      <input
        type="text"
        id={waypointKey}
        name={waypointKey}
        value={waypoint}
        onChange={onChange}
      />
      <button onClick={onDelete}>
        삭제
      </button>
    </div>
    </>
  );
};

export default Waypoint;
