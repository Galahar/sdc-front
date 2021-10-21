import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./page/homepage";
import Livepage from "./page/live";
import Schedulepage from "./page/schedule";
import Teamspage from "./page/teams";
import Standingspage from "./page/standings";
import Statisticspage from "./page/statistics";
import Aboutuspage from "./page/aboutus";
import Riotpage from "./page/riot";
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
          <Route path='/standings' exact component={Standingspage} />
          <Route path='/statistics' exact component={Statisticspage} />
          <Route path='/aboutus' exact component={Aboutuspage} />
          <Route path='/riot.txt' exact component={Riotpage} />
        </Switch>
        </ScrollIntoView>
      </Router>
    </>
  );

}

export default App;
