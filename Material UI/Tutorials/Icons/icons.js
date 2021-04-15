// icons
// install from terminal
// search for material icons

import React from 'react';
import { Button, ButtonGroup, Container, Typography } from '@material-ui/core';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

// use container tags instead of div tags for left sided margin

// we can also pass props to the icons
// material UI props are in camelCase not'n

//we can also apply icons to buttons
// they can be either at the start of the button or at the end
export default function Create() {
  return (
    <Container>
        {/* Icons */}
        <br></br>
        <AcUnitOutlinedIcon/>
        <br/>
        <AcUnitOutlinedIcon color="secondary" textFont="large"/>
        <br/>
        <AcUnitOutlinedIcon color="primary" textFont="small"/>
        <br/> 
        <Button
        type="submit"
        color="secondary"
        variant="contained"
        startIcon={ <SendOutlinedIcon/> }
        endIcon={ <KeyboardArrowRightOutlinedIcon/>}
        >Submit</Button>
    </Container>
  )
}