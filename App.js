import"./App.css";
import React, {useState} from 'react';
import Form from'./components/Form';
import TodoList  from './components/Todo-List';


function App() {
  const[inputText, setInputText] = useState("");
  const [todos,setTodos]= useState([]);
  return (
    <div className="App">
      <header className="App-header">
       <h1>ToDo-List</h1>
      </header>
      <Form inputText={inputText} todos ={todos} setTodos = {setTodos} setInputText={setInputText}/>
      <TodoList todos = {todos} />
    </div>
  );
}

export default App;
