/** @format */

import {
  Box,
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
  ListIcon,
} from "@chakra-ui/layout";
import NextLink from "next/link";
import { sidebarSpacing } from "../assets/variables";

const MenuTemplate = ({ menuItems }) => {
  return (
    <Box marginBottom={sidebarSpacing}>
      <List spacing={2}>
        {menuItems.map((item) => (
          <ListItem paddingX={sidebarSpacing} fontSize="16px" key={item.name}>
            <LinkBox>
              <NextLink href={item.route} passHref>
                <LinkOverlay>
                  <ListIcon
                    as={item.icon}
                    color="white"
                    marginRight={sidebarSpacing}
                  />
                  {item.name}
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuTemplate;
