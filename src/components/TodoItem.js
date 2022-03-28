import React from 'react'
const TodoItem = (props) => {
    const { todo } = props;
  return (
    <div>

<div className="card" style={{width: "18rem"}}>
<span className="badge bg-secondary">{todo.tag}</span>
  <div className="card-body">
    <h5 className="card-title">{todo.title}</h5>
    <p className="card-text">{todo.description}</p>
  </div>
</div>
      
    </div>
  )
}

export default TodoItem
