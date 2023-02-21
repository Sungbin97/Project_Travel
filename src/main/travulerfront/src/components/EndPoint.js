import { useState } from "react";

const EndPoint = (props) => {
  const [endPoint, setEndPoint] = useState("");

  const addEndPoint = (e) => {
    setEndPoint(e.target.value);
  };

  return (
    <>
      도착:{" "}
      <input
        type="text"
        placeholder="도착지를 입력해주세요."
        onChange={addEndPoint}
      />
      <button onClick={props.addNewSchedule}>일정 추가</button>
    </>
  );
};

export default EndPoint;
