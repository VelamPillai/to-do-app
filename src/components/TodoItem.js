import React from 'react'

export default function TodoItem(props) {
  return (
    <li>{props.task.text}
      {!props.task.status &&  <button onClick={() => props.updateTask(props.task)}>done</button>}
     
      <button onClick={()=>props.deleteTask(props.task)}>Delete</button> 
          
      </li>
  )
}







