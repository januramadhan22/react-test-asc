import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";

function User({ token, setToken }) {
  const [users, setUsers] = useState([]);

  const handleLogout = () => {
    setToken("");
    localStorage.clear();
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://fakestoreapi.com/users/${id}`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const getUsers = () => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container className="w-full h-screen px-6 md:px-20 py-20 md:py-32 lg:py-0 flex flex-col gap-10 justify-center items-center bg-white">
      <button
        onClick={handleLogout}
        className="px-5 py-2 bg-red-600 text-white rounded-lg"
      >
        Logout
      </button>
      <table className="table-auto w-10/12 mx-auto">
        <thead className="text-left bg-gray-200 px-2 py-2">
          <th>No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </thead>
        {users.map((user) => (
          <tbody key={user.id}>
            <td>{user.id}</td>
            <td className="capitalize">
              {user.name.firstname} {user.name.lastname}
            </td>
            <td>{user.email}</td>
            <td className="capitalize">
              {user.address.street} {user.address.number}, {user.address.city}
            </td>
            <td className="flex gap-2">
              <Link to={`/user/${user.id}`}>
                <button className="bg-blue-600 px-3 py-1 rounded-md text-xs text-white">
                  View
                </button>
              </Link>
              <button className="bg-blue-600 px-3 py-1 rounded-md text-xs text-white">
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-600 px-3 py-1 rounded-md text-xs text-white"
              >
                Delete
              </button>
            </td>
          </tbody>
        ))}
      </table>
    </Container>
  );
}

export default User;
