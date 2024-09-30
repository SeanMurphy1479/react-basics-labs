import logo from './logo.svg';
import './App.css';
import Task from './Task';
import React, {useState} from 'react';

function App() {

  const[ taskState, serTaskState] = useState({
    tasks: [
      { title:"Dishes", desc:"Empty Dishwasher",deadline:"Today"},
      { title:"Laundry", desc:"Fold clothes and put away", deadline:"Tommorow"},
      { title:"Tidy up", deadline:"Today"}
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) =>(
        <Task
          title={task.title}
          desc={task.desc}
          deadline={task.deadline}
            />   
      ))}
  </div>
  )
}

export default App;
