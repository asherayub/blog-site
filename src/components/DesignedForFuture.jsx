import React from "react";
import styled from "styled-components";
export const DesignedForFuture = () => {
  return (
    <Container>
      <h1>Designed for the future</h1>
      <Left>
        <div className="row1">
          <h2> Introducing an extensible editor</h2>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
        <div className="row2">
          <h2>Robust content management</h2>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </Left>
    </Container>
  );
};

const Container = styled.div`
  color: black;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  * {
    margin: 10px;
  }
  h1 {
    text-align: center;
    font-size: 3.5rem;
  }
  @media (max-width: 565px) {
    h1 {
      font-size: 10vw;
    }
  }
`;
const Left = styled.div`
  width: 60%;
  .row1,
  .row2 {
    margin: 20px 0;
    p {
      text-align: justify;
    }
  }
  @media (max-width: 565px) {
    .row1,
    .row2 {
      text-align: center;
      margin: 20px -60px;
    }
  }
`;
