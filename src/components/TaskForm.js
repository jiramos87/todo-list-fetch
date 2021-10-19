import React from 'react'

const TaskForm = (props) => {
    return (
      <form className="task-form" onSubmit={props.onSubmit}>
          <input className="task-input" placeholder="What needs to be done?" value={props.taskValue} onChange={props.taskChange}/>
      </form>
    )
  }

export default TaskForm