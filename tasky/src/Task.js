import React from 'react';

function Task(props){

    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>        <p>{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p>{props.desc}</p>
        <button onClick={props.markDone} className='doneButton'>Done</button>
        </div>
    )
}

export default Task;