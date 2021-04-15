// Typography component

import React from 'react';
import { Typography } from '@material-ui/core';


// the component is by default a <p></p> tag
// we pass in props (variants) to change this
// gutterBottom adds margin below the component
// when passing in colors we can only use theme colors
// noWrap truncates the text - when we want to only show snippets
// other typography props can be found in the docs

// note: material ui heading sizes are large. Therefore the component prop can be used to display the same material ui size, but show a different size tag in the html inspected
export default function Create() {
  return (
    <div>
      <Typography 
        variant="body2"
        color="primary"
        align="center"
        gutterBottom>
        Create a new note
      </Typography>
        New notes 
      <Typography 
        variant="h6"
        component="h2"
        color="primary"
        gutterBottom>
        
      </Typography>

      <Typography 
        color="secondary"
        noWrap
       >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sit amet nulla facilisi morbi tempus iaculis urna id. Ut tellus elementum sagittis vitae et. Fermentum posuere urna nec tincidunt. Integer quis auctor elit sed. Massa sed elementum tempus egestas sed sed risus. Purus gravida quis blandit turpis. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Diam quam nulla porttitor massa id neque aliquam. Eu mi bibendum neque egestas congue quisque.
      </Typography>
    </div>
  )
}
