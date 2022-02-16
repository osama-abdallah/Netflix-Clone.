import { useState } from 'react'
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ModalMovie from './ModalMovie';

export default function Movie(props) {


    const [show, setShow] = useState(false);
    const [chosenMovie, setchosenMovie] = useState();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    function handleShowModle(movie) {
        handleShow();
        setchosenMovie(movie);

    }

    
    let moviedata = props.obj;
    return (
        <>
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${moviedata.poster_path}`}/>
                <Card.Body>
                    <Card.Title>{moviedata.title}</Card.Title>
                    <Card.Text>
                        {moviedata.overview}
                    </Card.Text>
                    <Card.Text>
                        comment:{moviedata.comment ? moviedata.comment : "add your comment"}
                    </Card.Text>
                    <Button style={{ margin: "2px", }} variant="primary" onClick={()=>handleShowModle(moviedata)} >Modal Movie</Button>
                    {/* <Button style={{ backgroundColor: "green" }} variant="primary">Add to Fav.</Button> */}
                </Card.Body>
            </Card>
            {
                chosenMovie && (< ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} commentUpdate={props.commentUpdate} />)
                }
        </>
    );
    
}
