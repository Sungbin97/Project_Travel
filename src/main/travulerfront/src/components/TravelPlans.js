import React, { useState } from "react";
import StartingPoint from "./StartingPoint";
import EndPoint from "./EndPoint";
import Waypoint from "./Waypoint";

const TravelPlans = ({ index, travelPlan, onChange, onDelete }) => {
  const [waypoints, setWaypoints] = useState(travelPlan.waypoints.split(","));

  const handleWaypointChange = (event, index) => {
    const newWaypoints = [...waypoints];
    newWaypoints[index] = event.target.value;
    setWaypoints(newWaypoints);
    onChange({
      ...travelPlan,
      waypoints: newWaypoints.join(","),
    });
  };

  const handleAddWaypoint = () => {
    const newWaypoints = [...waypoints, ""];
    setWaypoints(newWaypoints);
    onChange({
      ...travelPlan,
      waypoints: newWaypoints.join(","),
    });
  };

  const handleDeleteWaypoint = () => {
    const newWaypoints = waypoints.slice(0, -1);
    setWaypoints(newWaypoints);
    onChange({
      ...travelPlan,
      waypoints: newWaypoints.join(","),
    });
  };

  const handleDeleteTravelPlan = () => {
    onDelete(travelPlan.id);
  };

  const waypointComponents = waypoints.map((waypoint, index) => (
    <Waypoint
      key={`waypoint${index + 1}`}
      index={index}
      waypoint={waypoint}
      onChange={(event) => handleWaypointChange(event, index)}
      onDelete={handleDeleteWaypoint}
    />
  ));

  const travelPlanKey = `day${index + 1}`;

  return (
    <div key={travelPlanKey}>
      <h3>{travelPlanKey}</h3>
      <StartingPoint
        startingPoint={travelPlan.startingPoint}
        onChange={(event) =>
          onChange({ ...travelPlan, startingPoint: event.target.value })
        }
      />
      {waypointComponents}
      <button onClick={handleAddWaypoint}>경유지 추가</button>
      <EndPoint
        endPoint={travelPlan.endPoint}
        onChange={(event) =>
          onChange({ ...travelPlan, endPoint: event.target.value })
        }
      />
      <button onClick={handleDeleteTravelPlan} disabled={index === 0}>
        삭제
      </button>
    </div>
  );
};

export default TravelPlans;
