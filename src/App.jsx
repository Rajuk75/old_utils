import { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  }

  const handleAddTask = () => {
    if (task.trim()) {
      setTasksList([...tasksList, task]);
      setTask("");
    }
  }

  const handleDeleteTask = (indexToDelete) => {
    setTasksList(tasksList.filter((taskItem, index) => index !== indexToDelete));
  }

  return (
    <div className="App">
      <h1>Hello mate Pls add your Task!</h1>
      
      <input 
        type="text" 
        placeholder='Add your Task'
        value={task}
        onChange={handleInputChange}
        // onKeyPress={(e) => e.key === 'Enter' && handleAddTask()} // Optional: add task on Enter
      />
      <button onClick={handleAddTask}>Add</button>
      
      <ul>
        {tasksList.map((t, index) => (
          <li key={index}>
            {t}

            <button 
              onClick={() => handleDeleteTask(index)}
              >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;