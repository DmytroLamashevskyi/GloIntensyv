import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDoItem } from "../models/ToDoItem";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

export interface ToDoState {
  todo: ToDoItem[];
}

const initialState: ToDoState = {
  todo: [
    {
      id: uuid(),
      text: "Init First",
      isDone: false,
    },
    {
      id: uuid(),
      text: "Init Done",
      isDone: true,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newTask: ToDoItem = {
        id: uuid(),
        text: action.payload,
        isDone: false,
      };
      state.todo = [...state.todo, newTask];
      toast.success("Task Created!");
    },
    updateAction: (state, action: PayloadAction<ToDoItem>) => {
      state.todo = state.todo.map((item, idx) => {
        if (item.id === action.payload.id) item.isDone = !action.payload.isDone;
        return item;
      });
      toast.success("Task Updated!");
    },
    deleteAction: (state, action: PayloadAction<ToDoItem>) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload.id);
      toast.error("Task Deleted!");
    },
  },
});

export const { createAction, updateAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;
