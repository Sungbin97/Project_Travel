import { useState } from "react";
import Waypoints from "./Waypoints";
import StartingPoint from "./StartingPoint";
import EndPoint from "./EndPoint";

const TravlePlans = () => {
  const day1 = "day 1";
  const [newSchedule, setNewSchedule] = useState([
    <ul key={day1} id={day1}>
      {day1}
      <br />
      <StartingPoint />
      <Waypoints />
      <EndPoint />
    </ul>,
  ]);

  const addNewSchedule = () => {
    setNewSchedule([...newSchedule, { id: "day " + (newSchedule.length + 1) }]);
  };

  const removeSchedule = (id) => {
    setNewSchedule(newSchedule.filter((schedule) => schedule.id !== id));
  };

  return (
    <>
      <h1>여행 계획하기</h1>
      {newSchedule.map((schedule) => (
        <ul key={schedule.id} id={schedule.id}>
          {schedule.id}
          <br />
          <StartingPoint />
          <Waypoints />
          <EndPoint addNewSchedule={addNewSchedule} />
          <button>일정 삭제</button>
        </ul>
      ))}
    </>
  );
};
export default TravlePlans;
