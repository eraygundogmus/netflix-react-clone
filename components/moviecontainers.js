import React from 'react'

function MovieContainer(data) {
    return (
        <div>
         { data ? data.data.map( e => (<h1 key={e.id}>{e.id}</h1>)) : "Veri yok"}
        </div>
    )
}

export default MovieContainer
