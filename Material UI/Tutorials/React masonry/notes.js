// react masonry css package

// to avoid vertical spaces in grids, we use the masonry component from the package


import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard';
import { Card, CardContent, CardHeader, IconButton, Typography } from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import { spacing } from '@material-ui/system';
import Masonry from 'react-masonry-css';
export default function Notes() {

  const [notes, setNotes] = useState([]);


useEffect(() => {

  fetch('http://localhost:4000/notes')
  .then(res => res.json())
  .then(data => setNotes(data))
}, [])

const handleDelete = async (id) => {
    await fetch(' http://localhost:4000/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes);

  }
// create our breakpoints
// preferable to match the breakpoints to material ui's
// state the width and how many columns you would want for it
// we move from large to small
  const breakpoints = {
    default: 3,
    1100: 2,
    700:1
  }
  
  // we remove the grid components.. or use the masonry component in place of the grids and the grid container
  return (
    <div>
        <Container>

    {/* add props to the component    */}
       <Masonry
       breakpointCols={ breakpoints }
       className="my-masonry-grid"
       columnClassName="my-masonry-grid_column">      
         {notes.map(note => (
         < div key={ note.id }>
         <NoteCard note= { note } handleDelete = { handleDelete }/>
          </ div>
       ))}
         </Masonry> 
       </Container>
       
    </div>
  )
}
