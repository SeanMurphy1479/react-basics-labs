import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';
import AddTaskForm from './components/Form';
import './App.css';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: uuidv4(), title: "Dishes", desc: "Empty Dishwasher", deadline: "Today", done: false, priority: "High" },
      { id: uuidv4(), title: "Laundry", desc: "Fold clothes and put away", deadline: "Tomorrow", done: false, priority: "Medium" },
      { id: uuidv4(), title: "Tidy up", desc: "", deadline: "Today", done: false, priority: "Low" }
    ]
  });

  const [formState, setFormState] = useState({
    title: "",
    desc: "",
    deadline: "",
    priority: "Low" // Default value for priority
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({ tasks });
  };

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({ tasks });
  };

  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const tasks = [...taskState.tasks, { ...formState, id: uuidv4(), done: false }];
    setTaskState({ tasks });
    setFormState({ title: "", desc: "", deadline: "", priority: "Low" }); // Reset form
  };

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task
          key={task.id}
          title={task.title}
          desc={task.desc}
          deadline={task.deadline}
          priority={task.priority}
          done={task.done}
          markDone={() => doneHandler(index)}
          deleteTask={() => deleteHandler(index)}
        />
      ))}
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
    </div>
  );
}

export default App;
