import React from 'react';

function Navbar({ handle }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a onClick={() => handle('business')} className="nav-link active" aria-current="page" href="#">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => handle('entertainment')} className="nav-link" href="#">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => handle('science')} className="nav-link" href="#">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => handle('sports')} className="nav-link" href="#">
                  Sports
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
