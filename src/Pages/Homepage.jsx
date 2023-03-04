import React from "react";
import "./Homepage.css";
import { Link, Outlet } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="main">
      <div className="Parent">
        <div className="upper">
          <img src="https://mystickermania.com/cdn/stickers/deadpool/sticker_2052-512x512.png?t=09102020" />
        </div>
        <div className="between">
          <h1>MyVidChat</h1>
          <p>Online video call, streaming and messaging Made easy</p>
          <a
            href="https://github.com/Pavitar01"
            style={{
              color: "gray",
              textDecoration: "none",
              color: "white",
              margin: "0 0 0 100px",
            }}
          >
            @Pavitar01
          </a>
        </div>
        <div className="bottom">
          <button>
            <Link to="/home">Lets Go..</Link>
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Homepage;
