import React from 'react'
import classes from './Message.module.css'
function Message() {
  return (
    <div className={`${classes.message} ${classes.owner}`}>
      <div className={classes.messageInfo}>
        <img
          src="https://images.pexels.com/photos/2315303/pexels-photo-2315303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className={classes.messageContent}>
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/2315303/pexels-photo-2315303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  )
}

export default Message
