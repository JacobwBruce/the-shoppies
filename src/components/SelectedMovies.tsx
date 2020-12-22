import React, { FC, useContext } from 'react';
import { MyContext } from '../App';
import MovieInterface from '../interfaces/MovieInterface';
import './SelectedMovies.css';

const SelectedMovies: FC = () => {
    //@ts-ignore
    const { movies, removeMovie } = useContext(MyContext);

    return (
        <nav className='SelectedMovies'>
            {movies.map((movie: MovieInterface) => (
                <div className='SelectedMovies-movie' key={`Poster-${movie.imdbID}`}>
                    <i
                        className='fas fa-times-circle'
                        onClick={() => removeMovie(movie.imdbID)}
                    ></i>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            ))}
        </nav>
    );
};

export default SelectedMovies;
