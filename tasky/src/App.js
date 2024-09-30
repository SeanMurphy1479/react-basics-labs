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
      <Task title={taskState.tasks[0].title} deadline={taskState.tasks[0].deadline} desc={taskState.tasks[0].desc}/>
      <Task title={taskState.tasks[1].title} deadline={taskState.tasks[1].deadline} desc={taskState.tasks[1].desc}/>
      <Task title={taskState.tasks[2].title} deadline={taskState.tasks[2].deadline} desc={taskState.tasks[2].desc}/>

    </div>
  );
}

export default App;
