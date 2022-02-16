import React from 'react'
import {useRef } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

 export default function ModalMovie(props){

const commentRef = useRef();

function handleComment(movCom) {
    movCom.preventDefault();
    const comment = commentRef.current.value;
    const newMovie = { ...props.chosenMovie, comment };
    props.commentUpdate(props.chosenMovie.id, newMovie);
}

async function favouriteList(details, film) {
    details.preventDefault();
    // title, release_date, poster_path, overview 
    const sentData = {
        title: film.title,
        release_date: film.release_date,
        poster_path: film.poster_path,
        overview: film.overview

    }



    const url = `${process.env.REACT_APP_SERVER}/addMovie`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sentData)
    })
    const data = await response.json();
    console.log(response.status);
    console.log(data);


}



  return (
   <>
   <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.chosenMovie.overview}</Modal.Body>
                <Modal.Footer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment: {props.chosenMovie.comment ? props.chosenMovie.comment : "Add comment" }</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleComment} >
                            Submit
                        </Button>
                    </Form>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                                 <Button style={{ backgroundColor: "green" }} variant="primary" onClick= {(details) => { favouriteList(details, props.chosenMovie) }}
>Add to Fav.</Button>
                </Modal.Footer>
            </Modal>

   </>
  );
}
