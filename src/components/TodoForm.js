import React, { useState } from 'react';
import shortid from 'shortid';

export default function TodoForm(props) {
    const [text,setText]=useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        props.addTodo({
            id:shortid.generate(),
            text:text,
            complete:false
        });
        setText('');
    };
  return (
    <form  onSubmit={handleSubmit}>
        <input className='input-field' type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
       <button className='btn' onClick={handleSubmit}> Add Todo</button>
    </form>
  )
}
