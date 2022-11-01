import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
import './form.css';
import { add_user } from './../../store_redux_toolkit/reducers/user_slice';
 
export default function Form() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const dispatch=useDispatch();
  const {loading,error}=useSelector(state=>state.user)
  return (
    
    <form className='form' onSubmit={(e)=>{
      e.preventDefault();
       dispatch(add_user({name,email}));
        
    }}>
      <div  className='form-group'>
        <input   type="text" name="name" placeholder="Enter Name" value={name} onInput={(e)=>{setName(e.target.value)}}/>
      </div>
      <div   className='form-group'>
        <input  type="email"  name="email" placeholder="Enter Email" value={email} onInput={(e)=>{setEmail(e.target.value)}}/>
      </div>
    {loading?'loading...':  <div className='form-group'>
        <input type="submit" value="Add User" />
      </div>
      }
      {error&&loading===false&&"Error !!"}
    </form>
     
   )
}
