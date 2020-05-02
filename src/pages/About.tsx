import React from "react";
import {
  Grid,
  Typography,
  Box,
  Avatar,
  makeStyles,
  Theme,
  createStyles,
  IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    icon: {
      padding: 0,
      marginRight: theme.spacing(2),
    },
    paraTitle: {
      paddingRight: "0.5rem",
    },
  })
);

function About() {
  const classes = useStyles();

  return (
    <div>
      <Box paddingTop="6rem" />
      <Grid
        container
        direction="column"
        spacing={4}
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Box border={1} borderRadius="50%">
            <Avatar
              className={classes.avatar}
              alt="Gian Lorenzetto"
              src="avatar.jpg"
            ></Avatar>
          </Box>
        </Grid>
        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h1" color="primary">
              Dr Gian Lorenzetto
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="primary">
              BCM PhD (Comp Sci)
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1" color="primary"></Typography>
        </Grid>
        <Grid
          container
          item
          xs={6}
          direction="row"
          justify="flex-start"
          alignContent="center"
          alignItems="flex-end"
        >
          <Grid item className={classes.paraTitle}>
            <Typography variant="h5" color="primary">
              Who am I?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">I'm a Lead Consultant with Telstra Purple, where my role is to uplift and coach both our intenal teams and customers.</Typography>
          </Grid>
        </Grid>

        <Grid item>
          <IconButton
            className={classes.icon}
            color="primary"
            rel="noopener"
            target="_blank"
            href="https://twitter.com/TheZenDibbler"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            color="primary"
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/gianlorenzetto/"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            color="primary"
            rel="noopener"
            target="_blank"
            href="https://github.com/GianLorenzetto"
          >
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
