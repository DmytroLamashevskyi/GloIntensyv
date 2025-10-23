import { useEffect, useState } from "react";
import { ToDoItem } from "../models/ToDoItem";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const ToDoItemPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todo);
  const { id } = useParams();
  const nav = useNavigate();

  const [todo, setTodo] = useState<ToDoItem>();

  useEffect(() => {
    const todoSearch = todoList.find((item) => String(item.id) === id);
    if (todoSearch) {
      setTodo(todoSearch);
    } else {
      nav("/404");
    }
  }, [todoList, id, nav]);

  return (
    <div className="container">
      <h1>Name: {todo?.text}</h1>
    </div>
  );
};
