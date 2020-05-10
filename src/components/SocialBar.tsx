import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import {
  faMediumM,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      padding: 8,
    },
    icon: {
      fontSize: "20px",
    },
  })
);

const SocialBar = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="flex-start">
      <Grid item>
        <IconButton
          className={classes.iconButton}
          color="primary"
          rel="noopener"
          target="_blank"
          href="https://twitter.com/TheZenDibbler"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            color="primary"
            className={classes.icon}
          />
        </IconButton>
      </Grid>

      <Grid item>
        <IconButton
          className={classes.iconButton}
          color="primary"
          rel="noopener"
          target="_blank"
          href="https://medium.com/@gian.lorenzetto"
        >
          <FontAwesomeIcon
            icon={faMediumM}
            color="primary"
            className={classes.icon}
          />
        </IconButton>
      </Grid>

      <Grid item>
        <IconButton
          className={classes.iconButton}
          color="primary"
          rel="noopener"
          target="_blank"
          href="https://github.com/GianLorenzetto"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="primary"
            className={classes.icon}
          />
        </IconButton>
      </Grid>

      <Grid item>
        <IconButton
          className={classes.iconButton}
          color="primary"
          rel="noopener"
          target="_blank"
          href="https://www.linkedin.com/in/gianlorenzetto/"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="primary"
            className={classes.icon}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SocialBar;
