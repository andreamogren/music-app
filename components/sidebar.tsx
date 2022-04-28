/** @format */

import {
  Box,
  Divider,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";
import NextImage from "next/image";
import NextLink from "next/link";

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  const sidebarSpacing = "20px";

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
        <Box marginBottom={sidebarSpacing}>
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem
                paddingX={sidebarSpacing}
                fontSize="16px"
                key={menu.name}
              >
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight={sidebarSpacing}
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginTop={sidebarSpacing} marginBottom={sidebarSpacing}>
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem
                paddingX={sidebarSpacing}
                fontSize="16px"
                key={menu.name}
              >
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight={sidebarSpacing}
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="66%" overflowY="auto" paddingY={sidebarSpacing}>
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem
                paddingX={sidebarSpacing}
                fontSize="16px"
                key={playlist}
              >
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{playlist}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
