import { observer } from "mobx-react";
import { todoStore } from "../../store/store";
import React, {useState} from "react";

const Input = (): JSX.Element => {

  const [input, setInput] = useState(''); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      todoStore.addTodo(input);
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
        todoStore.addTodo(input);
        setInput('');
      }}>
        +
      </button>
    </>
  )
}

export default observer(Input);