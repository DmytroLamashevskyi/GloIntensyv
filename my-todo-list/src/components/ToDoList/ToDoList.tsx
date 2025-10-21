import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";
import { ToDoItem } from "../../models/ToDoItem";

export const ToDoList = (props: {
  todoList: ToDoItem[];
  updateToDoTask: Function;
  deleteToDoTask: Function;
}) => {
  const checkedList = () => {
    return props.todoList
      .filter((item) => item.isDone)
      .map((it, idx) => {
        return (
          <ToDoListItem
            item={it}
            key={idx}
            updateToDoTask={props.updateToDoTask}
            deleteToDoTask={props.deleteToDoTask}
          />
        );
      });
  };

  const uncheckedList = () => {
    return props.todoList
      .filter((item) => !item.isDone)
      .map((it, idx) => {
        return (
          <ToDoListItem
            item={it}
            key={idx}
            updateToDoTask={props.updateToDoTask}
            deleteToDoTask={props.deleteToDoTask}
          />
        );
      });
  };

  return (
    <div className="todo-container">
      <ul className="todo-list failed">{uncheckedList()}</ul>
      <ul className="todo-list completed">{checkedList()}</ul>
    </div>
  );
};
