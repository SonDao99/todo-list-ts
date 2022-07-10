import React from "react";
import { ACTION_TYPE, LIST_ITEM } from "../../App";

type PROPS_TYPES = {
  dispatch: React.Dispatch<ACTION_TYPE>;
  list: LIST_ITEM[];
};


const List = (props: PROPS_TYPES): JSX.Element => {
  const {list, dispatch} = props;

  return(
    <>
      {list.map((todo: LIST_ITEM) => {
        if (todo.editing) {
          return(
            <div key={todo.id}>
              <input value={todo.item} 
                onChange={(e) => {
                  dispatch({type:"edit", payload:{id: todo.id, item: e.target.value, editing:true}});
                }}

                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    dispatch({type:"edit", payload:{id: todo.id, item: todo.item, editing:false}});
                  }
                }}
              >
              </input>
              
              <button onClick={() => dispatch({type:"edit", payload:{id: todo.id, item: todo.item, editing:false}})}>
                Update
              </button>
              <button onClick={() => dispatch({type:"delete", payload:todo.id})}>Delete</button>
            </div>
          ) 
        }

        return(
          <div key={todo.id}>
            <div>{todo.item}</div>
            <button onClick={() => dispatch({type:"edit", payload:{id: todo.id, item: todo.item, editing:true}})}>Edit</button>
            <button onClick={() => dispatch({type:"delete", payload:todo.id})}>Delete</button>
          </div>
        )
      })}
    </>
  )
}

export default List;