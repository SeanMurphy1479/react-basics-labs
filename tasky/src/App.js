import logo from './logo.svg';
import './App.css';
import Task from './Task';
import AddTaskForm from './components/Form';
import React, {useState} from 'react';

function App() {

  const[ taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title:"Dishes", desc:"Empty Dishwasher", deadline:"Today", done: false},
      { id: 2, title:"Laundry", desc:"Fold clothes and put away", deadline:"Tommorow", done: false},
      { id: 3, title:"Tidy up", deadline:"Today", done: false}
    ]
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done
    setTaskState({tasks});
    console.log('${taskIndex} ${tasks[taskIndex].done}');
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) =>(
        <Task
          title={task.title}
          desc={task.desc}
          deadline={task.deadline}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}
          deleteTask = {() => deleteHandler(index)}
            />   
      ))}
      <AddTaskForm />
  </div>
  )
}

export default App;
