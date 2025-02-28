import React from "react";
import profile from "../assets/profile.jpg";
import evershade from "../assets/evershade.png";
import anzone from "../assets/anzone.png";
import ollama from "../assets/ollama.png";
import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  VStack,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";

const Projects = () => {
  return (
    <div>
      <Box align={"left"} width={"100%"} padding={5}>
        <Heading fontSize={30} marginBottom={5}>
          Projects
        </Heading>
        <Flex
          className="project2"
          justifyContent={"space-between"}
          marginBottom={5}
        >
          <Box
            color={"gray.500"}
            fontWeight={"bold"}
            fontSize={{ base: "16px", md: "20px" }}
          >
            Dec 2024
          </Box>
          <VStack
            width={"70%"}
            fontSize={{ base: "16px", md: "20px" }}
            gap={2}
            align={"left"}
          >
            <Image
              src={evershade}
              width={{
                base: "200px",
                sm: "250px",
                md: "300px",
                lg: "400px",
                "2xl": "500px",
              }}
              height={{
                base: "100px",
                sm: "125px",
                md: "150px",
                lg: "200px",
                "2xl": "250px",
              }}
              borderRadius={"5px"}
            />
            <Heading>EverShade</Heading>
            <Text>
              EverShade is a digital platform revolutionizing the beauty
              industry by combining sustainability and inclusivity. This project
              integrates Firebase for user authentication, cart and wishlist
              management.
            </Text>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://github.com/sanskriti2005/ever-shade"
              _hover={{ textDecoration: "underline" }}
            >
              Deployed Link &#8599;
            </Link>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://sanskriti2005.github.io/ever-shade/"
              _hover={{ textDecoration: "underline" }}
            >
              Github &#8599;
            </Link>
            <Text fontWeight={"bolder"} color={"gray.500"}>
              &#x2022; HTML &#x2022; CSS &#x2022; JavaScript &#x2022; Firebase
            </Text>
          </VStack>
        </Flex>

        {/* Anzone */}
        <Flex
          className="project2"
          justifyContent={"space-between"}
          marginBottom={5}
        >
          <Box
            color={"gray.500"}
            fontWeight={"bold"}
            fontSize={{ base: "16px", md: "20px" }}
          >
            Sep 2024
          </Box>
          <VStack
            width={"70%"}
            fontSize={{ base: "16px", md: "20px" }}
            gap={2}
            align={"left"}
          >
            <Image
              src={anzone}
              width={{
                base: "60px",
                sm: "80px",
                md: "100px",
                lg: "120px",
                "2xl": "150px",
              }}
              height={{
                base: "60px",
                sm: "80px",
                md: "100px",
                lg: "120px",
                "2xl": "150px",
              }}
              borderRadius={"2px"}
            />
            <Heading>Anzone</Heading>
            <Text>
              An AI/ML-driven women's safety app providing real-time alerts, SOS
              support, and safety advice in high-risk situations. I developed
              the AI-powered chatbot for this project.
            </Text>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://youtu.be/tS8Ls8-YFEA"
              _hover={{ textDecoration: "underline" }}
            >
              Demo &#8599;
            </Link>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://github.com/sanskriti2005/Codess-Hackathon"
              _hover={{ textDecoration: "underline" }}
            >
              Github &#8599;
            </Link>
            <Text fontWeight={"bolder"} color={"gray.500"}>
              &#x2022; OpenAI &#x2022; Gradio
            </Text>
          </VStack>
        </Flex>

        {/* Bank Loan Case Study */}
        {/* <Flex
          className="project3"
          justifyContent={"space-between"}
          marginBottom={5}
        >
          <Box color={"gray.500"} fontWeight={"bold"}>
            Jan 2024
          </Box>
          <VStack width={"70%"} fontSize={{ base: "16px", md: "20px", lg: "24px" }} gap={2} align={"left"}>
            <Heading>Bank Loan Case Study</Heading>
            <Text>
              This project aims understand a cohort of people who have
              difficulties paying back loans to make better business decisions
              as well as ensure that capable loan applicants are not rejected.
            </Text>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://github.com/sanskriti2005/bank-loan-case-study/blob/main/Project%20Report/Bank%20Loan%20Case%20Study.pdf"
              _hover={{ textDecoration: "underline" }}
            >
              Project Report &#8599;
            </Link>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://github.com/sanskriti2005/bank-loan-case-study"
              _hover={{ textDecoration: "underline" }}
            >
              Github &#8599;
            </Link>
            <Text fontWeight={"bolder"} color={"gray.500"}>
              &#x2022; Pandas &#x2022; Numpy &#x2022; Matplotlib
            </Text>
          </VStack>
        </Flex> */}

        {/* OllamaBot */}
        <Flex
          className="project4"
          justifyContent={"space-between"}
          marginBottom={5}
        >
          <Box
            color={"gray.500"}
            fontWeight={"bold"}
            fontSize={{ base: "16px", md: "20px" }}
          >
            Ongoing
          </Box>
          <VStack
            width={"70%"}
            fontSize={{ base: "16px", md: "20px" }}
            gap={2}
            align={"left"}
          >
            <Image
              src={ollama}
              width={{ base: "40px", md: "50px", lg: "60px", "2xl": "100px" }}
              height={{ base: "40px", md: "50px", lg: "60px", "2xl": "100px" }}
              borderRadius={"50%"}
            />
            <Heading>OllamaBot</Heading>
            <Text>
              A Discord bot that fetches responses from DeepSeek, LLaMA 2,
              Mistral, and other models available through Ollama.
            </Text>
            <Link
              target={"blank"}
              color={"gray.400"}
              href="https://github.com/sanskriti2005/OllamaDiscordBot"
              _hover={{ textDecoration: "underline" }}
            >
              Github &#8599;
            </Link>
            <Text fontWeight={"bolder"} color={"gray.500"}>
              &#x2022; Ollama &#x2022; Discord.js &#x2022; Express.js
            </Text>
          </VStack>
        </Flex>

        {/* Portfolio Project */}
      </Box>
    </div>
  );
};

export default Projects;
