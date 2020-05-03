import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Grid, Paper } from "@material-ui/core";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#f5f5f5",
    },
    iconGroup: {
      padding: 10,
      marginRight: theme.spacing(2),
    },
    icon: {
        paddingRight: 4
    }
  })
);

const SocialBar = () => {
  let classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <IconButton
            className={classes.iconGroup}
            color="primary"
            rel="noopener"
            target="_blank"
            href="https://twitter.com/TheZenDibbler"
          >
            <TwitterIcon className={classes.icon}/>
            <Typography variant="body1">Twitter</Typography>
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton
            className={classes.iconGroup}
            color="primary"
            rel="noopener"
            target="_blank"
            href="https://github.com/GianLorenzetto"
          >
            <GitHubIcon className={classes.icon}/>
            <Typography variant="body1">GitHub</Typography>
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton
            className={classes.iconGroup}
            color="primary"
            rel="noopener"
            target="_blank"
            href="https://medium.com/@gian.lorenzetto"
          >
            <FontAwesomeIcon className={classes.icon} icon={faMedium} color="primary"/>
            <Typography variant="body1">Medium</Typography>
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton
            className={classes.iconGroup}
            color="primary"
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/gianlorenzetto/"
          >
            <LinkedInIcon className={classes.icon}/>
            <Typography variant="body1">LinkedIn</Typography>
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SocialBar;
