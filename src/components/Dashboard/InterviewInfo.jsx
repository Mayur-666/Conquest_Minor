import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function InterviewInfo() {
  return (
    <Box className="t" flex={"3"} padding={"2rem"} borderRadius={"1rem"}>
      <Text fontSize={"2xl"}>Interviews Given</Text>
      <Text fontSize={"6xl"}>60</Text>
    </Box>
  );
}

export default InterviewInfo;
