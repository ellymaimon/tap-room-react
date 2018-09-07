import React from "react";
import Error404 from './Error404';
import { Switch, Route } from "react-router-dom";

function App(){
  return (
    <div>
      <Header/>
      {/* <Switch>
        <Route exact path='/' component={} />
        <Route path='/someroute' component={} />
        <Route component={Error404} />
      </Switch> */}
    </div>
  );
}

export default App;