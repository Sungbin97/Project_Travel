import { useState } from "react";

const EndPoint = () => {
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
    </>
  );
};

export default EndPoint;
