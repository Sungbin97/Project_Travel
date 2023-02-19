import { useState } from "react";
import Waypoints from "./Waypoints";
import StartingPoint from "./StartingPoint";
import EndPoint from "./EndPoint";

const TravlePlans = () => {
  return (
    <>
      <h1>여행 계획하기</h1>
      <ul>
        <StartingPoint />
        <Waypoints />
        <EndPoint />
      </ul>
    </>
  );
};
export default TravlePlans;
