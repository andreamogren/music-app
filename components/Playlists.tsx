/** @format */

import { Box, List, ListItem, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import NextLink from "next/link";
import { sidebarSpacing } from "../assets/variables";

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Playlists = () => {
  return (
    <Box height="66%" overflowY="auto" paddingY={sidebarSpacing}>
      <List spacing={2}>
        {playlists.map((playlist) => (
          <ListItem paddingX={sidebarSpacing} fontSize="16px" key={playlist}>
            <LinkBox>
              <NextLink href="/" passHref>
                <LinkOverlay>{playlist}</LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Playlists;
