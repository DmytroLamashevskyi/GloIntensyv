import { ListItem } from "../components/ListItem/ListItem";
import { ToDoItem } from "../models/ToDoItem";

interface ComponentProps {
  todoList: ToDoItem[];
}

export const HomePage = ({ todoList }: ComponentProps) => {
  return (
    <div className="container">
      {todoList.map((task: ToDoItem) => {
        return <ListItem todoItem={task} key={task.id} />;
      })}
    </div>
  );
};
