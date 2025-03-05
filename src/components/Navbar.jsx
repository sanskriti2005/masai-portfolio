import React from "react";
import { Link, Flex, Box, Image, Button, VStack } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  MenuTriggerItem,
} from "@/components/ui/menu";

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResumeClick = () => {
    const viewLink =
      "https://drive.google.com/file/d/1MIXpyVqoPpfLEx7ao5WnJqI4PBJBw0f8/view?usp=sharing"; 
    const downloadLink =
      "https://drive.google.com/uc?export=download&id=1MIXpyVqoPpfLEx7ao5WnJqI4PBJBw0f8";

    // Open resume in a new tab
    window.open(viewLink, "_blank");

    // Trigger download
    const a = document.createElement("a");
    a.href = downloadLink;
    a.download = "SanskritisResume.pdf"; 
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
          justify={"space-between"}
          alignItems={"center"}
          padding={3}
        >
          <Flex
            gap={4}
            display={{
              base: "none",
              sm: "flex",
              md: "flex",
              lg: "flex",
              "2xl": "flex",
            }}
          >
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
          <Box
            display={{
              base: "block",
              sm: "none",
              md: "none",
              lg: "none",
              "2xl": "none",
            }}
          >
            <MenuRoot>
              <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <VStack gap={1}>
                    <Box w="20px" h="2px" bg="white" />
                    <Box w="20px" h="2px" bg="white" />
                    <Box w="20px" h="2px" bg="white" />
                  </VStack>
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="home">
                  <Button
                    cursor="pointer"
                    color="white"
                    background={"none"}
                    onClick={() => handleScroll("home")}
                  >
                    Home
                  </Button>
                </MenuItem>
                <MenuItem value="projects">
                  <Button
                    cursor="pointer"
                    color="white"
                    background={"none"}
                    onClick={() => handleScroll("projects")}
                  >
                    Projects
                  </Button>
                </MenuItem>
                <MenuItem value="experience">
                  <Button
                    cursor="pointer"
                    color="white"
                    background={"none"}
                    onClick={() => handleScroll("experience")}
                  >
                    Experience
                  </Button>
                </MenuItem>
                <MenuItem value="contact">
                  <Button
                    cursor="pointer"
                    color="white"
                    background={"none"}
                    onClick={() => handleScroll("contact")}
                  >
                    Contact
                  </Button>
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </Box>
          <Box>
            <Button onClick={handleResumeClick}>Resume</Button>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
