import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  faMedium,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { start } from "repl";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    icon: {
      padding: 4,
      fontSize: 20,
      marginRight: theme.spacing(1),
    },
    button: {
      textTransform: "none",
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 700,
    },
    activeButton: {
      color: "#eb7706",
      fontSize: 20,
      fontWeight: 700,
    },
    title: {
      flexGrow: 1,
      fontFamily: "Dancing Script",
      fontSize: 22,
      fontWeight: 400,
    },
  })
);

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="body1" color="primary" className={classes.title}>
            The art and science of software
          </Typography>

          <Button variant="text" className={classes.button}>
            <Typography
              className={classes.activeButton}
              variant="body1"
              color="primary"
            >
              About
            </Typography>
          </Button>
          {/* <Button variant="text" className={classes.button}>
            <Typography
              className={classes.buttonText}
              variant="body1"
              color="primary"
            >
              Blog
            </Typography>
          </Button>
          <Button variant="text" className={classes.button}>
            <Typography
              className={classes.buttonText}
              variant="body1"
              color="primary"
            >
              Resources
            </Typography>
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
