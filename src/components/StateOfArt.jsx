import React from "react";
import styled from "styled-components";
export const StateOfArt = () => {
  return (
    <Container>
      <h1>State of the Art Infrastructure</h1>
      <p>
        With reliability and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly, no matter where your readers are, keeping your site
        competitive.
      </p>
    </Container>
  );
};
const Container = styled.div`
  background-color: #030354;
  width: 100vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top-right-radius: 150px;
  border-bottom-left-radius: 150px;
  * {
    margin: 5px 0;
  }
  p {
    width: 50%;
    text-align: center;
  }
  @media (max-width: 565px) {
    h1 {
      font-size: 10vw;
      margin-top: 35px;
    }
    p {
      margin-bottom: 35px;
    }
    text-align: center;
    height: auto;
  }
`;
