import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Main from "./components/Main";
import TravlePlans from "./components/TravlePlans";

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
            <Route exact path="/" element={<Main />}></Route>
            <Route
              path="/travuler/travlePlans"
              element={<TravlePlans />}
            ></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
