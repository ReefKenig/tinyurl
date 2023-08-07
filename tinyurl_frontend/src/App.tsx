// Imports
import React, { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// Components
import ShortenUrlForm from "./components/form";
import Navbar from "./components/navbar/navbar";
import Title from "./components/title";

const App = () => {
  const [message, setMessage] = useState("");

  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "applicaion/json" },
    };
    const response = await fetch("http://localhost:8000/", requestOptions);
    const data = await response.json();

    setMessage(data.message);
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>{message}</h1>
    </div>
  );
};

export default App;
