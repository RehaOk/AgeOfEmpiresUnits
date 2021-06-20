import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";
import styles from "../styles/styles.module.css";

const CostSelector = (props) => {
  return (
    <Grid container className={styles.costFilterContainer}>
      <Grid item xs={12} className={styles.itemsContainer}>
        <div className={styles.costFilterBackground}>
          <Typography
            data-testid="card-title"
            className={styles.costFilterTitle}
            variant="h6"
            gutterBottom>
            Costs
          </Typography>
          <FormGroup>
            <div className={styles.costFilterFormContainer}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.costFilterSelections.wood}
                    onChange={props.handleCostFilterSelections}
                    name="wood"
                    color="primary"
                    data-testid="checkbox-wood"
                  />
                }
                label="Wood"
                labelPlacement="start"
              />
              <Slider
                className={styles.sliderPosition}
                defaultValue={0}
                step={1}
                value={props.costAmounts["wood-cost"]}
                onChange={(event, newValue) => props.handleCostAmounts(newValue, "wood-cost")}
                min={0}
                max={200}
                aria-labelledby="continuous-slider"
                disabled={!props.costFilterSelections.wood}
                data-testid="slider-wood"
              />
              <Typography
                data-testid="slider-value-wood"
                className={styles.sliderValuePosition}
                variant="subtitle2"
                gutterBottom>
                {props.costAmounts["wood-cost"] !== null ? props.costAmounts["wood-cost"] : ""}
              </Typography>
            </div>
            <div className={styles.costFilterFormContainer}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.costFilterSelections.food}
                    onChange={props.handleCostFilterSelections}
                    name="food"
                    color="primary"
                    data-testid="checkbox-food"
                  />
                }
                label="Food"
                labelPlacement="start"
                className={styles.formControlLabelTwo}
              />
              <Slider
                className={styles.sliderPosition}
                defaultValue={0}
                step={1}
                value={props.costAmounts["food-cost"]}
                onChange={(event, newValue) => props.handleCostAmounts(newValue, "food-cost")}
                min={0}
                max={200}
                aria-labelledby="continuous-slider"
                disabled={!props.costFilterSelections.food}
                data-testid="slider-food"
              />
              <Typography
                data-testid="slider-value-food"
                className={styles.sliderValuePosition}
                variant="subtitle2"
                gutterBottom>
                {props.costAmounts["food-cost"] !== null ? props.costAmounts["food-cost"] : ""}
              </Typography>
            </div>
            <div className={styles.costFilterFormContainer}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.costFilterSelections.gold}
                    onChange={props.handleCostFilterSelections}
                    name="gold"
                    color="primary"
                    data-testid="checkbox-gold"
                  />
                }
                label="Gold"
                labelPlacement="start"
                className={styles.formControlLabelThree}
              />
              <Slider
                className={styles.sliderPosition}
                defaultValue={0}
                step={1}
                value={props.costAmounts["gold-cost"]}
                onChange={(event, newValue) => props.handleCostAmounts(newValue, "gold-cost")}
                min={0}
                max={200}
                aria-labelledby="continuous-slider"
                disabled={!props.costFilterSelections.gold}
                data-testid="slider-gold"
              />
              <Typography
                data-testid="slider-value-gold"
                className={styles.sliderValuePosition}
                variant="subtitle2"
                gutterBottom>
                {props.costAmounts["gold-cost"] !== null ? props.costAmounts["gold-cost"] : ""}
              </Typography>
            </div>
          </FormGroup>
        </div>
      </Grid>
    </Grid>
  );
};

export default CostSelector;
