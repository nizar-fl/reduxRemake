import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo';
import FilterTodo from './components/FilterTodo';

function App() {
  return (
    <div className="App">
      <FilterTodo/>
        <TodoList/>
        <AddTodo/>
    </div>
  );
}

export default App;
