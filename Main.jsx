import React, { useState } from "react";
import './App.css';


const Getapp = () => {
    const [joke, setjoke] = useState("");

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
       
            .then((res) => res.json())
            .then((data) => setjoke(data.joke));
    };


    return (
        <>
            <div className="joke">
                <button onClick={fetchApi}>Click to generate a joke.</button>
                <p>{joke}</p>
            </div>

        </>
    )
}
export default Getapp;