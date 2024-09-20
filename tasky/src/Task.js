import React from 'react';

function Task(props){

    return (
        <div className='card'>
        <p>{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p>{props.desc}</p>
        </div>
    )
}

export default Task;