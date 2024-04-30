import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Link as={RouterLink} to="/" px={2}>Home</Link>
        <Link as={RouterLink} to="/create" px={2}>Create Note</Link>
        <Link as={RouterLink} to="/view" px={2}>View Notes</Link>
      </Flex>
    </Box>
  );
};

export default Navigation;