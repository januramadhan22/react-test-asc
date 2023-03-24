import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import LandingPage from "../pages/LandingPage";
import User from "../pages/User";
import LoginPage from "../pages/LoginPage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <Route
            path="/"
            element={<User token={token} setToken={setToken} />}
          />
        ) : (
          <Route path="/" element={<LandingPage />} />
        )}
        <Route
          path="/login"
          element={<LoginPage token={token} setToken={setToken} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
