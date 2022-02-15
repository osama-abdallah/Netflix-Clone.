import React from 'react'
import Movie from './Movie';



export default function MovieList(props) {
    console.log(props);
    return (
        <>
        <h2> MovieList:</h2>
            {

                props.movie1.map(obj => {
                    return (
                        <>
                            <Movie key={obj.id} obj={obj} />
                        </>

                    );
                })

            }
        </>
    );
}
