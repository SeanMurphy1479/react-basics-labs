import React from 'react';

function Task(props){


    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>       
        <p>{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p>{props.desc}</p>
        <p className='priority' style={{backgroundColor: props.priority == "Low" ? 'green' : 'black' && props.priority == "Medium" ? 'orange' : 'black' && props.priority == "High" ? 'red' : 'black'  }}>{props.priority}</p>     
        <button onClick={props.markDone} className='doneButton'>Done</button>
        <button className='deleteButton' onClick={props.deleteTask}>Delete</button>       
        </div>
    )
}

export default Task;