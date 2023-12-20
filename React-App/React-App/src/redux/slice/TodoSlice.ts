import type { PayloadAction } from '@reduxjs/toolkit'

import { useState } from 'react'

export interface Todo {
  
    todo: string
    id:number
    tittle:string
  }
  interface TextElement extends Element {
    innerText: string;
}
  const [todo ,setTodo]=useState([])



  todo.map((elem,i)=>{
   return(todo.innerText+=`<li>${elem.tittle}</li>`) 
    
  })
