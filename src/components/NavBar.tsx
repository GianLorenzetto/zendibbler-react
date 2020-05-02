import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(1)
    },
    icon: {
        padding: 0,
      marginRight: theme.spacing(2)
    },
    button: {
      marginRight: theme.spacing(2)
    },
    title: {
      fontSize: 20,
      fontWeight: 500,
      flexGrow: 1
    }
  })
);

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="body1" className={classes.title}>
            Dr Gian Lorenzetto
          </Typography>

          <IconButton className={classes.icon} color="inherit" rel="noopener" target="_blank" href="https://twitter.com/TheZenDibbler">
              <TwitterIcon />
          </IconButton>
          <IconButton className={classes.icon} color="inherit" rel="noopener" target="_blank" href="https://www.linkedin.com/in/gianlorenzetto/">
              <GitHubIcon />
          </IconButton>
          <IconButton className={classes.icon} color="inherit" rel="noopener" target="_blank" href="https://github.com/GianLorenzetto">
              <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
