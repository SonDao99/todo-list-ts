import React, {} from "react";
import { ACTION_TYPE, LIST_ITEM } from "../../App";

interface PROPS_TYPES {
  dispatch: React.Dispatch<ACTION_TYPE>;
  todo: LIST_ITEM;
};

const ListItem = (props: PROPS_TYPES): JSX.Element => {
  const {dispatch, todo} = props;
  
  const handleClickEdit = () => {
    dispatch({type:"edit", payload: {id: todo.id, item: todo.item, editing:true}});
  }

  const handleClickDelete = () => {
    dispatch({type:"delete", payload:todo.id});
  }

  return(
    <div>
      <div>{todo.item}</div>
      <button onClick={() => handleClickEdit()}>Edit</button>
      <button onClick={() => handleClickDelete()}>Delete</button>
    </div>
  )
}

export default ListItem;