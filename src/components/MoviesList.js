import React from "react";
import { Link } from "react-router-dom";

function MoviesList({movies}){
    const renderMovie = Object.keys(movies).map((movieID) =>(
        <li key={movieID}>
            <Link to={`/movie/${movieID}`}>{movies[movieID].title}
            </Link>
        </li>
    ))

    return <ul>{renderMovie}</ul>
}

export default MoviesList