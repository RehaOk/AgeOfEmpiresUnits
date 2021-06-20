import React, { forwardRef } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import styles from "../styles/styles.module.css";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox data-testid="add-box" {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const UnitTable = (props) => {
  const history = useHistory();
  return (
    <Grid data-testid="table-container" container className={styles.tableContainer}>
      <Grid item xs={12}>
        <div className={styles.tableWrapper}>
          <MaterialTable
            icons={tableIcons}
            isLoading={props.isLoading}
            options={{
              actionsColumnIndex: -1,
              search: false,
              emptyRowsWhenPaging: true,
              actionsCellStyle: {
                display: "flex",
                justifyContent: "center",
                padding: 16,
                width: "100%",
              },
            }}
            title=""
            columns={[
              {
                title: "Id",
                field: "id",
                width: 50,
                maxWidth: 50,
                headerStyle: { width: 50 },
                cellStyle: {
                  width: 50,
                  maxWidth: 50,
                },
              },
              {
                title: "Name",
                field: "name",
                width: 100,
                maxWidth: 100,
                headerStyle: { width: 100 },
                cellStyle: {
                  width: 100,
                  maxWidth: 100,
                },
              },
              {
                title: "Age",
                field: "age",
                width: 100,
                maxWidth: 100,
                headerStyle: { width: 100 },
                cellStyle: {
                  width: 100,
                  maxWidth: 100,
                },
              },
              {
                title: "Costs",
                field: "cost",
                width: 100,
                maxWidth: 100,
                headerStyle: { width: 100 },
                cellStyle: {
                  width: 100,
                  maxWidth: 100,
                },
                render: (rowData) => {
                  let cellContent = "";
                  Object.keys(rowData.cost).forEach((costKey) => {
                    cellContent += `${costKey}: ${rowData.cost[costKey]} - `;
                  });
                  cellContent = cellContent.substring(0, cellContent.length - 2);
                  return cellContent;
                },
              },
            ]}
            data={props.data ? props.data : []}
            actions={[
              {
                icon: () => <ArrowForwardIcon />,
                tooltip: "Unit Detail",
                onClick: (event, rowData) =>
                  history.push({
                    pathname: "/unitDetail",
                    state: { unitDetail: rowData },
                  }),
              },
            ]}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default UnitTable;
