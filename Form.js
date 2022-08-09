import React from "react";

const Form =({setInputtext, todos, setTodos, inputtext})=>{
    const inputTextHandler = (e)=>{
        setInputtext(e.target.value);
    };

    const submitTodoHandler = (e) =>{
       e.preventDefault();
       setTodos([
        ...todos,{
            text: inputTextHandler, id:Math.random()*1000
        }
       ]);
       setInputtext("");
    }
    return(
        <form>
        <input value={inputtext} onChange={inputTextHandler} type= "text" className="todo-input" />
        <button onClick={submitTodoHandler} name= "todo-button">
          <i className="" > Add</i>
        </button>
       
       </form>
    )
}

export default Form;