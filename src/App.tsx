import React, { useState } from 'react';
import './App.css';
import MovieInterface from './interfaces/MovieInterface';

//@ts-ignore
export const MyContext = React.createContext();

function App() {
    const [movies, setMovies] = useState<Array<MovieInterface>>([]);

    const addMovie = (movie: MovieInterface) => {
        const newMovies = [...movies];

        newMovies.push(movie);

        setMovies(newMovies);
    };

    const removeMovie = (id: string) => {
        let newMovies = [...movies];

        newMovies = newMovies.filter((movie) => movie.imdbID !== id);

        setMovies(newMovies);
    };

    return (
        <MyContext.Provider value={{ movies, addMovie, removeMovie }}>
            <div className='App'>
                <h1>The Shoppies</h1>
            </div>
        </MyContext.Provider>
    );
}

export default App;
