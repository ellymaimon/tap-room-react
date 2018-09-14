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
      masterKegList: []
    }
    this.handleAdminLogin = this.handleAdminLogin.bind(this)
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this)
  }

  handleAdminLogin() {
    window.scrollTo(0, 0);
    this.setState({ admin: true });
  }
  
  handleAddingNewKeg(newKeg) {
    let newKegList = this.state.masterKegList.slice();
    newKegList.push(newKeg);
    this.setState({
      masterKegList: newKegList
    });
  }

  render() {
    return (
      <div>
        <style global jsx> {`
          * {
            font-family: sans-serif;
          }
          .btn {
            min-width: 100px;
            height: 40px;
            background-color: goldenrod;
            font-size: 1em;
            font-weight: bold;
          }
        `} </style>
  
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Body isAdmin={this.state.admin} />} />
          <Route path='/newkeg' render={() => <NewKegForm onAddNewKeg={this.handleAddingNewKeg} />} />
          <Route component={Error404} />
        </Switch>
        <Footer isAdmin={this.state.admin} onAdminLogin={this.handleAdminLogin} />
      </div>
    );
  }
}

export default App;
