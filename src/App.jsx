import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems1";
import TodoItems2 from "./components/TodoItems2";
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="item-container">
          <TodoItems />
          <TodoItems2 />
        </div>
      </center>
    </>
  );
}
export default App;
