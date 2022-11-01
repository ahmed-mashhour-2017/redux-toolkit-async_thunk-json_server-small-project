import React from 'react'
import   './header.css';
import { useSelector } from 'react-redux';
function Header( ) {
  const {name}=useSelector(state=>state.user.user_data)
  return (
    <div className='header'>
      <h1>My Site</h1>
      <p>Hello {name}</p>  
    </div>
  )
}

export default Header