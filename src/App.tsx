import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import MovieInterface from './interfaces/MovieInterface';

//@ts-ignore
export const MyContext = React.createContext();

function App() {
    const [movies, setMovies] = useState<Array<MovieInterface>>(
        //@ts-ignore
        JSON.parse(localStorage.getItem('movies')) || []
    );

    const addMovie = (movie: MovieInterface) => {
        if (movies.length === 5) {
            alert('Cannot add movie');
        } else {
            const newMovies = [...movies];

            newMovies.push(movie);

            setMovies(newMovies);
            localStorage.setItem('movies', JSON.stringify(newMovies));
        }
    };

    const removeMovie = (id: string) => {
        let newMovies = [...movies];

        newMovies = newMovies.filter((movie) => movie.imdbID !== id);

        setMovies(newMovies);
        localStorage.setItem('movies', JSON.stringify(newMovies));
    };

    return (
        <MyContext.Provider value={{ movies, addMovie, removeMovie }}>
            <div className='heading'>
                <h1 className='App-title'>The Shoppies</h1>
                <p>
                    Code on github 👉
                    <a
                        href='https://github.com/JacobwBruce/the-shoppies'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <i className='fab fa-github'></i>
                    </a>
                </p>
            </div>
            <Search />
        </MyContext.Provider>
    );
}

export default App;
