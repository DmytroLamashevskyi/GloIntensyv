import { Link } from "react-router-dom";
import { ToDoItem } from "../../models/ToDoItem";
import classes from "./ListItem.module.scss";

export const ListItem = ({ todoItem }: { todoItem: ToDoItem }) => {
  return (
    <>
      <Link
        className={`${classes.link} ${
          todoItem.isDone ? classes.done : classes.undone
        }`}
        to={`/list/${todoItem.id}`}
      >
        {todoItem.text}
      </Link>
    </>
  );
};
