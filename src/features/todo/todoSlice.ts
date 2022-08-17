import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { v4 as uuidv4 } from 'uuid';


export interface LIST_ITEM {
  id: string; 
  item: string;
  editing: boolean;
  complete: boolean;
};

const initialState: LIST_ITEM[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push({id: uuidv4(), item: action.payload, editing: false, complete: false});
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload);
    },
    toggleEdit: (state, action: PayloadAction<string>) => {
      return state.map(item => {
        if (item.id === action.payload) {
          return {...item, editing: !item.editing};
        }
        return item;
      });
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      return state.map(item => {
        if (item.id === action.payload) {
          return {...item, complete: !item.complete};
        }
        return item;
      });
    },
    edit: (state, action: PayloadAction<LIST_ITEM>) => {
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
  }
})

export const { add, remove, toggleEdit, toggleComplete, edit } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;