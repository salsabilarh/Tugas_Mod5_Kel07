import React from "react";
import { FaBook, FaGooglePlay } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import Book from "./pages/Book";
import DetailPage from "./pages/DetailPage";
import Game from "./pages/Game";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 07</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/movie" replace />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/book" element={<Book />} />
        <Route path="/game" element={<Game />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/detail/:id" element={<DetailPage />} />
        <Route path="/book/detail/:id" element={<DetailPage />} />
        <Route path="/game/detail/:id" element={<DetailPage />} />
      </Routes>
      <footer>
        <Link to="/movie" className="iconWrapper">
          <HiHome className="icon" />
          Movie
        </Link>
        <Link to="/book" className="iconWrapper">
          <FaBook className="icon" />
          Book
        </Link>
        <Link to="/game" className="iconWrapper">
          <FaGooglePlay className="icon" />
          Game
        </Link>
        <Link to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </Link>
      </footer>
    </BrowserRouter>
  );
}

export default App;