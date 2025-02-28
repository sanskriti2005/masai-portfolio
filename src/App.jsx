import { Container, defineKeyframes } from "@chakra-ui/react";
import React from "react";
import Content from "./components/Main";
import Navbar from "./components/Navbar";

const flicker = defineKeyframes`
  to { mask-position: 50% 50%; }
`;

const App = () => {
  const flickerAnimation = `${flicker} 20s infinite linear`;
  return (
    <Container className="dark" fluid>
      <Container fluid width={800}>
        <Navbar />
      </Container>

      <Container width={{ "2xl": 700 }} fluid margin={"100px auto"}>
        <Content />
      </Container>
    </Container>
  );
};
export default App;
