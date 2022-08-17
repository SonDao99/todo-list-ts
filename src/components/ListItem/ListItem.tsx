import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { toggleComplete, toggleEdit, remove } from "../../features/todo/todoSlice";
import { LIST_ITEM } from "../../features/todo/todoSlice";

interface PROPS_TYPES {
  todo: LIST_ITEM;
};

const ListItem = (props: PROPS_TYPES): JSX.Element => {
  const {todo} = props;
  //const todo = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();
  
  const handleClickTodo = () => {
    dispatch(toggleComplete(todo.id));
  }

  const handleClickEdit = () => {
    dispatch(toggleEdit(todo.id));
  }

  const handleClickDelete = () => {
    dispatch(remove(todo.id));
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