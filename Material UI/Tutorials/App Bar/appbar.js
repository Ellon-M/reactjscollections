// App bars

// we need the AppBar and the Toolbar components from material ui
import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from "@material-ui/core";
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useHistory, useLocation } from "react-router";
import { format } from 'date-fns';
const drawerWidth = 240;

// we calculate the width in the css format as down below

// we use mixins, which are basically collections of styles used by one of material ui's components
// this gets the classes associated with material ui's components, in this case the Toolbar and it includes accessing its height. this drops the div around the content by the same height of the toolbar

// FlexGrow makes sure that the component takes up as much space as possible towards its side
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
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px )`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
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

    // the toolbar gives the appbar the spacing, the specific height etc
    // everything eg the icons go inside this toolbar
    // install date package date-fns
    // the package allows us to format dates in many ways
    // check out their website for more formats
    return ( 
        <div className={ classes.root }>
            {/* App bar */}
            <AppBar className={ classes.appbar } elevation={0}>
                <Toolbar>
                    <Typography className={ classes.date }>
                        Today is the { format(new Date(), `do MMMM Y`)}
                    </Typography>
                    <Typography >
                        Manon
                    </Typography>
                </Toolbar>
            </AppBar>

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
            {/* we add a div around the content to bring it down so that it does not overlap with the appbar. Its className is classes.toobar because its height should equal the height of the toolbar */}
            <div className={classes.page}>
                <div className={classes.toolbar}></div>{ children }</div>
          
        </div>
     );
}
 
export default Layout ;