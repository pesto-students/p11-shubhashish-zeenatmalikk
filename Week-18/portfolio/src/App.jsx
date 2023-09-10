import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Blogs from "./pages/Blogs/Blogs";
import BlogDescripion from "./pages/Blogs/BlogDescripion";

function App() {
  return (
    <Router>
      {/* <Container> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blog/:id" element={<BlogDescripion/>} />
        </Routes>
      {/* </Container> */}
    </Router>
  );
}

export default App;
