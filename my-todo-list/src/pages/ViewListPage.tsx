import { useSelector } from "react-redux";
import { ViewListItem } from "../components/ListItem/ViewListItem";
import { ToDoItem } from "../models/ToDoItem";
import { RootState } from "../store";

export const ViewListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todo);

  return (
    <div className="container">
      {todoList.map((task: ToDoItem) => {
        return <ViewListItem todoItem={task} key={task.id} />;
      })}
    </div>
  );
};
