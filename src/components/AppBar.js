import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "../styles/styles.module.css";

/* Material ui expects internal class object to set color */
const useStyles = makeStyles(() => ({
  appBarColor: {
    backgroundColor: "#3f4e5d",
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={styles.appBarRoot}>
      <AppBar
        data-testid="top-bar"
        position="static"
        classes={{
          colorPrimary: classes.appBarColor,
        }}>
        <Toolbar>
          <Typography data-testid="app-title" variant="h6" className={styles.appBarTitle}>
            AgeOfUnitList
          </Typography>
          <Button data-testid="link-home" color="inherit" onClick={() => history.push("/")}>
            Home
          </Button>
          <Button data-testid="link-units" color="inherit" onClick={() => history.push("/units")}>
            Units
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
