import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function App() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="my-react-app/src/NextPage.jsx">ფილმები</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">მთავარი</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ფილმები</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">სერიალები</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ჟანრები
              </a>
              <ul className="dropdown-menu">
  <li><a className="dropdown-item" href="#">მოქმედება</a></li>
  <li><a className="dropdown-item" href="#">თავგადასავალი</a></li>
  <li><a className="dropdown-item" href="#">კომედია</a></li>
  <li><a className="dropdown-item" href="#">დრამა</a></li>
  <li><a className="dropdown-item" href="#">საშინელება</a></li>
  <li><a className="dropdown-item" href="#">თრილერი</a></li>
  <li><a className="dropdown-item" href="#">რომანტიკა</a></li>
  <li><a className="dropdown-item" href="#">სამეცნიერო ფანტასტიკა</a></li>
  <li><a className="dropdown-item" href="#">ფანტასტიკა</a></li>
  <li><a className="dropdown-item" href="#">საიდუმლო</a></li>
  <li><a className="dropdown-item" href="#">დოკუმენტური</a></li>
  <li><a className="dropdown-item" href="#">ანიმაცია</a></li>
  <li><a className="dropdown-item" href="#">კრიმინალი</a></li>
  <li><a className="dropdown-item" href="#">მუზიკალური</a></li>
  <li><a className="dropdown-item" href="#">ისტორიული</a></li>
  <li><a className="dropdown-item" href="#">ვესტერნი</a></li>
</ul>

            </li>

          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default App;
