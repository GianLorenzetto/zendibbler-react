import React from "react";
import {
  Grid,
  Typography,
  Box,
  Avatar,
  makeStyles,
  Theme,
  createStyles,
  Link,
} from "@material-ui/core";
import SocialBar from "../components/SocialBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    icon: {
      padding: 0,
      marginRight: theme.spacing(1),
    },
    paraTitle: {
      paddingRight: "0.5rem",
    },
    para: {
      textAlign: "justify",
    },
  })
);

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box paddingTop="6rem" />
      <Grid container justify="center">
        <Grid item xs={9} md={6}>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h1" color="primary">
                    Dr Gian Lorenzetto
                  </Typography>
                  <Typography variant="caption" color="primary">
                    BCM PhD (Comp Sci)
                  </Typography>
                </Grid>
                <Grid item>
                  <SocialBar />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Box border={1} borderRadius="50%">
                <Avatar
                  className={classes.avatar}
                  alt="Gian Lorenzetto"
                  src="avatar.jpg"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box paddingTop="2rem" />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        alignContent="stretch"
      >
        <Grid item xs={9} md={6}>
          <Typography variant="h2" color="primary">
            Who am I?
          </Typography>
          <Typography variant="body1" paragraph className={classes.para}>
            I have over 15 years' experience delivering software applications
            across a large variety of domains, including medical device
            manufacturing, medical imaging and autonomous vehicle control. I
            have deployed software across most major platforms, from small, low
            budget web applications to enterprise scale, mobile applications. I
            am passionate about iterative and incremental delivery, best
            practices in DevSecOps and coaching software teams on how to improve
            their software delivery processes.
          </Typography>
          <Typography variant="body1" paragraph className={classes.para}>
            In my current role as a Lead Consultant with{" "}
            <Link
              target="_blank"
              rel="noopener"
              href="https://purple.telstra.com/"
            >
              Telstra Purple
            </Link>
            , I get to focus on uplifting both our internal and customer teams.
            I'm especially focused on coaching developers towards identifying
            and reducing waste in their software development process, improving
            their development practices and, most importantly, consistently
            delivering value to our clients, early and often.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
