import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from "axios";
import NewTravel from "./components/NewTravel";
import Main from "./components/Main";

function App() {
  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    axios
      .get(baseUrl + "/travuler/user/list")
      .then((response) => {
        console.log("axios response: ", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/travuler/newTravel" element={<NewTravel />}></Route>
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
