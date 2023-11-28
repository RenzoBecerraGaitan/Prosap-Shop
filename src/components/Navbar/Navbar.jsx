import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { singOutUser } from "../../services/firebase";

export default function Navbar() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <header className="header_section bg-warning">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="/">
              <img
                width="250"
                src="./../src/assets/logo.jpg"
                alt="#"
                className="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="bi bi-house"></i> Home{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    <i className="bi bi-file-person-fill"></i> Quienes Somos?
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
                <div>
                  {currentUser ? (
                    (console.log(currentUser),
                    (
                      <li className="currentUserContainer d-flex ">
                        <h4> Bienvenido: {currentUser.displayName} </h4>
                        <a
                          className="btn btn-block btn-black"
                          onClick={singOutUser}
                        >
                          <i className="bi bi-box-arrow-in-left"></i>Sing-Out
                        </a>
                      </li>
                    ))
                  ) : (
                    <a className="btn btn-block btn-black" href="/login">
                      <i className="bi bi-box-arrow-in-right"></i>Login
                    </a>
                  )}
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
