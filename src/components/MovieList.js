import React, { useContext } from 'react';
import { MovieContext } from './context/MovieContext';
import Movie from './Movie';


const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div className="container">
            <div className="row dflex justify-content-around">
                {movies.map(movie => (
                    <Movie name={movie.name} price={movie.price} key={movie.id} />
                ))}

            </div>
        </div>

    );
}

export default MovieList;