import logo from './logo.svg';
import './App.css';
import store from './mobX/mobX';
import {observer} from 'mobx-react-lite'
import { TodoList } from './todolist';
import { AddTodo } from "./addTodo"
import { Completed } from './header';
const App=()=> {
  return (
    <div className="App">
      <Completed></Completed>
      <TodoList></TodoList>
      <AddTodo></AddTodo>
    </div>
  );
}

export default App;
