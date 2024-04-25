import React from "react";
import { Box, Button, Center, FormControl, FormLabel, Image, Input } from "@chakra-ui/react";
import { orange } from "@mui/material/colors";

const UpgradeProfile = () => {
  // Dummy user data (replace with actual user data from state or props)
  const user = {
    avatar: "http://localhost:5173/avatar.jpg", // Sample avatar URL
    email: "example@example.com", // Sample email
    username: "example_user", // Sample username
  };

  // Function to handle form submission (for future updates)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to update user data
  };

  return (
    <Center>
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg" margin={10} border={'1px solid orange'}>
        <form onSubmit={handleSubmit}>
          <FormControl id="avatar" mb={4}>
            <FormLabel >Edit Profile</FormLabel>
            <Image src={user.avatar} alt="Avatar" borderRadius="full" boxSize="150px" mb={4} border={'2px solid orange'}/>
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Edit Email Address</FormLabel>
            <Input type="email" value={user.email} isReadOnly />
          </FormControl>
          <FormControl id="username" mb={4}>
            <FormLabel>Edit Username</FormLabel>
            <Input type="text" value={user.username} isReadOnly />
          </FormControl>
          <Button type="submit" colorScheme="blue" isDisabled border={'3px solid green'} borderRadius={10} padding={1}>
            Save Changes
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default UpgradeProfile;
