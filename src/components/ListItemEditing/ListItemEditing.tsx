import { observer } from "mobx-react-lite";
import React, {} from "react";
//import { ACTION_TYPE, LIST_ITEM } from "../../App";
import { todoStore } from "../../store/store";
import { LIST_ITEM } from "../../store/store";

interface PROPS_TYPES {
  todo: LIST_ITEM;
};

const ListItemEditing = (props: PROPS_TYPES): JSX.Element => {
  const {todo} = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    todoStore.editTodo({...todo, item: e.target.value, editing:true});
  }

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      todoStore.toggleEdit(todo.id);
    }
  }

  const handleClickUpdate = () => {
    todoStore.toggleEdit(todo.id);
  }

  const handleClickDelete = () => {
    todoStore.removeTodo(todo.id);
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

export default observer(ListItemEditing);