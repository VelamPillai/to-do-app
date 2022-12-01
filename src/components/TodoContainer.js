import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import TodoItem from "./TodoItem";

export default function TodoContainer() {
    const { state:{tasks}, dispatch } = useContext(MyContext);

  const doneTasks =  tasks.filter(item => item.status) 
    const pendingTasks= tasks.filter(item=>!item.status)
    
  console.log('pending tasks:', pendingTasks);
  console.log('done tasks:',doneTasks);
  return (
    <div className="list">
      <form onSubmit={(e) => {
        e.preventDefault();
        //if input has given
        e.target.task.value &&
        dispatch({ type: 'addItem', payLoad: e.target.task.value }); e.target.reset();
      }}>
            <input type="text" name="task" /><button>add task</button>
       </form>
       <div>
      <h1>TODO List</h1>
      <ul className="pending">
        {pendingTasks.map(task => {
         
          return (<li key={task.id}><TodoItem task={task} /></li> )
        })} 

       {/*  <TodoItem task = "task 1"/>  */}    {/*  {TodoItem({task: "task 1"})} */}
        {/* <TodoItem task = "task 2"/> */} {/*  {TodoItem("task 2")} */}
        {/* <TodoItem task = "task 3"/>  */}{/* {TodoItem("task 3")} */}
      </ul>

      <h1>DONE Tasks</h1>
        <ul className="done">
      {doneTasks.map(task => {
         
         return (<li key={task.id}><TodoItem task={task} /></li> )
       })} 
     
     
      {/*  <TodoItem task = "breakfast"/> */}   {/* {TodoItem("breakfast")} */}
        {/*  <TodoItem task = "coding" />  */}    {/* {TodoItem("live coding")} */}
        </ul>
        </div>
    </div>
  );
}
