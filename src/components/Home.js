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
            // console.log(data);
            setMovie(data);
        } catch (error) {
            // console.log("error", error);
        }
    };

    useEffect(() => {
        getMovie();
    }, []);


    function commentUpdate(id, commentFromModalMovie) {

        let movieUpdate = Movie.map(iteam => {
            if (iteam.id === id) {
                iteam.comment = commentFromModalMovie.comment;
             
                return iteam;
            } else {
                return iteam;
            }
        });

        setMovie(movieUpdate);
    }
 // End Fun Update Comment


    return (
        <>
            <h1>Home Page</h1>
                {
                    Movie && (<MovieList movie1={Movie} commentUpdate={commentUpdate}/>)
                }
         

        </>
    )
}

export default Home;