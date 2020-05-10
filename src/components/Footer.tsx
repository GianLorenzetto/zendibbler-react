import React from "react";
import {
  Typography,
  Container,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faReact, faAws } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      textAlign: "center",
      paddingTop: "4rem",
    },
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.footer}>
        <Typography variant="caption" color="primary">
          Built with <FontAwesomeIcon icon={faHeart} /> using{" "}
          <FontAwesomeIcon icon={faReact} /> + Material UI and hosted on{" "}
          <FontAwesomeIcon icon={faAws} />
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
