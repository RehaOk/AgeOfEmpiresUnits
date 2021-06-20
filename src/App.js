import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePageViewIndex from "./views/homePageView";
import UnitsPageViewIndex from "./views/unitsPageView";
import UnitDetailPageViewIndex from "./views/unitDetailPageView";
import TopBar from "./components/AppBar";
function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <HomePageViewIndex />
          </Route>
          <Route exact path="/units">
            <UnitsPageViewIndex />
          </Route>
          <Route exact path="/unitDetail">
            <UnitDetailPageViewIndex />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
