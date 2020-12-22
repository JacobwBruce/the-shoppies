import React, { FC, useContext } from 'react';
import { MyContext } from '../App';
import MovieInterface from '../interfaces/MovieInterface';
import './MovieCard.css';

interface Props {
    Title: string;
    Poster: string;
    Year: String;
    imdbID: string;
}

const MovieCard: FC<Props> = ({ Title, Poster, Year, imdbID }) => {
    //@ts-ignore
    const { addMovie, movies } = useContext(MyContext);

    const movieNominated =
        movies.filter((movie: MovieInterface) => movie.imdbID === imdbID).length > 0;

    return (
        <div className='MovieCard'>
            <div>
                <img src={Poster} alt={Title} className='MovieCard-image' />
                <h3 className='MovieCard-title'>
                    {Year} | {Title}
                </h3>
            </div>
            <button
                className='MovieCard-button'
                onClick={() => addMovie({ Title, Poster, Year, imdbID })}
                disabled={movieNominated}
            >
                {movieNominated ? 'Nominated' : 'Nominate'}
            </button>
        </div>
    );
};

export default MovieCard;
