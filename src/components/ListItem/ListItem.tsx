import { observer } from "mobx-react-lite";
import React, {} from "react";
//import { ACTION_TYPE, LIST_ITEM } from "../../App";
import { LIST_ITEM } from "../../store/store";
import { todoStore } from "../../store/store";


interface PROPS_TYPES {
  todo: LIST_ITEM;
};

const ListItem = (props: PROPS_TYPES): JSX.Element => {
  const {todo} = props;
  
  const handleClickTodo = () => {
    todoStore.toggleComplete(todo.id);
  }

  const handleClickEdit = () => {
    todoStore.toggleEdit(todo.id);
  }

  const handleClickDelete = () => {
    todoStore.removeTodo(todo.id);
  }

  return(
    <div>
      <div
        onClick={() => handleClickTodo()} 
        style={todo.complete?{textDecoration: "line-through"}:{textDecoration: "none"}}
      >
        {todo.item}
      </div>
      <button onClick={() => handleClickEdit()}>Edit</button>
      <button onClick={() => handleClickDelete()}>Delete</button>
    </div>
  )
}

export default observer(ListItem);