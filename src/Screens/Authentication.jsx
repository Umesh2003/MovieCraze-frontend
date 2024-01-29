/* eslint-disable no-unused-vars */
import { Box } from "@chakra-ui/react";
import AuthNav from "../ui/AuthNav";

function AuthPageContainer({children}) {
  return (
    <Box
      height="100vh"
      bgImage="radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%);"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={4}
    >
      <Box
        width="lg"
        backgroundColor="rgba(0,0,0,0.13)"
        backdropBlur="5xl"
        borderRadius="20px"
        shadow="dark-lg"
        px={12}
        py={6}
      >
        <AuthNav />
        {children}
      </Box>
    </Box>
  );
}

export default AuthPageContainer;
