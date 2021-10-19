import React, {useState, useEffect} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskLeft from './components/TaskLeft';
import tasklist from './components/services/tasklist';

const App = () => {



  const [ tasks, setTasks ] = useState([
    { label: "Make the bed", done: false },
    { label: "Walk the dog", done: false },
    { label: "Do the replits", done: false }
  ])
  const [ newTask, setNewTask ] = useState([])
  const [ style, setStyle ] = useState({display: 'none'});

  console.log('tasks: ', tasks)

  useEffect( () => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/jiramos87', {
      method: "PUT",
      body: JSON.stringify(tasks),
      headers: {
        "Content-Type": "application/json"
      }})
    .then(response => response.json())
    .then(data => console.log(data));
    }, [tasks])
  
  
 
  function addTask(event) {
    event.preventDefault();
    const taskObj = {
      label: newTask,
      done: false
    };
    setTasks(tasks.concat(taskObj));
    console.log('tasks: ', tasks);
    fetch('https://assets.breatheco.de/apis/fake/todos/user/jiramos87', {
      method: "PUT",
      body: JSON.stringify(tasks),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((data) => {
      console.log('data: ', data.content.label);
      return data.json();
    }).then((res) => {
      console.log('ok? ', res.ok); // will be true if the response is successfull
      console.log('status: ', res.status); // the status code = 200 or code = 400 etc.
      console.log('text: ', res.text());
      setTasks(res.results);
    }).catch(error => {
      console.log(error);
    });
    setNewTask('');
  }

  const deleteTask = (label) => {

    setTasks(tasks.filter(task => task.label !== label))
  }
  
  const handleTaskChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleHoverOn = e => {
    setStyle({display: 'block'});
  }
  const handleHoverOff = e => {
    setStyle({display: 'none'})
  }

  return (
    <div className="App">
      <div className="container">
        <h1>TODOS</h1>
        <div className="main-card">
          <TaskForm onSubmit={addTask} 
                  taskValue={newTask} taskChange={handleTaskChange}/>  
          <TaskList tasks={tasks} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} deleteTask={deleteTask} style={style}/> 
          <TaskLeft tasks={tasks}/> 
        </div>
      </div>
    </div>
  )
}

export default App;
