import React, { useState, useContext } from 'react';
import { MovieContext } from './context/MovieContext';


const AddMovie = () => {

    const [name, setName] = useState('');
    const [price, setprice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);


    const updateName = (e) => {
        setName(e.target.value)
    }
    const updatePrice = (e) => {
        setprice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(oldMovies =>
            [...oldMovies, { name: name, price: price }]
        )

    }

    return (
        <div className="container">
            <form onSubmit={addMovie}>
                <input type="text" name="name" value={name} onChange={updateName} placeholder="Movie Name..." />
                <input type="text" name="price" value={price} onChange={updatePrice} placeholder="Price..." />
                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
        </div>

    );
}




export default AddMovie;