import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=7468ab06`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovieDetails();
  },[id]);

  return (
    movie ? (
      <div className="container mt-5 text-center">
        <h1>{movie.Title}</h1>
        <p>{movie.Plot}</p>
        <img src={movie.Poster} alt={movie.Title} />
        <p><strong>Released:</strong> {movie.Released}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
      </div>
    ) : (
      <p className="container mt-5 text-center">Loading...</p>
    )
  )
}

export default MovieDetails
