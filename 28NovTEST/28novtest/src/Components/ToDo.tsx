import { useState, useEffect } from "react";
import axios from "axios";

const ToDo = () => {
  const [todoList, setTodoList] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const todos = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodoList(todos.data);
    })();
  }, []);

  return (
    <>
      {todoList.length !== 0
        ? todoList.map((todo: any, index: any) => (
            <li key={index} data-testid="todo">
              {todo.title}
            </li>
          ))
        : null}
    </>
  );
};
export default ToDo;
