import React from 'react'
import classes from './WelcomePage.module.css'
import Sidebar from '../SideBar/Sidebar'
import Chat from '../CharBar/Chat'
function WelcomePage() {
  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  )
}

export default WelcomePage
