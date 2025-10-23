import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDoItem } from "../models/ToDoItem";
import { Slide, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { deleteAction, updateAction } from "../features/todoList";

export const ToDoListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todo);
  const dispatch = useDispatch();

  const updateTask = (todoItem: ToDoItem) => {
    dispatch(updateAction(todoItem));
  };

  const deleteTask = (todoItem: ToDoItem) => {
    dispatch(deleteAction(todoItem));
  };

  return (
    <>
      <Form />
      <ToDoList
        todoList={todoList}
        updateToDoTask={updateTask}
        deleteToDoTask={deleteTask}
      />
      <ToastContainer position="bottom-right" transition={Slide} />
    </>
  );
};
