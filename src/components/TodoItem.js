import React,{useContext} from 'react'

import { MyContext } from '../context/MyContext'

export default function TodoItem({task}) {
  
  const { state: { tasks }, dispatch } = useContext(MyContext);
  
  return (
    
    <p key={task.id}> {task.text}
      {task.status === false &&  <button onClick={() => dispatch({ type: "updateItem", payLoad: task.id })}>done</button>}
        
          <button onClick={() => dispatch({ type: "deleteItem", payLoad: task.id })}>Delete</button> 
      </p>
      
  )
}
