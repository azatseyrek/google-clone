import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from "@material-ui/core";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon/>
          <Avatar/>
          {/* Icon */}
          {/* Avatar */}
        </div>
      </div>
      <div className="home__body">
          <img src='https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png' alt="Google Logo" />
      </div>
    </div>
  );
};

export default Home;
