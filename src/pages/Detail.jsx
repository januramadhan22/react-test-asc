import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  const getDetail = () => {
    axios
      .get(`https://fakestoreapi.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <p>{user.email}</p>
    </div>
  );
}

export default Detail;
