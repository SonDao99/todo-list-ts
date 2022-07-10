import React, {useState} from "react";
import { ACTION_TYPE } from "../../App";

type PROPS_TYPES = {dispatch: React.Dispatch<ACTION_TYPE>};

const Input = (props: PROPS_TYPES): JSX.Element => {
  const {dispatch} = props;

  const [input, setInput] = useState(''); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return(
    <>
      <input value={input} onChange={(e) => handleChange(e)} onKeyDown={(e) => {
        if (e.key === "Enter") {
          dispatch({type: "add", payload: input});
          setInput('');
        }
      }}>
      </input>

      <button onClick={() => {
        dispatch({type: "add", payload: input});
        setInput('');
      }}>
        +
      </button>
    </>
  )
}

export default Input;