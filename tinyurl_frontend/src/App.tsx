// Imports
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
// Components
import Navbar from "./components/navbar/navbar";
// Pages
import Home from "./pages/home";
import TinyurlForm from "./pages/createTinyurl";
import Management from "./pages/management";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/manage" Component={Management} />
          <Route path="/create" Component={TinyurlForm} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
