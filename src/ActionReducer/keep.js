import { createSlice, nanoid } from "@reduxjs/toolkit";

export const keepSlice = createSlice({
  name: "keep",
  initialState: {
    loading: false,
    todos: [],
    archives: [],
    trash: [],
  },
  reducers: {
    addKeep: (state, action) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    changeTodos: (state, action) => {
      state.todos = action.payload;
    },
    handleArchive: (state, action) => {
      let todo = state.todos.find((todo) => todo.id === action.payload);
      state.archives.push(todo);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    handleUnArchives: (state, action) => {
      let todo = state.archives.find((todo) => todo.id === action.payload);
      state.todos.push(todo);
      state.archives = state.archives.filter(
        (todo) => todo.id !== action.payload
      );
    },
    handleArchivesTrash: (state, action) => {
      let todo = state.archives.find((todo) => todo.id === action.payload);
      state.trash.push(todo);
      state.archives = state.archives.filter(
        (todo) => todo.id !== action.payload
      );
    },
    handleDelete: (state, action) => {
      let todo = state.todos.find((todo) => todo.id === action.payload);
      state.trash.push(todo);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    handleDeleteNote: (state, action) => {
      state.trash = state.trash.filter((todo) => todo.id !== action.payload);
    },
    handleRestoreNote: (state, action) => {
      let todo = state.trash.find((todo) => todo.id === action.payload);
      state.todos.push(todo);
      state.trash = state.trash.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {
  addKeep,
  changeTodos,
  handleArchive,
  handleUnArchives,
  handleArchivesTrash,
  handleDelete,
  handleDeleteNote,
  handleRestoreNote,
} = keepSlice.actions;

export default keepSlice.reducer;
