import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={({ isActive }) => isActive ? 'active' : ''}>Movies</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;