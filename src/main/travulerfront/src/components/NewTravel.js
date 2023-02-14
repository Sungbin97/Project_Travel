import { useState } from "react";

const NewTravel = ({ onRemove }) => {
  let waypointPlaceholder = "경유지를 입력해주세요";
  const [start, setStart] = useState("출발지를 입력해주세요.");
  const [end, setEnd] = useState('도착지를 입력해주세요');
  const [waypoint, setWaypoint] = useState(waypointPlaceholder);
  const [elements, setElements] = useState([]);
  

  const addWaypoint = () => {
    setElements([
      ...elements,
      <li key={elements.length} id={"waypoint" + elements.length}>
        경유지{elements.length + 1}{" "}
        <input type="text" placeholder={waypointPlaceholder} onChange={setWaypoint} />
        <button>삭제</button>
      </li>,
    ]);
  };

  return (
    <div>
      <h1>여행 계획 세우기</h1>
      <ul>
        출발: <input placeholder={start} onChange={setStart} />
        <button onClick={addWaypoint}>경유지 추가</button>
        {elements.map((element) => element)}
      </ul>
    </div>
  );
};
export default NewTravel;
