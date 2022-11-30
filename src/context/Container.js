import React, { useState } from "react";

import { MyContext } from "./MyContext";
import { v4 as uuid } from "uuid";

export default function Container({ children }) {
  const [tasks, setTasks] = useState([
    { id: uuid(), text: "Live Coding", status: false }, { id: uuid(), text: "buy Milk", status: false }, { id: uuid(), text: "cook", status: true }, { id: uuid(), text: "Eltern Abend", status: false },
  ])

  const updateTask = (tasks) => {
    const updateTasks = tasks.map(item => {
      if (item.id === tasks.id) {
        item.status = !item.status
        return item
      }
      else {
        return item
      }
    })
    setTasks(updateTasks);
  }


  const deleteTask = (task) => {
    const updateTasks = tasks.filter(item => item.id !== task.id)
    setTasks(updateTasks);
 }

  
  const addTodoTask= (e) => {
    e.preventDefault();
    const createTask = {
      id: uuid(),
      text: e.target.task.value,
      status:false
    }
    setTasks([...tasks, createTask]);
    e.target.reset();
  }
  return (
    <MyContext.Provider value={{ tasks, updateTask, deleteTask, addTodoTask }}>
      {children}
    </MyContext.Provider>
  );
}
