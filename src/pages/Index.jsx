import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box p={4} textAlign="center">
      <Heading mb={4}>Welcome to the Notes App</Heading>
      <Text fontSize="lg" mb={6}>Create and view your notes easily.</Text>
      <Button as={RouterLink} to="/create" colorScheme="blue" mr={2}>Create Note</Button>
      <Button as={RouterLink} to="/view" colorScheme="teal">View Notes</Button>
    </Box>
  );
};

export default Index;