import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "../pages/LandingPage";
import User from "../pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
