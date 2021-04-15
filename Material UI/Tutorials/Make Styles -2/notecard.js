import { Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'



// using makeStyles with arguements and returning some kind of value
const useStyles = makeStyles({
     test: {
        border: (note) => {
             if (note.category == 'todos'){
                  return '2px solid lightblue '
             }
        }
     }
})



const NoteCard = ({ note, handleDelete }) => {
     const classes = useStyles(note);
    return ( 
        <div>
             <Card elevation={1} className={ classes.test }>
              <CardHeader
              action={
                    <IconButton onClick={ () => handleDelete(note.id)}>
                   <DeleteOutlineIcon/>
                    </IconButton>
              }  
               title={ note.title }
               subheader={ note.category }/>
               <CardContent>
                   <Typography variant="body2" color="textSecondary">
                        { note.details }
                   </Typography>
               </CardContent>
          </Card>

        </div>
     );
}
 
export default NoteCard;