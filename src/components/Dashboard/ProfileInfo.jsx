import { Box, Image, Text } from "@chakra-ui/react";
import "./Dashboard.css";
import React from "react";

function ProfileInfo() {
  return (
    <Box
      flex={"2"}
      padding={"2rem"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderRadius={"1rem"}
      className="dashboard_profile t"
      margin={"0 0.5rem"}
    >
      <Image borderRadius={"100%"} src="/avatar.jpg" alt="User profile image" />
      <Text fontSize={"3xl"} className="dashboard_profile-name">
        Arya Roy
      </Text>
    </Box>
  );
}

export default ProfileInfo;
