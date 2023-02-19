import { useState } from "react";

const StartingPoint = () => {
  const [startingPoint, setStartingPoint] = useState("");

  const changeStartingPoint = (e) => {
    setStartingPoint(e.target.value);
  };
  return (
    <>
      출발:{" "}
      <input
        type="text"
        placeholder="출발지를 입력해주세요."
        onChange={changeStartingPoint}
        value={startingPoint}
      />
    </>
  );
};

export default StartingPoint;
