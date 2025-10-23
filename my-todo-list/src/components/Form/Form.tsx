import { useState } from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { createAction } from "../../features/todoList";

export const Form = () => {
  const [text, setText] = useState<string>();
  const dispatch = useDispatch();

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (text) {
      dispatch(createAction(text));
      setText("");
    }
  };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};
