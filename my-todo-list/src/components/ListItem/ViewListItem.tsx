import { Link } from "react-router-dom";
import { ToDoItem } from "../../models/ToDoItem";
import classes from "./ViewListItem.module.scss";

export const ViewListItem = ({ todoItem }: { todoItem: ToDoItem }) => {
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
