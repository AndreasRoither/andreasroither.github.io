import React from "react";
import ReactDOM from "react-dom";
import { styled } from "@linaria/react";

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 48px;
  color: #f15f79;
`;
const Container = styled.div`
  color: red;
  border: 1px solid red;

  &:hover {
    border-color: blue;
  }

  ${Title} {
    margin-bottom: 24px;
  }
`;

const App = () => (
  <Container color="#333">
    <Title>Hello world</Title>
  </Container>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
