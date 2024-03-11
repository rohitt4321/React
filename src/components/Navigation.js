import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="index.html">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</a> */}
                {/* <Link className="nav-link px-lg-3 py-3 py-lg-4" to={"/"}>Home</Link> */}
                <NavLink 
                  to="/"
                  className={({ isActive, isPending  }) =>
                  `nav-link px-lg-3 py-3 py-lg-4 isPending ? "pending" : isActive ? "active" : ""`
                  }>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</a> */}
                {/* <Link className="nav-link px-lg-3 py-3 py-lg-4" to={"/Main"}>Main</Link> */}
                <NavLink
                  to="/Main"
                  className={({ isActive, isPending }) =>
                  `nav-link px-lg-3 py-3 py-lg-4 isPending ? "pending" : isActive ? "active" : ""`
                  }>
                  Main
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</a> */}
                {/* <Link className="nav-link px-lg-3 py-3 py-lg-4" to={"/About"}>About</Link> */}
                <NavLink
                  to="/About"
                  className={({ isActive, isPending }) =>
                    `nav-link px-lg-3 py-3 py-lg-4 isPending ? "pending" : isActive ? "active" : ""`
                  }>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">Sample Post</a> */}
                {/* <Link className="nav-link px-lg-3 py-3 py-lg-4" to={"/Post"}>post</Link> */}
                <NavLink
                  to="/Post"
                  className={({ isActive, isPending }) =>
                  `nav-link px-lg-3 py-3 py-lg-4 isPending ? "pending" : isActive ? "active" : ""`
                  }
                >
                  Post
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</a> */}
                {/* <Link className="nav-link px-lg-3 py-3 py-lg-4" to={"/Contact"}>Contact</Link> */}
                <NavLink
                  to="/Contact"
                  className={({ isActive, isPending }) =>
                  `nav-link px-lg-3 py-3 py-lg-4 isPending ? "pending" : isActive ? "active" : ""`
                  }
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
