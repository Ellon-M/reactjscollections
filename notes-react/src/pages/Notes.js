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

  const breakpoints = {
    default: 3,
    1100: 2,
    700:1
  }
  
  return (
    <div>
        <Container>
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
