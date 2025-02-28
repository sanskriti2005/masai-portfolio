import React from "react";
import { Link, Flex, Box, Image, Button } from "@chakra-ui/react";

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResumeClick = () => {
    const viewLink =
      "https://drive.google.com/file/d/1N8ucU7KA9IRQoVUyIjb0NNsYNOuxjO4P/view?usp=drive_link"; // Replace with your direct Drive link
    const downloadLink =
      "https://drive.google.com/uc?export=download&id=1N8ucU7KA9IRQoVUyIjb0NNsYNOuxjO4P"; // Replace with your direct download link

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
      <Flex
        zIndex={100}
        position={"fixed"}
        width={"100%"}
        height={"50px"}
        top={0}
        left={0}
      >
        <Flex
          height={"100%"}
          width={"100%"}
          bg="blackAlpha.800/40"
          justify={"space-between"}
          alignItems={"center"}
          padding={3}
        >
          <Flex gap={4}>
            <Button
              cursor="pointer"
              color="white"
              background={"none"}
              onClick={() => handleScroll("home")}
            >
              Home
            </Button>
            <Button
              cursor="pointer"
              color="white"
              background={"none"}
              onClick={() => handleScroll("projects")}
            >
              Projects
            </Button>
            <Button
              cursor="pointer"
              color="white"
              background={"none"}
              onClick={() => handleScroll("experience")}
            >
              Experience
            </Button>
            <Button
              cursor="pointer"
              color="white"
              background={"none"}
              onClick={() => handleScroll("contact")}
            >
              Contact
            </Button>
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
