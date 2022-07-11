import React, {useReducer} from 'react';
import './App.css';

//import { v4 as uuidv4 } from 'uuid';

import Input from "./components/Input/Input";
import List from "./components/List/List";

export interface LIST_ITEM {
  id: string; 
  item: string;
  editing: boolean;
};

export type ACTION_TYPE = 
  | {type: "add"; payload: string;}
  | {type: "delete"; payload: string;}
  | {type: "edit"; payload: LIST_ITEM;};

const initialList: LIST_ITEM[] = [];

const listReducer = (state: LIST_ITEM[], action: ACTION_TYPE): LIST_ITEM[] => {
  switch (action.type) {
    case "add":
      return state.concat({id: (new Date()).toString(), item: action.payload, editing: false});
    case "delete":
      return state.filter(item => item.id !== action.payload);
    case "edit":
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    default:
      throw new Error();
  }
}

function App(): JSX.Element {
  const [list, dispatch] = useReducer(listReducer, initialList);

  return (
    <div className="App">
      <Input dispatch={dispatch} />
      <List list={list} dispatch={dispatch}/>
    </div>
  );
}

export default App;
