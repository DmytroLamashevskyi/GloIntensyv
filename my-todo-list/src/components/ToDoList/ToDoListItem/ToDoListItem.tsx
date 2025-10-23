import "./ToDoListItem.scss";
import { ToDoItem } from "../../../models/ToDoItem";

export const ToDoListItem = (props: {
  item: ToDoItem;
  updateToDoTask: Function;
  deleteToDoTask: Function;
}) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.item.text}</span>
      <div className="todo-list-item__buttons">
        <button
          className="btn-trash"
          onClick={() => props.deleteToDoTask(props.item)}
        ></button>
        <button
          className={props.item.isDone ? "btn-check" : "btn-uncheck"}
          onClick={() => props.updateToDoTask(props.item)}
        ></button>
      </div>
    </li>
  );
};
