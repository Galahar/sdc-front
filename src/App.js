import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./page/homepage";
import Livepage from "./page/live";
import Schedulepage from "./page/schedule";
import Matchpage from "./page/match";
import Gamepage from "./page/game";
import Teamspage from "./page/teams";
import Standingspage from "./page/standings";
import Statisticspage from "./page/statistics";
import AllStatisticspage from "./page/allStatistics";
import Aboutuspage from "./page/aboutus";
import "./App.css";
import ScrollIntoView from "./components/ScrollIntoView/ScrollIntoView";
import ProfileTry from "./page/profileTry";

function App() {
  return (
    <>
      <Router>
        <ScrollIntoView>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/live' exact component={Livepage} />
          <Route path='/schedule' exact component={Schedulepage} />
          <Route path='/match' exact component={Matchpage} />
          <Route path='/game' exact component={Gamepage} />
          <Route path='/profile_new' exact component={Gamepage} />
          <Route path='/teams' exact component={Teamspage} />
          <Route path='/standings' exact component={Standingspage} />
          <Route path='/statistics' exact component={Statisticspage} />
          <Route path='/allStatistics' exact component={AllStatisticspage} />

          <Route path='/aboutus' exact component={Aboutuspage} />
        </Switch>
        </ScrollIntoView>
      </Router>
    </>
  );
}

export default App;
