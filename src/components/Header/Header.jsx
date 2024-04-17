import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <Link className="buttons-first" to="/">
          {" "}
          <i class="fa-solid fa-home"></i> Home
        </Link>
        <Link
          className="buttons-first"
          to="https://www.amazon.com/"
          target="_blank"
        >
          <i class="fa-solid fa-cart-shopping"></i> Marketplace
        </Link>
        <Link
          className="buttons-first"
          to="https://www.epidemicsound.com/music/themes/broadcasting/online-radio/?_us=adwords&_usx=11304661669_&utm_source=google&utm_medium=paidsearch&utm_campaign=11304661669&utm_term=&gad_source=1&gclid=Cj0KCQjwlN6wBhCcARIsAKZvD5jnx0KfHBb36nrBD0r8vBySVh0YzGBwhNjdFfsaSieVKW0JMB5ZfeoaAoX8EALw_wcB"
          target="_blank"
        >
          <i class="fa-solid fa-headphones"></i> Music
        </Link>
      </div>
      <div className="header-right">
        <div className="header-user">
          <button className="button-login">
            <Link className="link-login" to="/login-page">
              <i className="fa-solid fa-user"></i> Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
