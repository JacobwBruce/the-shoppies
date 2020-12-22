import React, { FC, useState } from 'react';
import axios from 'axios';
import './Search.css';
import MovieInterface from '../interfaces/MovieInterface';
import MovieResults from './MovieResults';
import Loader from './Loader';

const Search: FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movieSearchResults, setMovieSearchResults] = useState<Array<MovieInterface>>([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const { data } = await axios.get(
            `https://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
        );

        setMovieSearchResults(data.Search);
        setLoading(false);
    };

    return (
        <>
            <div className='Search'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className='search'
                        placeholder='Search movies...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type='submit' className='btn-search fas fa-search'></button>
                </form>
            </div>
            {loading ? <Loader /> : <MovieResults movies={movieSearchResults} />}
        </>
    );
};

export default Search;
