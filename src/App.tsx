import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Search from './components/Search';
import SelectedMovies from './components/SelectedMovies';
import MovieInterface from './interfaces/MovieInterface';

//@ts-ignore
export const MyContext = React.createContext();

function App() {
    const [movies, setMovies] = useState<Array<MovieInterface>>(
        //@ts-ignore
        JSON.parse(localStorage.getItem('movies')) || []
    );

    const [showBanner, setShowBanner] = useState(movies.length === 5);

    const addMovie = (movie: MovieInterface) => {
        if (movies.length === 5) {
            alert('Cannot add movie');
        } else {
            const newMovies = [...movies];

            newMovies.push(movie);

            setMovies(newMovies);
            localStorage.setItem('movies', JSON.stringify(newMovies));

            if (newMovies.length === 5) {
                setShowBanner(true);
            }
        }
    };

    const removeMovie = (id: string) => {
        let newMovies = [...movies];

        newMovies = newMovies.filter((movie) => movie.imdbID !== id);

        setMovies(newMovies);
        localStorage.setItem('movies', JSON.stringify(newMovies));
        setShowBanner(false);
    };

    const closeBanner = () => {
        setShowBanner(false);
    };

    return (
        <MyContext.Provider value={{ movies, addMovie, removeMovie, closeBanner }}>
            {movies.length !== 0 && <SelectedMovies />}
            {showBanner && <Banner />}
            <div className={movies.length > 0 ? 'content' : ''}>
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
            </div>
        </MyContext.Provider>
    );
}

export default App;
