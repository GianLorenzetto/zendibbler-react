import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import NavBar from "./components/NavBar";
import About from "./pages/About";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 32
    }
  },
  palette: {
    primary: {
      main: '#37474f',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <div className="App">
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      </ThemeProvider>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <p>ToDo - coming soon</p>
    </div>
  );
}

export default App;
