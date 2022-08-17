import React, {} from "react";
import { LIST_ITEM } from "../../features/todo/todoSlice";
import { useAppDispatch} from "../../app/hooks";
import { remove, toggleEdit, edit } from "../../features/todo/todoSlice";

interface PROPS_TYPES {
  todo: LIST_ITEM;
};

const ListItemEditing = (props: PROPS_TYPES): JSX.Element => {
  const {todo} = props;
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(edit({...todo, item: e.target.value, editing:true}));
  }

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(toggleEdit(todo.id));
    }
  }

  const handleClickUpdate = () => {
    dispatch(toggleEdit(todo.id));
  }

  const handleClickDelete = () => {
    dispatch(remove(todo.id));
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