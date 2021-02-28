import React from 'react'

function MovieContainer(data) {
    return (
        <div>
            <h1> { data ? data.data[1].id : "Veri yok"} </h1>
        </div>
    )
}

export default MovieContainer
