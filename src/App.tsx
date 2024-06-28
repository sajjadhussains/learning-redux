import TodoFrom from "./components/Todo/TodoFrom";
import TodoList from "./components/Todo/TodoList";
import ToDoProvider from "./context/ToDoProvider";

function App() {
  return (
    <ToDoProvider>
      <div>
        <TodoFrom></TodoFrom>
        <TodoList></TodoList>
      </div>
    </ToDoProvider>
  );
}

export default App;
