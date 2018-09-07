import React from "react";
import KegList from './KegList';
// import Error404 from './Error404';
import { Switch, Route } from "react-router-dom";

function App(){
  return (
    <div>
      <p>App works!</p>
      <Switch>
        <Route exact path='/' component={KegList} />
        {/* <Route path='/someroute' component={} />
        <Route component={Error404} /> */}
      </Switch>
    </div>
  );
}

export default App;