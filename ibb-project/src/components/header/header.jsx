import React from "react";
import StyledHeader from "./header.styles";

function Header() {
  return (
    <StyledHeader>
      <div className="header-img-side">
        <img src="/assets/header-title.jpg" alt="" className="header-img" />
      </div>

      <div className="header-content">
        <h2 className="header-title">BAKLAVANIN TEK ADRESI</h2>
        <p className="header-description">
          35 yildan askin tecrubemiz ile turk usulu baklavanin baku deki tek
          adresi.
        </p>
      </div>
    </StyledHeader>
  );
}

export default Header;
