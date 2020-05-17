import React from "react";
import {
  Grid,
  Typography,
  Box,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import styled from "styled-components";

const BoldText = styled.span`
  font-weight: 800;
  font-size: 1.1rem;
`;

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
      <Box paddingTop="4rem" />

      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        alignContent="stretch"
      >
        <Grid item xs={9} md={6}>
          <Typography variant="body1" paragraph className={classes.para}>
            <BoldText>Education</BoldText> Todo
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
