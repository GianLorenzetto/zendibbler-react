import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Nunito",
    h1: {
      fontSize: 38,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 32,
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
              <About />
            </Route>
            <Route exact path="/about">
              <About />
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

function Home() {
  return (
    <div>
      <p>ToDo - coming soon</p>
    </div>
  );
}

export default App;
