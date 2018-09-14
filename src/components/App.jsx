import React from "react";
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import Error404 from './Error404';
import { Switch, Route } from "react-router-dom";
import { v4 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      admin: false,
      masterKegList: [
        {
          name: 'Ruby Zozzle',
          brewer: 'Hi-Wheel',
          description: 'Sparkling Wine & Grapefruit',
          abv: '6.8',
          price: '7',
          remaining: '20',
          id: v4()
        },
        {
          name: 'Tart N Juicy',
          brewer: 'Epic',
          description: 'Sour IPA',
          abv: '4.5',
          price: '6',
          remaining: '60',
          id: v4()
        },
        {
          name: 'Hamm\'s',
          brewer: 'Miller/Coors',
          description: 'American Lager',
          abv: '4.7',
          price: '3',
          remaining: '65',
          id: v4()
        },
        {
          name: 'Prismatic',
          brewer: 'Ninkasi',
          description: 'Juicy IPA',
          abv:  '5.9',
          price: '6',
          remaining: '75',
          id: v4()
        },
        {
          name: 'Juicy Haze',
          brewer: 'New Belgium',
          description: 'India Pale Ale',
          abv:  '7.5',
          price: '6',
          remaining: '18',
          id: v4()
        },
        {
          name: '8 Hop',
          brewer: 'New Belgium',
          description: 'Pale Ale',
          abv:  '5.5',
          price: '6',
          remaining: '58',
          id: v4()
        }
      ]
    }
    this.handleAdminLogin = this.handleAdminLogin.bind(this)
    this.handleAdminLogout = this.handleAdminLogout.bind(this)
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this)
  }

  handleAdminLogin() {
    window.scrollTo(0, 0);
    this.setState({ admin: true });
  }

  handleAdminLogout() {
    window.scrollTo(0, 0);
    this.setState({ admin: false });
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
          <Route exact path='/' render={() => <Body isAdmin={this.state.admin} kegList={this.state.masterKegList} />} />
          <Route path='/newkeg' render={() => <NewKegForm onAddNewKeg={this.handleAddingNewKeg} />} />
          <Route path='/editkeg' render={() => <EditKegForm />} />
          <Route component={Error404} />
        </Switch>
        <Footer isAdmin={this.state.admin} onAdminLogin={this.handleAdminLogin} onAdminLogout={this.handleAdminLogout} />
      </div>
    );
  }
}

export default App;
