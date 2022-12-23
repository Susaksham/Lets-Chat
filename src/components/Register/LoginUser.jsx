import React from 'react'
import classes from './RegisterUser.module.css'
function LoginUser() {
  return (
    <div className={classes.formContainer}>
      <div className={classes.formWrapper}>
        <span className={classes.logo}>Let's Chat</span>
        <span className={classes.title}>Register</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign In</button>
        </form>
        <p>You do have an account? Register</p>
      </div>
    </div>
  )
}

export default LoginUser
