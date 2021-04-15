// textFields


import React, { useState } from 'react';
import { Button, ButtonGroup, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';


// if we want to add additional css to our textfield
const useStyles = makeStyles({
  field: {
     marginTop: 20,
     marginBottom: 20,
     display:'block'
  }
});


export default function Create() {

  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);


    if (title && details) {
      console.log(title, details)
    }

    if (title == ''){
      setTitleError(true);

    }
    if (details == ''){
      setDetailsError(true);
    }
  }


// of different types that can be specified by the variant prop
// other props referenced in the docs can also be passed into the textField
  return (
    <Container>
        <form onSubmit={ handleSubmit } 
          noValidate 
          autoComplete="off">
          <TextField
          onChange = {(e) => setTitle(e.target.value)}
          className={ classes.field }
           label="Note Title"
           variant="outlined"
           color="secondary"
           fullWidth
          //  shows a red outline if there is an error
          // error={true}
          error={ titleError }
           required
           />
            <TextField
             onChange = {(e) => setDetails(e.target.value)}
          className={ classes.field }
           label="Note Details"
           variant="outlined"
           color="secondary"
           multiline
           rows={ 4 }
           fullWidth
           error={ detailsError }
           required/>
            <Button

             type="submit"
             color="secondary"
             variant="contained"
             endIcon={<KeyboardArrowRightOutlinedIcon/>}
             >Submit
            </Button>
        </form>
    </Container>
  )
}
