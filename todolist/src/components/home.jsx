import React, { useEffect, useState } from 'react'
import Create from './create'
import axios from 'axios'

export default function Home() {
    const [todos,setodos]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result=>setodos(result.data))
        .catch(err=> console.log(err))
    },[todos])

// console.log(todo.task);
  return (

    <div className='w-[90vw] h-[100vh] flex flex-col items-center'>

        <h1 className='mb-7'>TODO LIST</h1>
        <Create/>
        {
            todos.length===0
            ?
            <div>
                <h2>NO RECORDS</h2>
            </div>
            :
            todos.map(todo=>(
                <div>
                    {todo.task}
                </div>
            ))
        }
    </div>
  )
}
