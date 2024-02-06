import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FilmDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [genres, setGenres] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c42022d4ec4fbb999f74a6ff8f367c18`
        );
        const data = await response.json();
        setMovieDetails(data);
        setGenres(data.genres);
        setProductionCountries(data.production_countries);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleBuyTicket = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirmReservation = () => {
    setShowConfirmationModal(true);
    setShowModal(false);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:gap-6 items-start max-w-6xl px-2 mx-auto py-4 text-white">
      <>
        <div className="grid md:grid-cols-4 gap-4 items-start">
          <div className="md:col-span-4">
            <img alt="Film Poster" className="aspect-[2/3] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800" height={900} src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} width={600} />
          </div>
        </div>
        <div className="grid md:gap-2 items-start bg-gray-700 p-6 rounded-lg">
          <div className="hidden md:flex items-start">
            <div className="grid gap-4">
              <h1 className="font-bold text-5xl leading-0">{movieDetails.title}</h1>
              <div className="text-gray-900 dark:text-gray-500">
                <label className="text-base font-bold text-white" htmlFor="Overview">
                  Overview
                </label>
                <p className="mt-2 mb-4 text-white">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
          <form className="grid gap-2 md:gap-8">
            <div className="grid">
              <label className="text-base font-bold" htmlFor="Production Countries">
                Production Countries
              </label>
              <ul>
                {productionCountries.map((country, index) => (
                  <li className="mt-2" key={index}>
                    {country.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid">
              <label className="text-base font-bold" htmlFor="popularity">
                Popularity
              </label>
              <p className="mt-2">{movieDetails.popularity || "N/A"}</p>
            </div>
            <div className="grid">
              <h3 className="font-bold mb-2">Genres:</h3>
              <div>
                {genres.map((genre) => (
                  <button key={genre.id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 mt-2 rounded" >
                    {genre.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid">
              <label className="text-base font-bold" htmlFor="release">
                Release Date
              </label>
              <p className="mt-2">{movieDetails.release_date || "N/A"}</p>
            </div>
            <div className="grid">
              <label className="text-base font-bold" htmlFor="language">
                Original Language
              </label>
              <p className="uppercase mb-2 mt-2">
                {movieDetails.original_language || "N/A"}
              </p>
            </div>
            <div className="grid">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-4 rounded" onClick={handleBuyTicket} >
                Comprar
              </button>
            </div>
          </form>
        </div>
      </>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Compra de Entrada</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nombre:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Nombre"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Asiento:
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Asiento" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                  Telefono:
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Telefono" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccion">
                  Direccion:
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Direccion" />
              </div>
              <div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full" type="button" onClick={handleConfirmReservation} >
                  Reservar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showConfirmationModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-bold m-4">Reserva Confirmada</h2>
            <p className="text-lg font-semibold m-4">Su reserva ha sido confirmada.</p>
            <div>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full" type="button" onClick={handleCloseConfirmationModal} >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmDetails;
