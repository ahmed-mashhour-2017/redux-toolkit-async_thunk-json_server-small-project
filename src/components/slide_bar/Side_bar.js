 import React from 'react';
import { useSelector } from 'react-redux';
 import './side_bar.css'
 function SideBar() {
    const {name}=useSelector(state=>state.user.user_data)
   return (
     <div className='side_bar'>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Hello {name}</a></li>
      </ul>
      </div>
   )
 }
 
 export default SideBar;