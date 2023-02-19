import { useState } from "react";

const Waypoints = () => {
  const [waypoint, setWaypoint] = useState([]);

  const addWaypoint = () => {
    setWaypoint([...waypoint, { id: "waypoint" + waypoint.length }]);
  };

  const removeWaypoint = (idToRemove) => {
    setWaypoint(waypoint.filter((tag) => tag.id !== idToRemove));
  };
  return (
    <>
      <button onClick={addWaypoint}>경유지 추가</button>
      {waypoint.map((tag) => (
        <li key={tag.id}>
          경유지:{" "}
          <input type="text" placeholder="경유지를 입력해주세요." />
          <button onClick={() => removeWaypoint(tag.id)}>삭제</button>
        </li>
      ))}
    </>
  );
};

export default Waypoints;
