import React, { useState } from "react";
import axios from 'axios';
import TravelPlans from "./components/TravelPlans";

const App = () => {
  const [travelPlans, setTravelPlans] = useState([
    { day: "day1", startingPoint: "", endPoint: "", waypoints: "" },
  ]);

  const handleAddTravelPlan = () => {
    const newTravelPlans = [
      ...travelPlans,
      {
        day: `day${travelPlans.length + 1}`,
        startingPoint: "",
        endPoint: "",
        waypoints: "",
      },
    ];
    setTravelPlans(newTravelPlans);
  };

  const handleDeleteTravelPlan = (day) => {
    const newTravelPlans = travelPlans.filter((tp) => tp.day !== day);
    setTravelPlans(newTravelPlans);
  };

  const handleTravelPlanChange = (updatedTravelPlan) => {
    const index = travelPlans.findIndex((tp) => tp.day === updatedTravelPlan.day);
    const newTravelPlans = [...travelPlans];
    newTravelPlans[index] = updatedTravelPlan;
    setTravelPlans(newTravelPlans);
  };

  const travelPlanComponents = travelPlans.map((travelPlan, index) => (
    <TravelPlans
      key={travelPlan.day}
      index={index}
      travelPlan={travelPlan}
      onChange={handleTravelPlanChange}
      onDelete={handleDeleteTravelPlan}
    />
  ));

  console.log(travelPlans);

  const savePlans = () => {
    axios
      .post("/savePlans", travelPlans)
      .then((response) => {
        console.log(travelPlans)
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>여행 계획 세우기</h1>
      <button onClick={handleAddTravelPlan}>일정 추가</button>
      {travelPlanComponents}
      <button onClick={savePlans}>저장하기</button>
    </div>
  );
};

export default App;
