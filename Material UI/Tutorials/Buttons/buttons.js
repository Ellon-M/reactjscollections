// buttons

// contained buttons - with background color and box shadow


import React from 'react';
import { Button, ButtonGroup, Typography } from '@material-ui/core';


// same theme bg colors - primary secondary
// also a disabled button that's greyed out
// disableElevation prop in the button takes away the box shadow

// there are oulined buttons with an outline color
// Button groups bunch up several buttons into one
export default function Create() {
  return (
    <div>
      <Button>
        Submit
      </Button>
      <ButtonGroup color="secondary"
         variant="contained">
         <Button>
         Submit
        </Button>
         <Button>
           Submit
          </Button>
      </ButtonGroup>
      <Button variant="contained"
              color="secondary">
              Click me
      </Button>
      <Button variant="outlined"
              color="primary">
              Click me too
      </Button>
      <Button variant="contained"
              disabled>
              Lmao
      </Button>
    </div>
  )
}