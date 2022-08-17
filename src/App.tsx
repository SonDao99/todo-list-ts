import React from 'react';
import './App.scss';

//import { v4 as uuidv4 } from 'uuid';

import Input from "./components/Input/Input";
import List from "./components/List/List";

// export interface LIST_ITEM {
//   id: string; 
//   item: string;
//   editing: boolean;
//   complete: boolean;
// };

// export type ACTION_TYPE = 
//   | {type: "add"; payload: string;}
//   | {type: "delete"; payload: string;}
//   | {type: "toggleEdit"; payload: string;}
//   | {type: "toggleComplete"; payload: string;}
//   | {type: "edit"; payload: LIST_ITEM;}
// ;

// const initialList: LIST_ITEM[] = [];

// const listReducer = (state: LIST_ITEM[], action: ACTION_TYPE): LIST_ITEM[] => {
//   switch (action.type) {
//     case "add":
//       return state.concat({id: uuidv4(), item: action.payload, editing: false, complete: false});
//     case "delete":
//       return state.filter(item => item.id !== action.payload);
//     case "toggleEdit":
//       return state.map(item => {
//         if (item.id === action.payload) {
//           return {...item, editing: !item.editing};
//         }
//         return item;
//       });
//     case "toggleComplete":
//       return state.map(item => {
//         if (item.id === action.payload) {
//           return {...item, complete: !item.complete};
//         }
//         return item;
//       });
//     case "edit":
//       return state.map(item => {
//         if (item.id === action.payload.id) {
//           return action.payload;
//         }
//         return item;
//       });
//     default:
//       throw new Error();
//   }
// }

function App(): JSX.Element {
  return (
    <div className="App">
      <Input />
      <List />
    </div>
  );
}

export default App;
