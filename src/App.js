import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./page/homepage";
import Livepage from "./page/live";
import Schedulepage from "./page/schedule";
import Matchpage from "./page/match";
import Gamepage from "./page/game";
import Teamspage from "./page/teams";
import Series from "./page/Series";
/* import Standingspage from "./page/standings"; */
import Statisticspage from "./page/statistics";
import AllStatisticspage from "./page/allStatistics";
import Aboutuspage from "./page/aboutus";

import game1 from "./page/game1";
import game2 from "./page/game2";
import game3 from "./page/game3";
import game4 from "./page/game4";
import game5 from "./page/game5";


import "./App.css";
import ScrollIntoView from "./components/ScrollIntoView/ScrollIntoView";
// import Profile from "./page/profile";
import ProfileTry from "./page/profileTry"
import loginpage from "./page/loginpage";
// import NewPage from "./page/newPage";

function App() {
  return (
      <Router>
        <ScrollIntoView>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/live' exact component={Livepage} />
          <Route path='/schedule' exact component={Schedulepage} />
          <Route path='/match' exact component={Matchpage} />
          <Route path='/game' exact component={Gamepage} />
          <Route path='/profile' exact component={ProfileTry} />
          <Route path='/standings' exact component={Teamspage} />
          {/* <Route path='/standings' exact component={Standingspage} /> */}
          <Route path='/series' exact component={Series} />
          <Route path='/statistics' exact component={Statisticspage} />
          <Route path='/allStatistics' exact component={AllStatisticspage} />
          <Route path='/aboutus' exact component={Aboutuspage} />
          <Route path='/login' exactt component={loginpage} />

          <Route path='/game1' exact component={game1} />
          <Route path='/game2' exact component={game2} />
          <Route path='/game3' exact component={game3} />
          <Route path='/game4' exact component={game4} />
          <Route path='/game5' exact component={game5} />

        </Switch>
        </ScrollIntoView>
      </Router>
  );
}

export default App;
