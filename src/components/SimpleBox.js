import React from "react";
import { Box } from "@chakra-ui/core";

const SimpleBox = ({ children, onClick }) => {
  return (
    <Box
      w="100%"
      p={4}
      mb={6}
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default SimpleBox;
