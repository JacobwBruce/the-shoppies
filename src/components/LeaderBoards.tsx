import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projectFirestore } from '../firebase/firebase';
import MovieInterface from '../interfaces/MovieInterface';
import './css/MovieCard.css';
import './css/LeaderBoards.css';

const LeaderBoards: FC = () => {
    const [topMovies, setTopMovies] = useState<any>([]);

    const getMovies = async () => {
        const movieRef = projectFirestore.collection('movies');
        const movies = await movieRef.orderBy('votes', 'desc').limit(5).get();

        const movieData: any = [];
        movies.forEach((movie) => {
            movieData.push(movie.data());
        });

        setTopMovies(movieData);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <h1>LeaderBoards</h1>
            <Link to='/'>Go Back</Link>
            <div className='Leaderboards-container'>
                {topMovies.map((movie: MovieInterface) => (
                    <div className='MovieCard' key={movie.imdbID}>
                        <div>
                            <img src={movie.Poster} alt={movie.Title} className='MovieCard-image' />
                            <h3 className='MovieCard-title'>
                                {movie.Year} | {movie.Title}
                            </h3>
                        </div>
                        <h1>{movie.votes} Votes</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeaderBoards;
