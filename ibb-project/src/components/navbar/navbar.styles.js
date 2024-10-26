import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;

  .logo {
    width: 80px;
  }

  .right {
    display: flex;
    gap: 20px;
  }

  .right-span {
    cursor: pointer;

    color: rgb(240, 200, 80);
  }
`;

export default StyledNavbar;
