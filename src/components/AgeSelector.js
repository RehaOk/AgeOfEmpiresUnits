import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/styles.module.css";

const StyledToggleButton = withStyles({
  root: {
    fontFamily: "Arial",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.25px",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "15px 15px",
    textTransform: "none",
    width: "100%",
    "&$selected": {
      backgroundColor: "#4e5f71",
      color: "white",
      "&:hover": {
        backgroundColor: "#738190",
        color: "white",
      },
    },
  },
  selected: {},
})(ToggleButton);

const AgeSelector = (props) => {
  return (
    <Grid container className={styles.ageFilterContainer}>
      <Grid item xs={12} className={styles.itemsContainer}>
        <div className={styles.toggleCardBackground}>
          <ToggleButtonGroup
            data-testid="toggle-button-group"
            value={props.age}
            exclusive
            onChange={props.handleAgeSelection}
            aria-label="age selection">
            <StyledToggleButton data-testid="toggle-all" value="all" aria-label="Age All">
              All
            </StyledToggleButton>
            <StyledToggleButton data-testid="toggle-dark" value="Dark" aria-label="Age Dark">
              Dark
            </StyledToggleButton>
            <StyledToggleButton data-testid="toggle-feudal" value="Feudal" aria-label="Age Feudal">
              Feudal
            </StyledToggleButton>
            <StyledToggleButton data-testid="toggle-castle" value="Castle" aria-label="Age Castle">
              Castle
            </StyledToggleButton>
            <StyledToggleButton
              data-testid="toggle-imperial"
              value="Imperial"
              aria-label="Age Imperial">
              Imperial
            </StyledToggleButton>
          </ToggleButtonGroup>
        </div>
      </Grid>
    </Grid>
  );
};

export default AgeSelector;
