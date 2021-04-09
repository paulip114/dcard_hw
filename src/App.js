import React from 'react';
//import styles
import './App.css';
import MainScreen from './screens/MainScreen.jsx';
// import TestScreen from './screens/MainScreen.jsx';
import City from './screens/City.jsx';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact  path="/"  >
          <Redirect to="/scenicSpot" />
        </Route>
        <Route path="/scenicSpot" exact component={MainScreen} />
        {/* <Route path="/scenicSpot/{City}" component={City} /> */}
        <Route path="/scenicSpot/:City" component={City} />
        {/* <Route path="/scenicSpot/Taipei" component={City} /> */}
      </Switch>
    </Router>
    // <MainScreen />
    //  {/* <City /> */}
    // <TestScreen/>
  );
}

export default App;
