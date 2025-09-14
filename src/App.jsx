import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ComicsPage from "./components/ComicsPage";
import NewsPage from "./components/NewsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import MoviesPage from "./components/Movies";
import Series from "./components/Series";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </Router>
  );
}

export default App;
