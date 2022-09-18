import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return <div>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
    </Routes>
  </div>;
}

export default App;
