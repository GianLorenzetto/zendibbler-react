import React from "react";
import {
  Grid,
  Typography,
  Box,
  makeStyles,
  Theme,
  createStyles,
  Link,
} from "@material-ui/core";
import Heading from "../components/Heading"
import styled from "styled-components";
import { Code } from "@material-ui/icons";

export const RustLangLink = () => {
  return (
    <Link
      target="_blank"
      rel="noopener"
      href="https://www.rust-lang.org"
    >
      Rust
    </Link>
  );
};

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
          <Typography variant="h1">About Me</Typography>
          <Typography variant="body1" paragraph className={classes.para}>
            Below are some of the various skills I've accumulated over the years, including languages,
             platforms, paradigms and tooling, in no particular order. Everything listed here I have
             used to varying degrees, although the majority in a commercial capacity (ie, relating to 
             code deployed into a production environment), with a few exceptions, like <RustLangLink/>, 
             where I've only explored it for professional development or personal hobby projects.
          </Typography>
          <Heading title="Languages" />
          <Typography variant="body1" paragraph className={classes.para}>
            C#, JavaScript, C++, C, Ruby, Java, Rust, Go, Python, Bash, Lisp, ProLog, Gopher
          </Typography>
          <Heading title="Domains" />
          <Typography variant="body1" paragraph className={classes.para}>
            Mobile Applications (Xamarin, Swift, Ionic, React Native), Web (React), Web RTC (SignalR), 
            Volumetric (3D) Visualization (medical imaging, OpenGL), Image Processing (DICOM, medical imaging), 
            Rapid Prototyping (STL file processing), Mining (resource estimation, statistical data analysis), 
            Finance (EJB, Cobol, XML/XSLT)    
          </Typography>
          <Heading title="Operating Systems" />
          <Typography variant="body1" paragraph className={classes.para}>
            macOS, Windows, Linux, Irix, BeOS, OS/2
          </Typography>
          <Heading title="Cloud Providers" />
          <Typography variant="body1" paragraph className={classes.para}>
            Azure, AWS, GCP, RackSpace
          </Typography>
          <Heading title="Platforms and Toolchains" />
          <Typography variant="body1" paragraph className={classes.para}>
            VisualStudio, VSCode, Rider, Xamarin, WebSphere, XCode, g++, clang, Make, CMake, YML, XML, XAML
          </Typography>
          <Typography variant="body1" paragraph className={classes.para}>
            Git, SVN, CVS, VSS
          </Typography>
          <Typography variant="body1" paragraph className={classes.para}>
            Azure Pipelines, Octopus Deploy, TeamCity, Jenkins, AWS CodeBuild
          </Typography>
          <Heading title="Paradigms, Methodolgies and Practices" />
          <Typography variant="body1" paragraph className={classes.para}>
            Design Patterns, Design Thinking, Systems Thinking, TDD, DDD, BDD, agile, lean, XP
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
