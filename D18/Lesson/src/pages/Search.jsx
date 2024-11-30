import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const handleSearch = async (e) =>{
    e.preventDefault();
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=7468ab06`);
    const data = await response.json();
    setMovies(data.Search || []);

  }
  return (
    <div className="container mt-5">
    <form onSubmit={handleSearch} className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-2">Search</button>
    </form>
    <div className="row">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="col-md-4 mb-3">
          <div className="card">
            <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <Link to={`/movie/${movie.imdbID}`} className="btn btn-secondary">View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Search
