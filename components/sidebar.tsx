/** @format */

import { Box, Divider } from "@chakra-ui/layout";
import NextImage from "next/image";

import { sidebarSpacing } from "../assets/variables";
import Favorites from "./Favorites";
import NavSidebar from "./NavSidebar";
import Playlists from "./Playlists";

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY={sidebarSpacing} height="100%">
        <Box
          width="120px"
          marginBottom={sidebarSpacing}
          paddingX={sidebarSpacing}
        >
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <NavSidebar />
        <Favorites />
        <Divider color="gray.800" />
        <Playlists />
      </Box>
    </Box>
  );
};

export default Sidebar;
