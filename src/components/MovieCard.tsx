import React, { FC } from 'react';
import './MovieCard.css';

interface Props {
    Title: string;
    Poster: string;
    Year: String;
    id: string;
}

const MovieCard: FC<Props> = ({ Title, Poster, Year, id }) => {
    return (
        <div className='MovieCard'>
            <img src={Poster} alt={Title} className='MovieCard-image' />
            <h3 className='MovieCard-title'>
                {Year} | {Title}
            </h3>
            <button className='MovieCard-button'>Nominate</button>
        </div>
    );
};

export default MovieCard;
