import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Container from "../components/Container";

function LoginPage({ token, setToken }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");
    setPassword("");
    setUsername("");
    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: { username: username, password: password },
    })
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
        localStorage.setItem("userToken", res.data.token);
      })
      .catch((error) => setError(error.response.data))
      .finally(navigate("/"));
  };
  return (
    <Container className="w-full h-screen px-6 md:px-20 py-20 md:py-32 lg:py-0 flex justify-center items-center bg-blue-100">
      <div className="w-full max-w-md h-fit p-8 rounded-2xl space-y-10 bg-white">
        <h1 className="text-3xl font-semibold">Login</h1>

        <div className="w-full space-y-3">
          <form className="w-full flex flex-col gap-1">
            <label className="font-semibold">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="example: jonhdoe_"
              className="focus:outline-none border px-3 py-1 rounded-md placeholder:italic placeholder:text-sm"
            />
          </form>
          <form className="w-full flex flex-col gap-1">
            <label className="font-semibold">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="***********"
              className="focus:outline-none border px-3 py-1 rounded-md placeholder:italic placeholder:text-sm"
            />
          </form>
          {error && <p className="text-center text-xs text-red-500">{error}</p>}
        </div>
        <div className="w-full flex justify-center gap-6">
          <button
            onClick={handleLogin}
            className="px-6 py-1.5 rounded-md bg-slate-900 text-white"
          >
            Login
          </button>
          <Link to="/">
            <button className="px-6 py-1.5 rounded-md bg-white text-black border border-slate-900">
              Back
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default LoginPage;
