import React from 'react'

const TaskLeft = (props) => {
    return(
      <div className="task-left"> 
        {props.tasks.length > 0 ? `${props.tasks.length} items left` : 'No items left' }
      </div>
    )
}

export default TaskLeft