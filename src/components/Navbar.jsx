import React from "react";
import { Link, Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <Flex
        position={"fixed"}
        border={"1px solid white"}
        width={"100%"}
        height={"50px"}
        top={0}
        left={0}
      >
        <Flex
          height={"100%"}
          width={"100%"}
          bg="red.300/40"
          backdropFilter={"blur(5px)"}
          border={"1px solid red"}
        >
          <Link href="#projects" color={"white"}>
            Projects
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
