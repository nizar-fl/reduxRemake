import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../JS/Actions/TodoAction';

export default function AddTodo() {
    const [TODO, setTODO] = useState({})
    const handleChange = ( e ) =>{ 
        setTODO ({...TODO,[e.target.name]: e.target.value})
    }
    const dispatch = useDispatch();
  return (
    <div className='box2'>
        <h4>ADD YOUR TODO</h4>
        <input type="text" name="content" id="" onChange={handleChange} placeholder='ENTER YOUR TODO' />
        <button type='submit'  onClick={()=>dispatch(addTodo({...TODO,id:Math.random(),doneornot:false}))}>add </button>
    </div>
  )
}
