import React, { FC } from 'react';
import MovieInterface from '../interfaces/MovieInterface';
import './MovieResults.css';

interface Props {
    movies: MovieInterface[];
}

const MovieResults: FC<Props> = ({ movies }) => {
    return (
        <div>
            {movies &&
                movies.map((movie) => (
                    <div key={movie.imdbID}>
                        <img src={movie.Poster} alt={movie.Title} />
                        <h4>{movie.Title}</h4>
                    </div>
                ))}
        </div>
    );
};

export default MovieResults;
