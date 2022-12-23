import React from 'react'
import classes from './Chat.module.css'
import Messages from './Messages'
import Input from './Input'
function Chat() {
  return (
    <div className={classes.chat}>
      <div className={classes.chatInfo}>
        <span>Jane</span>

        <div className={classes.chatIcons}>
          <svg viewBox="0 0 24 24" width="24px" height="24px">
            <path
              fill="currentColor"
              d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"
            />
          </svg>
          <svg viewBox="0 0 24 24" width="24px" height="24px">
            <path
              fill="currentColor"
              d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"
            />
          </svg>
          <svg viewBox="0 0 24 24" width="24px" height="24px">
            <path
              fill="currentColor"
              d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
            />
          </svg>
        </div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  )
}

export default Chat
