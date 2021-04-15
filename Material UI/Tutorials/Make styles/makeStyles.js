// adding custom css
// using the makeStyles hook
// import

import React from 'react';
import { Button, ButtonGroup, Container, makeStyles, Typography } from '@material-ui/core';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';


// follows the hook naming convention
// each property inside this hook is a css class
// everything is in camelCase
// applying the button hover state
// making a title class for the typography component
const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'pink'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  }
});

// we then invoke the hook inside the create component
// it returns to us an object with all the different classes on it
// apply the class to the targeted components using className, which is equal to a dynamic value
export default function Create() {

  const classes = useStyles();

  return (
    <Container>
      <Typography 
        className = {classes.title}
         variant="h6"
        component="h2"
         color="textSecondary">
          Create a new note
        </Typography>
        <Button
        // adding the class..
        className = {classes.btn}
        onClick = {() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
        // startIcon={ <SendOutlinedIcon/> }
        endIcon={ <KeyboardArrowRightOutlinedIcon/>}
        >Submit</Button>
    </Container>
  )
}