import React, { useEffect, useState } from "react";
// import { Row, Container } from "react-bootstrap";
import MovieList from "./MovieList";
// axios.get().then().catch()

function Home() {
    const [Movie, setMovie] = useState();
    const getMovie = async () => {
        
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
            const data = await response.json();
            console.log(data);
            setMovie(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <>
            <h1>Home Page</h1>
                {
                    Movie && (<MovieList movie1={Movie} />)
                }
         

        </>
    )
}

export default Home;