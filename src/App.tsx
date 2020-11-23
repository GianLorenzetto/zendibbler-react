import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import About from "./pages/About";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Nunito",
    h1: {
      fontSize: 38,
      fontWeight: "bold",
      paddingBottom: "12px",
    },
    h2: {
      fontSize: 32,
      paddingBottom: "10px",
    },
    h3: {
      fontSize: 28,
    },
  },
  palette: {
    primary: {
      main: "#37474f",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/resources">
              <Resources />
            </Route>
          </Switch>
          <Container maxWidth="xs">
            <Footer />
          </Container>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
