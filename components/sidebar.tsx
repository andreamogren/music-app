/** @format */

import { Box } from "@chakra-ui/layout";
import NextImage from "next/image";

const Sidebar = () => {
  const sidebarPadding = "20px";

  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box
          width="120px"
          marginBottom={sidebarPadding}
          paddingX={sidebarPadding}
        >
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;