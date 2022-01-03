import React from 'react'

const Task = (props) => {
    console.log(props)
    return(
      <div className="task d-flex flex-row justify-content-between" key={props.label}> 
        {props.taskText}
        <div className="close-button-div"
             onMouseEnter={props.onMouseEnter}
             onMouseLeave={props.onMouseLeave}>
          <button type="button" className="btn btn-danger" onClick={() => props.deleteTask(props.label)}> X </button>
        </div>
      </div>
    )
}

export default Task