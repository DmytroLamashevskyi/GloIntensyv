import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDoItem } from "../models/ToDoItem";

export const ToDoListPage = () => {
  const createNewTask = (text: string) => {
    const newTask: ToDoItem = {
      id: todoList.length,
      text,
      isDone: false,
    };
    setTodoList([...todoList, newTask]);
  };

  const updateTask = (todoItem: ToDoItem) => {
    const newToDoList = todoList.map((item, idx) => {
      if (item.id === todoItem.id) item.isDone = !todoItem.isDone;
      return item;
    });
    setTodoList(newToDoList);
  };

  const deleteTask = (todoItem: ToDoItem) => {
    const newToDoList = todoList.filter((item) => item.id !== todoItem.id);
    setTodoList(newToDoList);
  };

  const [todoList, setTodoList] = useState<ToDoItem[]>([
    {
      id: 0,
      text: "First",
      isDone: false,
    },
    {
      id: 1,
      text: "Second",
      isDone: true,
    },
  ]);

  return (
    <>
      <Header />
      <Form createNewTask={createNewTask} />
      <ToDoList
        todoList={todoList}
        updateToDoTask={updateTask}
        deleteToDoTask={deleteTask}
      />
    </>
  );
};
