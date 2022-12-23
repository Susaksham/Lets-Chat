import React from 'react'
import classes from './Input.module.css'
function Input() {
  return (
    <div className={classes.input}>
      <input type="text" placeholder="Type something..." />
      <div className={classes.send}>
        <svg viewBox="0 0 24 24" width="24px" height="24px">
          <path
            fill="currentColor"
            d="M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z"
          />
        </svg>
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          {' '}
          <svg viewBox="0 0 24 24" width="24px" height="24px">
            <path
              fill="rgb(0, 153, 255)"
              d="M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z"
            />
          </svg>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
