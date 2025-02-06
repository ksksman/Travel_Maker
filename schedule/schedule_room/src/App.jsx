import React from "react";
import { Routes, Route } from "react-router-dom";
import TravelList from "./components/TravelList.jsx";
import TravelDetail from "./components/TravelDetail.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TravelList />} />
      <Route path="/trips/:id" element={<TravelDetail />} />
    </Routes>
  );
}

export default App;
