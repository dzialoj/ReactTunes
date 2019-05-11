import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import './App.css';
import Welcome from './components/welcome.component'
//test imports
//import Header from './components/header.component'
//import Footer from './components/footer.component'
import Create from './components/create.component'
import Join from './components/join.component'
import PartyRoom from './components/party.component'



class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/create" component={Create} />
            <Route path="/join" component={Join} />
            <Route path="/party" component={PartyRoom} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
