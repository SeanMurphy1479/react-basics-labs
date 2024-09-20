import logo from './logo.svg';
import './App.css';
import Task from './Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" desc="Empty Dishwasher"/>
      <Task title="Laundry" deadline="Tomorrow" desc="Fold Laundry and put it away"/>
      <Task title="Tidy" deadline="Today"/>

    </div>
  );
}

export default App;
