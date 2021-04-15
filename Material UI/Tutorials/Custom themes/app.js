// custom themes
// material ui uses a default theme
// it can be  viewed on the docs
// however if you do not want to use the default theme values you can set and pick some values and define them yourself, and then they will take precedence over the default values

// we create the theme in the app.js file so that the whole app can accesss the theme

// imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
// the createMuiTheme creates our custom theme then the ThemeProvider wraps our entire application in the created custom theme
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

// create the theme
// you can use material ui colors or your own 
// the color pallete consists of a light, main and dark version of the color. Using material ui colors would auto-specify all this for us
// That's because the color itself is an object, not the color itself, as compared to when we define our own
// material ui uses the roboto font by default
// this can be overriden by applying our own font in the main css file, then specifying it in our custom theme, under typography
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Montserrat&family=Quattrocento',
    fontWeightLight: 400,
    fontWeightBold: 700
  }
})

// wrap everything with the ThemeProvider
function App() {
  return (
    <ThemeProvider theme={ theme }>
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}