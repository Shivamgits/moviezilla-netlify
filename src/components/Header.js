import React from "react";
import "../styles/Header.css"

const Header = () => {
  return (
    <>
      <span onClick={() => window.scroll(0,0) }className="header">
          🎬 MovieZilla 🎥</span>
    </>
  );
};

export default Header;
