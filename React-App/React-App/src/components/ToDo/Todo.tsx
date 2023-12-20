import React from 'react'

type Props = {}

function Todo({}: Props) {
  return (
    <div>
        <h1>Todo</h1>
        <input type="text" />
        <button onClick={(e)=>{
            e.preventDefault()
            
        }}>add</button>
        <ul>
            <li>salam</li>
        </ul>
    </div>
  )
}

export default Todo