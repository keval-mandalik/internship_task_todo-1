import TodoContext from "./TodoContext";
 import { useState } from "react";

 const TodoState = (props)=>{
     const host = 'http://localhost:5000';

     const todoInitial = [];
 
     const [todos,setTodos] = useState(todoInitial);

     const getTodos = async ()=>{
        const response = await fetch(`${host}/api/todo/fetchalltodos`,{
            method:'GET',
            header:{
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        setTodos(json);
     }

     const addTodos = async(title,description,tag)=>{
         const response = await fetch(`${host}/api/todo/addTodos`,{
             method:"POST",
             headers:{
                 'Content-Type':"application/json"
                },
                
                body: JSON.stringify({title,description,tag})
            });
            
            const todo = await response.json();
            console.log(todo);
        setTodos(todos.concat(todo));
     }


     return (
         <TodoContext.Provider value={{todos,addTodos,getTodos}}>
             {props.children}
         </TodoContext.Provider>
     )
 }

 export default TodoState;