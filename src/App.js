import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import './App.css';
import Welcome from './components/welcome.component'
//test imports
import Header from './components/header.component'
import Footer from './components/footer.component'

function App() {

  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route to="/" component={Welcome}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
