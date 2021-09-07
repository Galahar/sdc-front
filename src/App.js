import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./page/homepage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
