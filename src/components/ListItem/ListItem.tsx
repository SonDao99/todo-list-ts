import React, {} from "react";
import { ACTION_TYPE, LIST_ITEM } from "../../App";

interface PROPS_TYPES {
  dispatch: React.Dispatch<ACTION_TYPE>;
  todo: LIST_ITEM;
};

const ListItem = (props: PROPS_TYPES): JSX.Element => {
  const {dispatch, todo} = props;
  
  const handleClickTodo = () => {
    dispatch({type:"toggleComplete", payload:todo.id});
  }

  const handleClickEdit = () => {
    dispatch({type:"toggleEdit", payload:todo.id});
  }

  const handleClickDelete = () => {
    dispatch({type:"delete", payload:todo.id});
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

export default ListItem;