import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Switch>
          <Route path="./search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        {/* *Home (the one with the search on) */}
        
        {/* SearchPage (Result Page) */}
      </Router>
    </div>
  );
}

export default App;
