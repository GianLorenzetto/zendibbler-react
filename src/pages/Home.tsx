import React from "react";
import {
  Grid,
  Typography,
  Box,
  Avatar,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import SocialBar from "../components/SocialBar";
import Heading from "../components/Heading"
import { PurpleLink } from "./PurpleLink";

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

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box paddingTop="4rem" />
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
        <Heading title="Who am I?"/>
          <Typography variant="body1" paragraph className={classes.para}>
          I have over 20 years experience developing unique software 
            solutions over a wide variety of domains, from medical device manufacturing and medical imaging, 
            to mining, finance, IoT, and autonomous vehicle control. I have worked with most major platforms 
            and a large array of technologies, from simple websites, to enterprise scale mobile applications 
            and advanced desktop visualization software.
          </Typography>
          <Heading title="What I do"/>
          <Typography variant="body1" paragraph className={classes.para}>
            In my current role as a Managing Consultant with{" "}<PurpleLink />, I get to focus on uplifting 
            both our internal and customer teams. I'm especially passionate about working in highly 
            collaborative, cross-functional teams, including client domain experts to unearth innovative, but 
            inherently valuable and human-centred software. My current focus is on helping teams understand the 
            benefits of iterative and incremental delivery, best practices in DevSecOps and coaching them on how 
            to improve their software delivery processes and practices.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
