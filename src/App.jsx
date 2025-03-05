import { Container, defineKeyframes, Theme } from "@chakra-ui/react";
import React from "react";
import Content from "./components/Main";
import Navbar from "./components/Navbar";
import ParticlesComponent from "./components/Particles";
import { ColorModeProvider } from "./components/ui/color-mode";

const flicker = defineKeyframes`
  to { mask-position: 50% 50%; }
`;

const App = () => {
  const flickerAnimation = `${flicker} 20s infinite linear`;
  return (
    <ColorModeProvider forcedTheme="dark">
      <Theme appearance="dark">
        <Container className="dark" fluid>
          {/* <ParticlesComponent/> */}
          <Container fluid width={800}>
            <Navbar />
          </Container>
          <Container width={{ "2xl": 700 }} fluid margin={"auto"} padding={'60px 0'}>
            <Content />
          </Container>
        </Container>
      </Theme>
    </ColorModeProvider>
  );
};
export default App;
