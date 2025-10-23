import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./features/todoList";

const saveToLocalStore = (state: RootState) => {
  try {
    const appState = JSON.stringify(state);
    localStorage.setItem("appState", appState);
  } catch (e) {
    console.warn(e);
  }
};

const loadFromLocalStore = () => {
  try {
    const appState = localStorage.getItem("appState");
    if (!appState) return undefined;
    return JSON.parse(appState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

const rootReducer = combineReducers({
  todoList: todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStore(),
});

store.subscribe(() => saveToLocalStore(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
