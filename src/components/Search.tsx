import React, { FC, useState } from 'react';
import axios from 'axios';
import './Search.css';
import MovieInterface from '../interfaces/MovieInterface';

const Search: FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movieSearchResults, setMovieSearchResults] = useState<Array<MovieInterface>>([]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { data } = await axios.get(
            `http://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
        );

        setMovieSearchResults(data.Search);
    };

    return (
        <div className='search-container'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='search'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className='btn-search fas fa-search'></button>
            </form>
        </div>
    );
};

export default Search;
