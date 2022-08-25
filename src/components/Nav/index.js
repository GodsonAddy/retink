import React, { useRef, useState } from "react";
import "./index.css";
import retink from "../../image/retink.svg";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

function Nav() {
  const [loggedUser, setLoggedUser] = useState({});

  const ref = useRef();
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setLoggedUser(currentUser);
  });

  const showClick = () => {
    ref.current.classList.toggle("active");
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="nav-bar">
      <i className="gg-menu menu-btn" onClick={showClick}></i>

      <a href="/">
        <img alt="retink" className="retink-logo" src={retink} />
      </a>

      <div className="links" ref={ref}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </div>
      {loggedUser ? (
        <button type="button" className="nav-button" onClick={logout}>
          Logout
        </button>
      ) : (
        <button
          type="button"
          className="nav-button"
          onClick={() => navigate("/login")}
        >
          <i className="gg-key"></i>
          Login
        </button>
      )}
    </div>
  );
}

export default Nav;
