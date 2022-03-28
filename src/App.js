
import './App.css';
// import AddTodos from './components/AddTodos';
import Todos from './components/Todos';
import TodoState from './context/TodoState';
function App() {
  return (
   <>
   <TodoState>
   <Todos/>
   </TodoState>
   </>
  );
}

export default App;
