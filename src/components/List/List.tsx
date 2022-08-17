import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectTodo } from "../../features/todo/todoSlice";
import { LIST_ITEM } from "../../features/todo/todoSlice";
import ListItemEditing from "../ListItemEditing/ListItemEditing";
import ListItem from "../ListItem/ListItem";

const List = (): JSX.Element => {
  const list = useAppSelector(selectTodo)

  return(
    <>
      {list.map((todo: LIST_ITEM) => {
        if (todo.editing) {
          return <ListItemEditing key={todo.id} todo={todo}/>
        }

        return <ListItem key={todo.id} todo={todo}/>
      })}
    </>
  )
}

export default List;