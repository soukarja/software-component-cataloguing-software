import React from "react";
import Header from "../header/header";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Header/> */}

      <div className="body">
        <span className="title">
          Software Component <br />
          Cataloguing Software
        </span>
        <p className="desc">
          The software component cataloguing software consists of <br />a
          software components catalogue and various functions defined on this
          components catalogue
        </p>
        <Link to="/login">Click Here to Login</Link>
      </div>
    </>
  );
};

export default Home;
