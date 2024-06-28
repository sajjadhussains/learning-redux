import React, { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/ToDoProvider";

const TodoFrom = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
  };
  return (
    <div>
      <h1>Add Todo</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="Todo">Task</label>
        <input
          onBlur={(e) => setTask(e.target.value)}
          type="text"
          name="task"
          id="task"
          placeholder="give task"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoFrom;
