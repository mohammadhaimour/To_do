import React from 'react'

export default function Todo(props) {
  return (
    <div className='d-f'>
        <div
         style={{textDecoration:props.element.complete?"line-through":""}}
         onClick={props.toggleComplete}
         >
        
         {props.element.text}
        
        </div>
        <button className='delete-btn' onClick={props.deleteItem}>X</button>
      
    </div>
  )
}
