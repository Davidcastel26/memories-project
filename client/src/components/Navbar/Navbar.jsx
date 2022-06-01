import React from "react";
import { Link } from 'react-router-dom'
import { AppBar, Typography } from "@material-ui/core";

//my own
import memories from "../../images/memories.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.heading}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
    </AppBar>
  );
};

export default Navbar;
