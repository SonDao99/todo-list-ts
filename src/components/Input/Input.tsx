import React, {useState} from "react";
import { ACTION_TYPE } from "../../App";

interface PROPS_TYPES {
  dispatch: React.Dispatch<ACTION_TYPE>;
};

const Input = (props: PROPS_TYPES): JSX.Element => {
  const {dispatch} = props;

  const [input, setInput] = useState(''); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      dispatch({type: "add", payload: input});
      setInput('');
    }
  }

  return(
    <>
      <input 
        value={input} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} 
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleEnter(e)}
      >
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