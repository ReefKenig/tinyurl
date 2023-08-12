import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../components/title";

const Home = () => {
  const [message, setMessage] = useState<string>("");

  const getWelcomeMessage = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "applicaion/json" },
      };
      const response = await axios.get(
        "http://host.docker.internal:8000/",
        requestOptions
      );
      const data = response.data;

      setMessage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  return (
    <div>
      <Title title={message} />
    </div>
  );
};

export default Home;
