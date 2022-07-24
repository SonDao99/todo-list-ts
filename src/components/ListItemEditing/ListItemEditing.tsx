import React, {} from "react";
import { ACTION_TYPE, LIST_ITEM } from "../../App";

interface PROPS_TYPES {
  dispatch: React.Dispatch<ACTION_TYPE>;
  todo: LIST_ITEM;
};

const ListItemEditing = (props: PROPS_TYPES): JSX.Element => {
  const {dispatch, todo} = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type:"edit", payload:{...todo, item: e.target.value, editing:true}});
  }

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch({type:"toggleEdit", payload:todo.id});
    }
  }

  const handleClickUpdate = () => {
    dispatch({type:"toggleEdit", payload:todo.id});
  }

  const handleClickDelete = () => {
    dispatch({type:"delete", payload:todo.id});
  }
  
  return(
    <div>
      <input value={todo.item} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handlePressEnter(e)}
      >
      </input>
      
      <button onClick={() => handleClickUpdate()}>Update</button>

      <button onClick={() => handleClickDelete()}>Delete</button>
    </div>
  )
}

export default ListItemEditing;