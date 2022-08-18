import React from "react";
import { LIST_ITEM } from "../../store/store";
import ListItemEditing from "../ListItemEditing/ListItemEditing";
import ListItem from "../ListItem/ListItem";
import { observer } from "mobx-react";
import { todoStore } from "../../store/store";


const List = (): JSX.Element => {

  return(
    <>
      {todoStore.list.map((todo: LIST_ITEM) => {
        if (todo.editing) {
          return <ListItemEditing key={todo.id} todo={todo} />
        }

        return <ListItem key={todo.id} todo={todo} />
      })}
    </>
  )
}

export default observer(List);