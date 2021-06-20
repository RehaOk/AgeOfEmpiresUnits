import React from "react";
import { useLocation } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import styles from "../../styles/styles.module.css";

export const listCosts = (costObj) => {
  let costs = "";
  Object.keys(costObj).forEach((key) => {
    costs += `${key}: ${costObj[key]} - `;
  });
  costs = costs.substring(0, costs.length - 3);
  return costs;
};

export function formatObjectKey(string) {
  let fragments = string.split("_");
  for (let i = 0; i < fragments.length; i++) {
    fragments[i] = fragments[i].charAt(0).toUpperCase() + fragments[i].slice(1);
  }
  return fragments.join(" ");
}

const UnitDetailPageViewIndex = () => {
  const location = useLocation();
  return (
    <div data-testid="unit-detail-page-view-index" className={styles.unitDetailPageViewRoot}>
      <div data-testid="unit-detail-card" className={styles.unitDetailCard}>
        {location.state &&
          location.state.unitDetail &&
          Object.keys(location.state.unitDetail).map((unitProperty, index) => {
            if (unitProperty !== "tableData") {
              return (
                <div key={index}>
                  <List component="nav" aria-label="unit properties">
                    <ListItem>
                      <ListItemText
                        primary={
                          unitProperty !== "cost"
                            ? `${formatObjectKey(unitProperty)}: ${
                                location.state.unitDetail[unitProperty]
                              }`
                            : listCosts(location.state.unitDetail[unitProperty])
                        }
                      />
                    </ListItem>
                  </List>
                  <Divider />
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};

export default UnitDetailPageViewIndex;
