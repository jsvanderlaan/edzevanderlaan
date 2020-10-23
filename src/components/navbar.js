import React from "react"
import "./navbar.css"
import { Link } from "gatsby"

const Navbar = class extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <Link activeClassName="active" className="navbar-item" to="/">
          Portfolio
        </Link>
        <Link activeClassName="active" className="navbar-item" to="/over-edze">
          Over Edze
        </Link>
      </nav>
    )
  }
}

export default Navbar
