import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import DashBoard from "./pages/DashBoard/DashBoard";
import HomePage from "./pages/HomePage/HomePage";
import UsersProfile from "./pages/UsersProfile/UsersProfile";

function App() {
  return <div>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/dashboard" element={<DashBoard/>}>
        <Route path="usersprofile" element={<UsersProfile></UsersProfile>}></Route>
      </Route>
    </Routes>
    <Footer></Footer>
  </div>;
}

export default App;
