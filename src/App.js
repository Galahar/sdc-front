import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./page/homepage";
import Livepage from "./page/live";
import Schedulepage from "./page/schedule";
import Teamspage from "./page/teams";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/live' exact component={Livepage} />
          <Route path='/schedule' exact component={Schedulepage} />
          <Route path='/teams' exact component={Teamspage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
