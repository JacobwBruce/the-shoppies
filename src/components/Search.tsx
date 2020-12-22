import React, { FC, useState } from 'react';
import './Search.css';

const Search: FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(searchQuery);
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
