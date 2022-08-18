import React from 'react';
import './App.scss';
import Input from "./components/Input/Input";
import List from "./components/List/List";

function App(): JSX.Element {
  return (
    <div className="App">
      <Input />
      <List />
    </div>
  );
}

export default App;
