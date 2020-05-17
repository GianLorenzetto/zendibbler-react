import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { Tabs, withStyles, Tab, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    icon: {
      padding: 4,
      fontSize: 20,
      marginRight: theme.spacing(1),
    },
    button: {
      textTransform: "none",
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 700,
    },
    activeButton: {
      color: "#eb7706",
      fontSize: 20,
      fontWeight: 700,
    },
    tabs: {
      indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        "& > div": {
          maxWidth: 40,
          width: "100%",
          backgroundColor: "#635ee7",
        },
      },
    },
    tab: {
      textTransform: "none",
    },
    title: {
      flexGrow: 1,
      fontFamily: "Dancing Script",
      fontSize: 22,
      fontWeight: 400,
    },
    goodstuff: {
      marginTop: 10,
      marginRight: 40,
    },
  })
);

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 20,
      width: "75%",
      backgroundColor: "#f39921",
    },
  },
})((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />
));

const ResponsiveTab = styled(Tab)`
  min-width: 100px;
  max-width: 120px;
  text-transform: none;
  font-weight: 800;
  font-size: 18px;
`;

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function tabToRoute(index: number): string {
  return index === 0 ? "" : index === 1 ? "About" : "Resources";
}

function routeToTab(tab: string): number {
  switch (tab.toLowerCase()) {
    case "/":
    case "/home":
      return 0;
    case "/about":
      return 1;
    case "/resources":
      return 2;

    default:
      return 0;
  }
}

const NavBar = () => {
  const history = useHistory();
  const location = useLocation();

  const classes = useStyles();
  const [value, setSelectedTab] = React.useState(0);

  useEffect(() => {
    const { pathname } = location;
    setSelectedTab(routeToTab(pathname));
  }, [location]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
    history.push(`/${tabToRoute(newValue)}`);
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="stretch">
        <Grid item>
          <AppBar position="static" color="inherit" elevation={0}>
            <Toolbar variant="dense">
              <Typography
                variant="body1"
                color="primary"
                className={classes.title}
              >
                The art and science of software
              </Typography>

              <img src="boringbits.png" height="22"></img>
              <StyledTabs value={value} onChange={handleChange}>
                <ResponsiveTab label="Home" {...a11yProps(0)} />
                <ResponsiveTab label="About" {...a11yProps(1)} />
                <ResponsiveTab label="Resources" {...a11yProps(2)} />
              </StyledTabs>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item container justify="flex-end">
          <img className={classes.goodstuff} src="goodstuff.png" height="44" />
        </Grid>
      </Grid>
    </div>
  );
};
export default NavBar;
