// card components
// better to use one prop separately for the cards
// there are a load of card variations in material ui
// ref the docs


// imports
import { Card, CardContent, CardHeader, IconButton, Typography } from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const NoteCard = ({ note, handleDelete }) => {
    // icon buttons are buttons that are specifically for icons
    // card elevation...

    // add a delete handler to the button
    return ( 
        <div>
             <Card elevation={2}>
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