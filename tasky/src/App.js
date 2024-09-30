import logo from './logo.svg';
import './App.css';
import Task from './Task';
import React, {useState} from 'react';

function App() {

  const[ taskState, serTaskState] = useState({
    tasks: [
      { id: 1, title:"Dishes", desc:"Empty Dishwasher",deadline:"Today"},
      { id: 2, title:"Laundry", desc:"Fold clothes and put away", deadline:"Tommorow"},
      { id: 3, title:"Tidy up", deadline:"Today"}
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
          key={task.id}
            />   
      ))}
  </div>
  )
}

export default App;
