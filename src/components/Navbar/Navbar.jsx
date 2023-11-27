import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <header class="header_section bg-warning">
        <div class="container">
          <nav class="navbar navbar-expand-lg custom_nav-container">
            <a class="navbar-brand" href="/"><img width="250" src="./../src/assets/logo.jpg" alt="#" className="logo" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/"><i class="bi bi-house"></i> Home </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about"><i class="bi bi-file-person-fill"></i> Quienes Somos?</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                  </a>
                </li>
                <div>
                <a className="btn btn-block btn-black" href="/login"><i class="bi bi-box-arrow-in-right"></i> Login</a>
                </div>
                
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}