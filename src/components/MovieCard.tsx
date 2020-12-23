import React, { FC, useContext } from 'react';
import { MyContext } from '../App';
import MovieInterface from '../interfaces/MovieInterface';
import './css/MovieCard.css';

interface Props {
    Title: string;
    Poster: string;
    Year: String;
    imdbID: string;
}

const MovieCard: FC<Props> = ({ Title, Poster, Year, imdbID }) => {
    //@ts-ignore
    const { addMovie, removeMovie, movies } = useContext(MyContext);

    const movieNominated =
        movies.filter((movie: MovieInterface) => movie.imdbID === imdbID).length > 0;

    const handleClick = () => {
        if (!movieNominated) {
            addMovie({ Title, Poster, Year, imdbID });
        } else {
            removeMovie(imdbID);
        }
    };

    return (
        <div className='MovieCard'>
            <div>
                <img src={Poster} alt={Title} className='MovieCard-image' />
                <h3 className='MovieCard-title'>
                    ({Year}) {Title}
                </h3>
            </div>
            <button
                className={movieNominated ? 'MovieCard-button disabled' : 'MovieCard-button'}
                onClick={handleClick}
            >
                {movieNominated ? 'Nominated' : 'Nominate'}
            </button>
        </div>
    );
};

export default MovieCard;
