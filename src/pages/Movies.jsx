import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Script from "../Services/Script";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [highlightedMovie, setHighlightedMovie] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=c42022d4ec4fbb999f74a6ff8f367c18"
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleMouseEnter = (index) => {
    setHighlightedMovie(index);
  };

  const handleMouseLeave = () => {
    setHighlightedMovie(null);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      // Si la búsqueda está vacía, mostrar todas las películas
      setFilteredMovies(movies);
    } else {
      // Filtrar las películas que coincidan con el término de búsqueda
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <div>
      <Script onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-4">
        {filteredMovies.map((movie, index) => (
          <Link key={movie.id} to={`/film/${movie.id}`}>
            <div
              key={movie.id} className={`relative overflow-hidden rounded-lg ${ highlightedMovie === index ? "shadow-lg" : "" }`} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} >
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="w-full h-auto" />
              {highlightedMovie === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 opacity-0 hover:opacity-100">
                  <div className="text-white text-center p-4">
                    <h3 className="text-lg font-bold">{movie.title}</h3>
                    <p className="text-sm">{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
