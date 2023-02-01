import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Project />} path="/projects" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
