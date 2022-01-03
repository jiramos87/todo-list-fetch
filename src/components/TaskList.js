import React from "react";
import Task from './Task';

const TaskList = (props) => {
  
  return (
    <div className="taskList"> 
      
          {props.tasks.map( task  =>
             <Task label={task.label} taskText={task.label} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} deleteTask={props.deleteTask} style={props.style}/> 
          )}   
             
    </div>
  )
};

export default TaskList;