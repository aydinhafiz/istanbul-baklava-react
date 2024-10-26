import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgb(150, 200, 120);
  border-radius: 10px;
  .header-img {
    margin-top: 5px;
    height: 400px;
    border-radius: 10px;
  }

  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: whitesmoke;
  }

  .header-description {
    text-align: center;
  }

  /* background-image: url("/assets/header-title.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  border-radius: 10px; */
`;

export default StyledHeader;
