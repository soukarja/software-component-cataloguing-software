import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <div className="login">
      <span className="title main">User Login</span>
      <span className="title">Software Component Cataloguing Software</span>

      <form>
        <input
          className="input"
          placeholder="Enter Username"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        ></input>
        <input
          className="input"
          placeholder="Enter Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        ></input>
      </form>

      <Link
        to="#"
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          if (username == "" || password == "") {
            alert("Please Enter a valid username and password");
          } else if (username == "admin" && password == "password") {
            navigate("/dashboard");
          } else {
            alert("Invalid Credentials");
          }
        }}
      >
        Login
      </Link>
      <Link to="/" className="link">
        Go back
      </Link>
    </div>
  );
};

export default LoginPage;
