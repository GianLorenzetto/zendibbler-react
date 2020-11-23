import React from "react"
import {
    Grid,
    Typography,
    makeStyles,
    createStyles,
    Theme,
  } from "@material-ui/core";
  import styled from "styled-components";
  import {
    faCoffee,
    faCookie,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BoldText = styled.span`
  font-weight: 800;
  font-size: 1rem;
  color: #e47306;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    para: {
        textAlign: "justify",
      },
    coffee: {
      fontSize: "8px",
      paddingLeft: 8,
      paddingRight: 10,
      paddingBottom: 2,
      color: "#e47306",
    },
    cookie: {
      fontSize: "8px",
      paddingLeft: 10,
      paddingBottom: 2,
      color: "#e47306",
    }
  })
);

interface HeadingProps {
    title: string
}

const Heading: React.FC<HeadingProps> = ({title}) => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="flex-start">
            <Grid item>
            <Typography variant="body1" paragraph className={classes.para}>
                <FontAwesomeIcon icon={faCoffee} className={classes.coffee}/>
                    <BoldText>{title}</BoldText>
                <FontAwesomeIcon icon={faCookie} className={classes.cookie}/>  
            </Typography>
            </Grid>
        </Grid>
    )
};

export default Heading;
