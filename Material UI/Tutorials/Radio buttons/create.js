// Radio buttons
// import


import React, { useState } from 'react';
import { Button, ButtonGroup, Container, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';


const useStyles = makeStyles({
  field: {
     marginTop: 20,
     marginBottom: 20,
     display:'block'
  }
});


export default function Create() {

// we need to store the input in some sort of state

  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  // give a value that is initially checked by default
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);


    if (title && details) {
      console.log(title, details, category)
    }

    if (title == ''){
      setTitleError(true);

    }
    if (details == ''){
      setDetailsError(true);
    }
  }

  // we only want the user to be able to choose only one button at a time
  // We use a radio group for this. It is a component tha has to be imported and wrapped around the radio button

  // a better way to use radio buttons is using a form control label that gives us a label that wraps around the radio button
  // import


  // adding more labels to our radio buttons
  // imports - formLabel and formControl
  return (
    <Container>
      <Typography 
         variant="h6"
        component="h2"
         color="textSecondary">
          Create a New Note
        </Typography>
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
            <RadioGroup>
            <Radio
            value="hello">
            </Radio>
            <Radio
            value="goodbye">
            </Radio>
            </RadioGroup>

            {/* better way */}
            {/* pass the name of the state to the radio group  */}
            {/* we use the onChange handler to update the initial 'todos' value that was the initial state */}
            {/* formlabel is used to just label a particular section of the form */}
            {/* formcontrol wraps everything in the same context */}
            
            <FormControl className={ classes.field }>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup value={ category } onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio/>} label="Money"/>
            <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
            <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
            <FormControlLabel value="work" control={<Radio/>} label="Work"/>
            </RadioGroup>
            </FormControl>

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
