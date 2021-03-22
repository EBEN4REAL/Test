import React from 'react'

const Post =  (props) => {
    return (
        <div onClick={props.clickHandler}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    )
}

export default  Post