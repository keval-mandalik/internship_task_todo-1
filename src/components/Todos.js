import React, {useContext,useEffect,useState} from 'react'
import AddTodos from './AddTodos';
import todoContext from '../context/TodoContext';
import TodoItem from './TodoItem';
const Todos = (props) => {
    const context = useContext(todoContext);
    const [todo,setTodo] = useState();
    const { todos,getTodos} = context;

    useEffect(()=>{
        getTodos();
    },[])

  return (
    <div>
      <AddTodos></AddTodos>
      
      <h1>Your Todos</h1>
      {todos.map((todo)=>{
          return <TodoItem todo = {todo} key={todo._id}/>
        })}
    </div>
  )
}

export default Todos
