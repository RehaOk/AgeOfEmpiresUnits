import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AgeSelector from "../../components/AgeSelector";
import CostSelector from "../../components/CostSelector";
import UnitTable from "../../components/UnitTable";
import * as actions from "../../redux/actions";
import styles from "../../styles/styles.module.css";

const UnitDetailPageViewIndex = (props) => {
  /* Get data if it exists in session storage */
  const sessionsCostAmounts = JSON.parse(
    window.sessionStorage.getItem("sessionsCostAmounts")
      ? window.sessionStorage.getItem("sessionsCostAmounts")
      : null,
  );
  const sessionsCostFilterSelections = JSON.parse(
    window.sessionStorage.getItem("sessionsCostFilterSelections")
      ? window.sessionStorage.getItem("sessionsCostFilterSelections")
      : null,
  );
  const sessionsAge = window.sessionStorage.getItem("sessionsAge");

  const [age, setAge] = useState(sessionsAge ? sessionsAge : "all");
  const handleAgeSelection = (event, newAge) => {
    window.sessionStorage.setItem("sessionsAge", newAge);
    setAge(newAge);
  };
  const [costAmounts, setCostAmounts] = useState(
    sessionsCostAmounts
      ? sessionsCostAmounts
      : {
          "wood-cost": null,
          "food-cost": null,
          "gold-cost": null,
        },
  );
  const handleCostAmounts = (newValue, name) => {
    window.sessionStorage.setItem(
      "sessionsCostAmounts",
      JSON.stringify({ ...costAmounts, [name]: newValue }),
    );
    setCostAmounts({ ...costAmounts, [name]: newValue });
  };
  const [costFilterSelections, setCostFilterSelections] = useState(
    sessionsCostFilterSelections
      ? sessionsCostFilterSelections
      : {
          wood: false,
          food: false,
          gold: false,
        },
  );
  const handleCostFilterSelections = (event) => {
    if (!event.target.checked) {
      // Reset value at disabled slider
      handleCostAmounts(null, `${event.target.name}-cost`);
    } else {
      // Set value of checked filter to 0 at initialization
      handleCostAmounts(0, `${event.target.name}-cost`);
    }
    window.sessionStorage.setItem(
      "sessionsCostFilterSelections",
      JSON.stringify({
        ...costFilterSelections,
        [event.target.name]: event.target.checked,
      }),
    );
    setCostFilterSelections({ ...costFilterSelections, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    /* initial data loading  */
    props.actions.filterUnitData({ age, costAmounts });
  }, []);

  useEffect(() => {
    if (age) {
      props.actions.filterUnitData({ age, costAmounts });
    }
  }, [props.actions, age, costAmounts]);

  return (
    <div data-testid="unit-page-view-index" className={styles.unitsPageViewRoot}>
      <AgeSelector age={age} handleAgeSelection={handleAgeSelection} />
      <CostSelector
        costFilterSelections={costFilterSelections}
        handleCostFilterSelections={handleCostFilterSelections}
        costAmounts={costAmounts}
        handleCostAmounts={handleCostAmounts}
      />
      <UnitTable isLoading={props.filterInProgress} data={props.filterResult} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filterResult: state.unitFilter.filteredUnitData,
    filterInProgress: state.unitFilter.filterUnitDataInProgress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      filterUnitData: (payload) => {
        dispatch(actions.filterUnitData(payload));
      },
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitDetailPageViewIndex);
