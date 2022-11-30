import React, { useReducer} from "react";

import { MyContext } from "./MyContext";
import { v4 as uuid } from "uuid";


const initialState = {
    tasks: [],
    records: [],
    user:null
}

const reducer = (state,action) => {
    //universal function
    //multi task

   

    switch (action.type) {
        case 'addItem': {
           
            return {...state ,tasks:[...state.tasks,{id:uuid() ,text:action.payLoad,status:false}]}
        }
        case 'updateItem': {
             /* return {
                ...state, tasks: state.tasks.map(item => {
                    if (item.id === action.payload) {
                        item.status = !item.status;
                        return item;
                    }
                    else {
                        return item
                    }
            })}  */
            
            return { ...state, tasks: state.tasks.map(item => item.id === action.payLoad ? { ...item, status: !item.status } :item)}
        }
        case 'deleteItem':
            {
                return {...state , tasks : state.tasks.filter(item=>item.id!==action.payLoad)}
            }
        default: {
            return state
            }
    }
    
}

export default function Container({ children }) {

  const [state,dispatch]=useReducer(reducer ,initialState)



  
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}
