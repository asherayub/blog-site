import React from "react";
import styled from "styled-components";
export const FreeOpen = () => {
  return (
    <Container>
      <div className="row1">
        <h2>Free, open, simple</h2>
        <p>
          Blogrr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
      </div>
      <div className="row2">
        <h2>Powerful tooling</h2>
        <p>
          {" "}
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  color: black;
  width: 100vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  * {
    margin: 10px;
  }
  .row1,
  .row2 {
    text-align: center;
    width: 50%;
    p {
      text-align: justify;
    }
  }
  @media (max-width: 750px) {
    height: auto;
    width: auto;
    p {
      margin: 20px -60px;
    }
  }
`;
