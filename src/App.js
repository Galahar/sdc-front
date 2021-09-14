import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./page/homepage";
import Livepage from "./page/live";
import Schedulepage from "./page/schedule";
import Teamspage from "./page/teams";
import "./App.css";
import ScrollIntoView from "./components/ScrollIntoView/ScrollIntoView";

function App() {
  return (
    <>
      <Router>
        <ScrollIntoView>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/live' exact component={Livepage} />
          <Route path='/schedule' exact component={Schedulepage} />
          <Route path='/teams' exact component={Teamspage} />
        </Switch>
        </ScrollIntoView>
      </Router>
    </>
  );

}

export default App;
