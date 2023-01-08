import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
function App() {
  let [todoList,setTodoList]=useState([]);
   const [todoShow,settodoShow]=useState('all');



  const addTodo=(item)=>{
     setTodoList([item,...todoList])
  }
  const handleDelete=(id)=>{
    setTodoList(todoList.filter((item)=>item.id !==id))
  }

  const updateTodoShow =(str)=>{
    settodoShow(str);
  };

  const toggleComplete =(id)=>{
    setTodoList(
    todoList.map((elem)=>{
      if(elem.id===id){
        return {
          ...elem,
          complete:!elem.complete,
        };
      }
      else{
        return elem;
      }
    })

    );

  }


if(todoShow==='active'){
  todoList=todoList.filter((elem)=>!elem.complete)
}else if(todoShow==='complete'){
  todoList=todoList.filter((elem)=>elem.complete);
}

  return (
  <div className='container'>
    <TodoForm  addTodo={addTodo} />
   
   
    {
      todoList.map((elem)=>(
        <Todo key={elem.id} element={elem} deleteItem={()=>handleDelete(elem.id)}  toggleComplete={()=>{ toggleComplete(elem.id)}}/>
            
        ))
    }

<div>
  <button className='update-btn btn'onClick={()=>updateTodoShow('all')}> All</button>
  <button className='update-btn btn'onClick={()=>updateTodoShow('active')}> Active</button>
  <button className='update-btn btn'onClick={()=>updateTodoShow('complete')}> Complete</button>


</div>

  </div>
  );
}

export default App;
