/** @format */

import navMenu from "../data/sidebar-nav-items";
import MenuTemplate from "./MenuTemplate";

const NavSidebar = () => {
  return <MenuTemplate menuItems={navMenu} />;
};

export default NavSidebar;
