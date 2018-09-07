import React from "react";
import Header from './Header';
import Footer from './Footer';
import KegList from './KegList';
import Admin from './Admin';
// import Error404 from './Error404';
import { Switch, Route } from "react-router-dom";

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/admin' component={Admin} />
        {/* <Route component={Error404} /> */}
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;