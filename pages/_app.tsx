/** @format */

import { ChakraProvider } from "@chakra-ui/react";
import "reset-css";
import { theme } from "../assets/variables";
import PlayerLayout from "../components/PlayerLayout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <PlayerLayout>
          <Component {...pageProps} />
        </PlayerLayout>
      )}
    </ChakraProvider>
  );
};

export default MyApp;
