import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import contactReducer from "./contactSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    contact: contactReducer
  }
});
