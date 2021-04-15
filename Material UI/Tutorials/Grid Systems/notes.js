// Grid System
// imports

import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'


export default function Notes() {

  const [notes, setNotes] = useState([]);

useEffect(() => {

  fetch('http://localhost:3000/notes')
  .then(res => res.json())
  .then(data => setNotes(data))
}, [])

// 12 column grid system
// pass a prop to the outer grid to show that it is a container
// those inside pass a prop called item to show that they are grid items inside a container
// the default behaviour of the grid is to line up things in a row
// the grid system is also responsive amd we can also specify how many columns each item takes up at differernt screen widths
// the grid container can also have a spacing prop, whose value is multiplied to the base spacing. in our case times 3
  return (
    <div>
        <Grid container spacing={3}>
          <Grid item xs= {12} sm={6}  md={3}>
            <Paper>1</Paper>
          </Grid>
          <Grid item xs= {12} sm={6} md={3}>
            <Paper>2</Paper>
          </Grid>
          <Grid item xs= {12} sm={6} md={3}>
            <Paper>3</Paper>
          </Grid>
          <Grid item xs= {12} sm={6} md={3}>
            <Paper>4</Paper>
          </Grid>
        </Grid>

        {/* Container- adds margin and padding around */}
        <Container>
        <Grid container>
       {notes.map(note => (
         <Grid key={ note.id } xs={12} md={6} lg={4}>
           <Paper>{ note.title }</Paper></Grid>
       ))}
       </Grid>
       </Container>
    </div>
  )
}
