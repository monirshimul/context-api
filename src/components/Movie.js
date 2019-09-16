import React from 'react'

const Movie = ({ name, price }) => {
    return (
        <div className="">
            <div className="card" style={{ maxWidth: "10rem" }}>

                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>

    )
}

export default Movie
