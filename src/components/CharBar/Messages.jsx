import React from 'react'
import classes from './Messages.module.css'
import Message from './Message'
function Messages() {
  return (
    <div className={classes.messages}>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
    </div>
  )
}

export default Messages
