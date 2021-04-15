// more on makeStyles

import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from "@material-ui/core";
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useHistory, useLocation } from "react-router";

const drawerWidth = 240;

// turning the makeStyles object into a function
// meaning we can take in arguements
// we can pass the theme arguement, and use it instead of hardcoding values into our classes
const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
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
        },
        title: {
             padding: theme.spacing(2)
        }
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

    return ( 
        <div className={ classes.root }>
            <Drawer className={ classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper}}>
               <div>
                   <Typography variant="h5" className={classes.title}>
                       Today's Notes
                       </Typography></div> 

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