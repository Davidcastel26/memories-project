import React from 'react'

const Navbar = () => {
  return (
    <div className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
  )
}

export default Navbar