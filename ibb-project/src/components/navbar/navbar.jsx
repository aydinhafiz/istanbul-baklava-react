import React from "react";
import StyledNavbar from "./navbar.styles";

function Navbar() {
  return (
    <StyledNavbar>
      <div class="left">
        <img src="/assets/logo.png" alt="istanbul-baklava-logo" class="logo" />
      </div>
      <div class="right">
        <span class="contact right-span">KONTAK</span>
        <span class="products right-span">PRADUKTLAR</span>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
