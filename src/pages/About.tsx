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
    socialBar: {
       backgroundColor: "#f5f5f5",
    },
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

        <Grid
          container
          item
          xs={6}
          direction="row"
          justify="space-between"
          alignContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <SocialBar />
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={6}
          direction="column"
          justify="flex-start"
          alignContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item className={classes.paraTitle}>
            <Typography variant="h6" color="primary">
              Who am I?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              I have over 15 years experience delivering software products,
              across a wide variety of both industries and technologies. In my
              current role as a Lead Consultant with{" "}
              <Link
                target="_blank"
                rel="noopener"
                href="https://purple.telstra.com/"
              >
                Telstra Purple
              </Link>
              , I get to focus on uplifting both our internal and customer
              teams. I'm especially focused on coaching developers towards more
              iterative and incremental (ie, agile) delivery of software
              products.
            </Typography>
          </Grid>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default About;
