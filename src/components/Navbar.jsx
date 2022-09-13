import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <h1>Blogrr</h1>
        </Logo>
        <NavLinks>
          <ul>
            <li>
              product
              <ul>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Integrations</li>
              </ul>
            </li>
            <li>
              company
              <ul>
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </li>
            <li>
              connect
              <ul>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
              </ul>
            </li>
          </ul>
        </NavLinks>
      </Left>
      <Right>
        <Register>
          <button>login</button>
          <button>sign up</button>
        </Register>
      </Right>
    </Container>
  );
};

export default Navbar;
const Container = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #000;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
`;
const Logo = styled.div``;
const NavLinks = styled.div`
  ul {
    display: flex;
    list-style: none;
    margin-left: 20px;
    li {
      cursor: pointer;
      margin: 10px;
      text-transform: capitalize;
      :hover ul {
        display: block;
      }
    }
    li ul {
      display: none;
      position: absolute;
      margin: 0;
      background-color: #fff;
      color: #000;
      border-radius: 10px;
      box-shadow: 1px 2px 3px #00000059;
      li {
        margin: 0;
        padding: 10px 40px;
        :hover {
          background-color: #e8e7e765;
          border-radius: 10px;
        }
      }
    }
    @media (max-width: 565px) {
      li {
        margin: 10px 5px;
      }
    }
  }
`;
const Right = styled.div``;
const Register = styled.div`
  @media (max-width: 565px) {
    display: none;
  }
  button {
    margin: 10px;
    padding: 10px 20px;
    background-color: transparent;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    transition: background-color 250ms ease-in;
    text-transform: capitalize;
    :hover {
      background-color: #ffffff72;
    }
  }
`;
