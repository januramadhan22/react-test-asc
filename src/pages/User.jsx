import React from "react";

function User({ token, setToken }) {
  const handleLogout = () => {
    setToken("");
    localStorage.clear();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default User;
