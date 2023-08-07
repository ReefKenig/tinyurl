// Imports
import React, { useEffect, useState } from "react";
import "./App.css";
// Components
import Navbar from "./components/navbar/navbar";

const App = () => {
  const [message, setMessage] = useState<string>("");

  const getWelcomeMessage = async () => {
    try {

      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "applicaion/json" },
      };
      // TODO: Axios instead of fetch
      const response = await fetch("http://localhost:8000/", requestOptions);
      const data = await response.json();
      
      setMessage(data.message);
    } catch (error) {
      console.log(error);
    }
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
