import React from "react";
import { Link } from "react-router-dom"; 
import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Button,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { Pages } from "@mui/icons-material";
import RegisterLogin from "../Login Page/RegisterLogin";

const features = [
  {
    title: "Ease of Use",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Powerful Tools",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Collaboration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const videos = [
  {
    title: "Video 1",
    url: "../src/assets/video1.mp4",
  },
  {
    title: "Video 2",
    url: "../src/assets/video2.mp4",
  },
];

const testimonials = [
  {
    name: "John Doe",
    testimonial: "Conquest helped me ace my interviews like a pro!",
  },
  {
    name: "Jane Smith",
    testimonial: "I never felt more prepared for my interviews. Thanks, Conquest!",
  },
];

const VideoBox = ({ title, url }) => (
  <Box
    bg="gray.100"
    borderRadius="lg"
    p={0}
    textAlign="center"
    maxW="lg"
    mx="auto"
    my={6}
    border={"1px solid orange"}
  >
    <video
      title={title}
      width="100%"
      height="400"
      controls
      autoPlay
      loop
      muted
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Box>
);

const TestimonialBox = ({ name, testimonial }) => (
  <Box
    bg={useColorModeValue("black", "gray.700")}
    borderRadius="lg"
    p={8}
    textAlign="center"
    boxShadow="md"
    border={"1px solid orange"}
  >
    <Text fontSize="lg" fontFamily="sans-serif" mb={4}>
      {testimonial}
    </Text>
    <Text fontSize="md" fontFamily="sans-serif" fontWeight="bold">
      - {name}
    </Text>
  </Box>
);

const LandingPage = () => {
  return (
    <Container maxW="7xl">
      <Flex
        alignItems="center"
        justifyContent="center"
        py={12}
        px={6}
        bg="black"
        borderRadius="lg"
        color="white"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box flex="1" textAlign="center" mb={{ base: 6, md: 0 }}>
          <Heading fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }} fontFamily="sans-serif">
            Conquest :Master Your Future {" "}
            <Box
              as="span"
              bgGradient="linear(to-r, orange.500, red.800)"
              bgClip="text"
              fontFamily={"sans-serif"}
            >
              <br />
              with AI
            </Box>
          </Heading>
          <Text fontSize="lg" mt={4} fontFamily="sans-serif">
            Empower Your Interview Journey with Conquest: Where Preparation Meets Opportunity.
          </Text>
          <Flex justify="center" mt={6}>
            <Button
              as={Link}
              to={"/register"}
              padding={2}
              borderRadius={5}
              bg="orange.500"
              color="black"
              _hover={{ bg: "orange.600" }}
              mr={4}
              fontFamily="sans-serif"

            >
              Start for free
            </Button>
            <Button
              padding={2}
              borderRadius={5}
              bg="orange.500"
              color="black"
              _hover={{ bg: "orange.600" }}
              fontFamily="sans-serif"
            >
              Documentation
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Container maxW="7xl" mt={12}>
        <Flex justifyContent="space-between" mb={6}>
          <Heading textAlign="center" flex="1" fontFamily="sans-serif">
            Videos
          </Heading>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {videos.map((video, index) => (
            <GridItem key={index}>
              <VideoBox title={video.title} url={video.url} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>

      <Heading textAlign="center" flex="1" fontFamily="sans-serif" fontSize='6xl'>
        Features
      </Heading>
      <Container maxW="7xl" mt={12}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {features.map((feature, index) => (
            <GridItem key={index}>
              <Box
                bg={useColorModeValue("black", "gray.700")}
                borderRadius="lg"
                p={8}
                textAlign="center"
                boxShadow="md"
              >
                <Box as="svg" width="5rem" height="5rem" fill="orange">
                  <circle cx="12" cy="12" r="10" />
                  <line
                    x1="12"
                    y1="7"
                    x2="12"
                    y2="13"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <line
                    x1="12"
                    y1="16"
                    x2="12"
                    y2="17"
                    stroke="black"
                    strokeWidth="2"
                  />
                </Box>
                <Heading fontSize="xl" fontWeight="bold" mt={4} fontFamily="sans-serif">
                  {feature.title}
                </Heading>
                <Text fontSize="lg" mt={4} fontFamily="sans-serif">
                  {feature.description}
                </Text>
              </Box>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>

      <Heading textAlign="center" mt={6} fontFamily="sans-serif" fontSize='6xl'>
        Pricing
      </Heading>
      <Container maxW="7xl" mt={12}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} p={6}>
          {/* Pricing GridItems go here */}
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <GridItem>
            <Box
              bg={useColorModeValue("black", "gray.700")}
              borderRadius="lg"
              p={8}
              textAlign="center"
              boxShadow="md"
              border={"1px solid orange"}
            >
              <Heading fontSize="4xl" mb={4} textAlign={"left"} fontFamily={"sans-serif"}>
                Free
              </Heading>
              <Text fontSize="2xl" mb={4} textAlign={"left"} fontFamily={"sans-serif"}>
                Rs 0
              </Text>
              <Text fontSize="md" mb={4} textAlign={"left"} fontFamily={"sans-serif"}>
               1) Get free access.<br/>
               2) Get 2 interviews in a day.
              </Text>
              <Button
                as={Link}
                to="/register"
                bg="black"
                color="white"
                _hover={{ bg: "orange.600" }}
                w="100%"
                borderRadius={10}
                border={"1px solid white"}
                fontFamily={"sans-serif"}
              >
                Subscribe
              </Button>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              bg={useColorModeValue("black", "gray.700")}
              borderRadius="lg"
              p={8}
              textAlign="center"
              boxShadow="md"
              border={"1px solid orange"}
            >
              <Heading fontSize="4xl" mb={4} textAlign={"left"} fontFamily={"sans-serif"}>
                Pro
                <Box
              as="span"
              bgGradient="linear(to-r, orange.500, red.800)"
              bgClip="text"
              fontFamily={"sans-serif"}
              fontSize={"2xl"}
            >
              
              (Most Popular)
            </Box>
              </Heading>
              <Text fontSize="2xl" mb={4} textAlign={"left"} fontFamily={"sans-serif"}>
                Rs 500
              </Text>
              <Text fontSize="md" mb={4} textAlign={"left"} fontFamily={"sans-serif"}>
                1) Get 10 interviews in a day.<br/>
                2) ------------
              </Text>
              <Button
                bg="black"
                color="white"
                _hover={{ bg: "orange.600" }}
                w="100%"
                borderRadius={10}
                border={"1px solid white"}
                fontFamily={"sans-serif"}
              >
                Get Pro
              </Button>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              bg={useColorModeValue("black", "gray.700")}
              borderRadius="lg"
              p={8}
              textAlign="center"
              boxShadow="md"
              border={"1px solid orange"}
            >
              <Heading fontSize="4xl" mb={4} textAlign={"left"} fontFamily={"sans-serif"}>
                Enterprise
              </Heading>
              <Text fontSize="2xl" mb={4} textAlign={"left"} fontFamily={"sans-serif"}>
                Contact Us
              </Text>
              <Text fontSize="md" mb={4} textAlign={"left"} fontFamily={"sans-serif"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Button
                bg="black"
                color="white"
                _hover={{ bg: "orange.600" }}
                w="100%"
                borderRadius={10}
                border={"1px solid white"}
                fontFamily={"sans-serif"}
              >
                Contact Us
              </Button>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>

      <Heading textAlign="center" mt={6} fontFamily="sans-serif" fontSize='6xl'>
        Testimonials
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {testimonials.map((testimonial, index) => (
          <GridItem key={index}>
            <TestimonialBox {...testimonial} />
          </GridItem>
        ))}
      </SimpleGrid>

      {/* Footer Section */}
      <Box bg="black" color="white" py={12} mt={12}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <Heading fontSize="lg" fontFamily="sans-serif" mb={4}>
                Resources
              </Heading>
              <Text fontFamily="sans-serif">Link 1</Text>
              <Text fontFamily="sans-serif">Link 2</Text>
              <Text fontFamily="sans-serif">Link 3</Text>
            </Box>
            <Box>
              <Heading fontSize="lg" fontFamily="sans-serif" mb={4}>
                Platform
              </Heading>
              <Text fontFamily="sans-serif">Link 1</Text>
              <Text fontFamily="sans-serif">Link 2</Text>
              <Text fontFamily="sans-serif">Link 3</Text>
            </Box>
            <Box>
              <Heading fontSize="lg" fontFamily="sans-serif" mb={4}>
                Community
              </Heading>
              <Text fontFamily="sans-serif">Link 1</Text>
              <Text fontFamily="sans-serif">Link 2</Text>
              <Text fontFamily="sans-serif">Link 3</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
};

export default LandingPage;
