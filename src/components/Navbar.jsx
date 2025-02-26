import React from "react";
import { Link, Flex, Box, Image, Button } from "@chakra-ui/react";

const Navbar = () => {
  const handleResumeClick = () => {
    const viewLink = "https://drive.google.com/file/d/1N8ucU7KA9IRQoVUyIjb0NNsYNOuxjO4P/view?usp=drive_link"; // Replace with your direct Drive link
    const downloadLink = "https://drive.google.com/uc?export=download&id=1N8ucU7KA9IRQoVUyIjb0NNsYNOuxjO4P"; // Replace with your direct download link
    
    // Open resume in a new tab
    window.open(viewLink, "_blank");

    // Trigger download
    const a = document.createElement("a");
    a.href = downloadLink;
    a.download = "Resume.pdf"; // Change filename if needed
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
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
          alignItems={"center"}
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
            <Button onClick={handleResumeClick}>Resume</Button>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
