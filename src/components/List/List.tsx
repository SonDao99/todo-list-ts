import React from "react";
import { ACTION_TYPE, LIST_ITEM } from "../../App";
import ListItemEditing from "../ListItemEditing/ListItemEditing";
import ListItem from "../ListItem/ListItem";

interface PROPS_TYPES {
  dispatch: React.Dispatch<ACTION_TYPE>;
  list: LIST_ITEM[];
};


const List = (props: PROPS_TYPES): JSX.Element => {
  const {list, dispatch} = props;

  return(
    <>
      {list.map((todo: LIST_ITEM) => {
        if (todo.editing) {
          return <ListItemEditing key={todo.id} dispatch={dispatch} todo={todo} />
        }

        return <ListItem key={todo.id} dispatch={dispatch} todo={todo} />
      })}
    </>
  )
}

export default List;