import React from 'react'
import classes from './Chats.module.css'
function Chats() {
  return (
    <div className={classes.chats}>
      <div className={classes.userChat}>
        <img
          src="https://images.pexels.com/photos/2315303/pexels-photo-2315303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className={classes.userChatInfo}>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={classes.userChat}>
        <img
          src="https://images.pexels.com/photos/2315303/pexels-photo-2315303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className={classes.userChatInfo}>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={classes.userChat}>
        <img
          src="https://images.pexels.com/photos/2315303/pexels-photo-2315303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className={classes.userChatInfo}>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
