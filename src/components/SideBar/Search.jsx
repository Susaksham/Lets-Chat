import React from 'react'
import classes from './Search.module.css'
function Search() {
  return (
    <div className={classes.search}>
      <div className={classes.searchForm}>
        <input type="text" placeholder="Find a user"></input>
      </div>
      <div className={classes.userChat}>
        <img
          src="https://images.pexels.com/photos/2315303/pexels-photo-2315303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className={classes.userChatInfo}>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
