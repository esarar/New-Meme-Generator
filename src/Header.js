import React from "react";

function Header() {
  return (
    <div className="container">
      <header className="header">
        <img
          src={require("./images/troll-face.png")}
          alt=""
          className="header--logo"
        />
        <h1 className="header--title">Meme Generator</h1>
        <h3 className="header--name">React Course - Project 3</h3>
      </header>
    </div>
  );
}

export default Header;
