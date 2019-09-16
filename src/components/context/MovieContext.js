import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'John Wick',
            price: '1450tk',
            id: 1234
        },
        {
            name: 'Escape Plan',
            price: '1550tk',
            id: 2341
        },
        {
            name: 'Ramvo Last',
            price: '1650tk',
            id: 3421
        }
    ]);

    return (
        <MovieContext.Provider
            value={[movies, setMovies]}
        >
            {props.children}
        </MovieContext.Provider>

    );
}

