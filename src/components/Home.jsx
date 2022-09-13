import React from "react";
import styled from "styled-components";
export const Home = () => {
  return (
    <Container>
      <Content>
        <h1>A modern publishing platform</h1>
        <p> Grow your audience and build your online brand</p>
        <Buttons>
          <button>Start for Free</button>
          <button> Learn More</button>
        </Buttons>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 60vh;
  background-color: #ff4400ca;
  border-bottom-left-radius: 80px;
`;
const Content = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  * {
    margin: 10px 0;
  }
  h1 {
    font-size: 3.5rem;
  }
  p {
    font-size: 1.2rem;
  }
  @media (max-width: 565px) {
    h1 {
      font-size: 10vw;
    }
    p {
      font-size: 5vw;
    }
  }
`;
const Buttons = styled.div`
  button {
    margin: 10px;
    padding: 15px 20px;
    background-color: transparent;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    transition: background-color 250ms ease-in;
    text-transform: capitalize;
    color: #fff;
    :hover {
      background-color: #ffffff72;
    }
  }
`;
