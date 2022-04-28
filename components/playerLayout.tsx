/** @format */

import { Box } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";

const PlayerLayout = ({ children }) => {
  const sidebarWidth = "250px";

  return (
    <Box width="100vw" height="100vh">
      <Box
        position="absolute"
        top="0"
        width={sidebarWidth}
        left="0"
        border="1px solid blue"
      >
        <Sidebar />
      </Box>
      <Box marginLeft={sidebarWidth} marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" left="0" bottom="0" border="1px solid green">
        player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
