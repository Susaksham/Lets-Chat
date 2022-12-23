import React from 'react'
import classes from './Navbar.module.css'
function Navbar() {
  return (
    <div className={classes.navbar}>
      <span className={classes.logo}>Let's Chat</span>
      <div className={classes.user}>
        <img
          src="https://images.pexels.com/photos/2315303/pexels-photo-2315303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
