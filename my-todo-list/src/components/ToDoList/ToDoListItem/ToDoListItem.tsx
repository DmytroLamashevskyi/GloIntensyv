import { ToDoItem } from "../../../models/ToDoItem";
import {
  ToDoItemButton,
  ToDoItemControls,
  ToDoItemText,
  ToDoItemWraper,
} from "./ToDoListItem.styled";

import Trash from "../../../assets/images/trash.png";
import Check from "../../../assets/images/check.png";
import Uncheck from "../../../assets/images/uncheck.png";

export const ToDoListItem = (props: {
  item: ToDoItem;
  updateToDoTask: Function;
  deleteToDoTask: Function;
}) => {
  return (
    <ToDoItemWraper>
      <ToDoItemText>{props.item.text}</ToDoItemText>
      <ToDoItemControls>
        <ToDoItemButton
          icon={Trash}
          onClick={() => props.deleteToDoTask(props.item)}
        />
        <ToDoItemButton
          icon={props.item.isDone ? Check : Uncheck}
          onClick={() => props.updateToDoTask(props.item)}
        ></ToDoItemButton>
      </ToDoItemControls>
    </ToDoItemWraper>
  );
};
