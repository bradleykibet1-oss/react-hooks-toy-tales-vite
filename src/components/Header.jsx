import React from "react";

function Header() {
  return (
    <div id="toy-header">
      <div className="header-decorators">
        <span className="decor-dot dot-1" />
        <span className="decor-dot dot-2" />
        <span className="decor-dot dot-3" />
        <span className="decor-dot dot-4" />
      </div>

      <div className="hero">
        <div className="hero-elements">
          <img
            src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
            alt="toy header"
          />
          <div className="hero-copy">
            <p className="eyebrow">Toy collector playground</p>
            <h1>Toy Tales</h1>
            <p>Discover, like, and donate your favorite toys in a bright, playful collection.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
