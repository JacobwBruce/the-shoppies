import React, { FC } from 'react';
import MovieInterface from '../interfaces/MovieInterface';
import MovieCard from './MovieCard';
import './css/MovieResults.css';

interface Props {
    movies: MovieInterface[];
}

const MovieResults: FC<Props> = ({ movies }) => {
    return (
        <div className='MovieResults'>
            {movies &&
                movies.map((movie) => (
                    <MovieCard
                        key={movie.imdbID}
                        Title={movie.Title}
                        imdbID={movie.imdbID}
                        Poster={movie.Poster}
                        Year={movie.Year}
                    />
                ))}
        </div>
    );
};

export default MovieResults;
