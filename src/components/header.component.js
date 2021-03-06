import React from 'react'
import logo from '../logo.svg'
import { BrowserRouter as Route, Link } from 'react-router-dom'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
          <a className="navbar-brand" href="/">Tunes</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/join" className="nav-link">Join</Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">Create</Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-right">
              <li className="nav-item">
              <button type="button" class="btn btn-outline-dark">
                  <span class="glyphicon glyphicon-house" aria-hidden="true"></span>Login
              </button>
              <button type="button" class="btn btn-outline-dark">
                  <span class="glyphicon glyphicon-user" aria-hidden="true"></span>Sign Up
              </button>
              </li>
            </ul>
          </div>
        </nav><br />
      </div>
    )
  }

} export default Header