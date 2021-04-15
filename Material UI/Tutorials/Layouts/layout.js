// Layouts, Drawer, Lists and Links on drawer

import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from "@material-ui/core";
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useHistory, useLocation } from "react-router";
// Wrap the layout component around the switch tags in app.js
// pass in the children in the layout component so that they are not disregarded in the rendering in app.js

// add a div around the main page and a class name if we want to add styles using makestyles

// give a variable for the drawer width, in case its used in different classes

// the List component is like the <ul> </ul> tag in html.
// Then the ListItem is like the <li> tag- a list wrapper for each item
// Other components like listItemIcon and ListItemText are for the content inside the list item
const drawerWidth = 240;

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    },
    active: {
        background: '#f4f4f4'
    }
});
const Layout = ({ children }) => {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlinedIcon color="secondary"/>,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlinedIcon color="secondary"/>,
            path: '/create'
        }
    ]

    // the classes prop allows us to override built in material ui css on the drawer
    // we set the display to flex so that the drawer sits on the left while the notes content sits on the 
    // we create an array called menuItems that stores the different items on the list
    // add button props to the links so they seem clickable
    // create active classes so that when we are on a particular page the links are able to show
    // this is accomplished by another react hook known as useLocation
    return ( 
        <div className={ classes.root }>
            <Drawer className={ classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper}}>
               <div>
                   <Typography variant="h5">
                       Today's Notes
                       </Typography></div> 

                       {/* List Links */}
                       <List>
                          {menuItems.map(item => <ListItem button key={item.text}
                          onClick={() => history.push(item.path)}
                          className={location.pathname == item.path ? classes.active: null}>
                          <ListItemIcon>{ item.icon }</ListItemIcon>
                          <ListItemText primary={ item.text}/>
                          </ListItem>)} 
                       </List>
            </Drawer>
            <div className={classes.page}> { children }</div>
          
        </div>
     );
}
 
export default Layout ;