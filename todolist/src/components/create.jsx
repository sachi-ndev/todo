import React, { useState } from 'react'
import axios from 'axios';

export default function Create() {

  const [task,setTask]=useState()


  const handleAdd=()=>{
    console.log(task);



    axios.post('http://localhost:3001/add',{task:task})
    .then(result =>console.log(result))
    .catch(err=>console.log(err))

  }



  return (
    <div className=''>
        <input onChange={(e)=> setTask(e.target.value)}
        type="text"   placeholder='Add tast' className='outline-slate-500 px-2 py-3 '/>
        <button 
        onClick={handleAdd}
         className='px-8 py-3 rounded-tr-lg rounded-br-lg bg-black text-white'>add</button>
    </div>
  )
}
