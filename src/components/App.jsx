import React from "react";
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      admin: false,
    }
    this.handleAdminLogin = this.handleAdminLogin.bind(this)
  }

  handleAdminLogin() {
    window.scrollTo(0, 0);
    this.setState({ admin: true });
  }
  
  render() {
    return (
      <div>
        <style global jsx> {`
          * {
            font-family: sans-serif;
          }
        `} </style>
  
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <Body isAdmin={this.state.admin} />} />
          <Route path='/newkeg' component={NewKegForm} />
          <Route component={Error404} />
        </Switch>
        <Footer isAdmin={this.state.admin} onAdminLogin={this.handleAdminLogin} />
      </div>
    );
  }
}

export default App;
