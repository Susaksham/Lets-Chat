import React from 'react'
import classes from './Sidebar.module.css'
import Navbar from '../SideBar/Navbar'
import Search from '../SideBar/Search'
import Chats from './Chats'
function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Navbar></Navbar>
      <Search></Search>
      <Chats></Chats>
    </div>
  )
}

export default Sidebar
