import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg"
            style={{"backgroundColor": "#cf84c5"}}>
        <div className="collpase navbar-collapse justify-content-center">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-auto">
                <Link to="/" className="navbar-brand"><b>Recipe App</b></Link>
              </li>
            </ul>
        </div>
      </nav>
    );
  }
}

// dark blue
// style={{"backgroundColor": "#0C2597"}}