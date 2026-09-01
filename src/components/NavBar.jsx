import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar bg-primary mb-4">
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          Student Management
        </Link>

        {/* Navbar Links */}
        <div>
          <ul className="navbar-nav d-flex flex-row gap-3">

            <li className="nav-item">
              <Link className="nav-link text-light" to="/students">
                View Students
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/add">
                Add Student
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavBar