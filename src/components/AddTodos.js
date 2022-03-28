import React,{useContext,useState} from 'react'
import TodoContext from '../context/TodoContext'
const AddTodos = () => {
    const context = useContext(TodoContext);
    const {addTodos} = context;
    const [todo,setTodo] = useState({title:"",description:"",tag:""});
    const handleClick = (e)=>{
      e.preventDefault();
      addTodos(todo.title,todo.description,todo.tag);
      setTodo({title:"",description:"",tag:""});

    }
  const onChange = (e)=>{
    setTodo({...todo,[e.target.name]:e.target.value});
  }
  return (
    <div>
       <div className="container">
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' value={todo.title} onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name='description' value={todo.description} onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' value={todo.tag} onChange={onChange} />
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add</button>
</form>
    </div>
    </div>
  )
}

export default AddTodos
