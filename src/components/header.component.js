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
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/join">Join</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/create">Create</a>
              </li>
            </ul>
          </div>
        </nav><br />
      </div>
    )
  }

} export default Header