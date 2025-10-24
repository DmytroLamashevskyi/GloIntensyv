import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAction } from "../../features/todoList";
import {
  FormBlock,
  FormButton,
  FormInput,
  FormLabel,
  FormWrapper,
} from "./Form.styled";

import plusIcon from "../../assets/images/plus.png";

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
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormInput
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <FormButton icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
