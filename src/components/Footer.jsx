import React from "react";
import styled from "styled-components";
export const Footer = () => {
  return (
    <Container>
      <footer>
        <Left>
          <h1>Blogrr</h1>
        </Left>
        <Right>
          <div className="col1">
            <p>Product</p>
            <a href="#">Overview</a>
            <a href="#">Pricing</a>
            <a href="#">Marketplace</a>
            <a href="#">Features</a>
            <a href="#">Integrations</a>
          </div>
          <div className="col2">
            <p>Company</p>
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
          <div className="col3">
            <p>Connect</p>
            <a href="#">Contact</a>
            <a href="#">Newsletter</a>
            <a href="#">LinkedIn</a>
          </div>
        </Right>
      </footer>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 250px;
  background-color: #2e2e2e;
  border-top-right-radius: 150px;
  footer {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
const Left = styled.div`
  flex: 1;
  margin-left: 10px;
  font-size: 2rem;
  @media (max-width: 565px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 2;
  text-align: left;
  display: flex;
  justify-content: space-evenly;
  div {
    display: flex;
    flex-direction: column;
    p {
      margin-bottom: 10px;
      font-size: 25px;
    }
    a {
      color: white;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 565px) {
    height: auto;
    div p {
      font-size: 5vw;
    }
  }
`;
