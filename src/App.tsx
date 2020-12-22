import React, { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import Search from './components/Search';
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
            <Search />
            <MovieCard
                id='1'
                Poster='https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
                Title='Star Wars: Episode IV - A New Hope'
                Year='1977'
            />
        </MyContext.Provider>
    );
}

export default App;
