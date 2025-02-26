import React from "react";
import { Link, Flex, Box, Image, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <Flex position={"fixed"} width={"100%"} height={"50px"} top={0} left={0}>
        <Flex
          height={"100%"}
          width={"100%"}
          bg="blackAlpha.800/40"
          backdropFilter={"auto"}
          backdropBlur={"10px"}
          justify={"space-between"}
          alignItems={'center'}
          padding={3}
        >
          <Flex gap={4}>
            <Link href="#home" color={"white"}>
              Home
            </Link>
            <Link href="#projects" color={"white"}>
              Projects
            </Link>
            <Link href="#experience" color={"white"}>
              Experience
            </Link>
            <Link href="#contact" color={"white"}>
              Contact
            </Link>
          </Flex>
          <Box>
            <Button>Resume</Button>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
