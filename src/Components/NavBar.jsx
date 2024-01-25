/* eslint-disable react/prop-types */
import "../App.css";

import { Box, Flex, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import Logo from "../ui/Logo";
import { Link, NavLink } from "react-router-dom";

const Links = ["bollywood", "hollywood", "favourites", "contact"];

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        color={"whiteAlpha.900"}
        px={14}
        py={6}
        position={"absolute"}
        zIndex={10}
        width={"100%"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={2} alignItems={"center"}>
            {/* Logo */}
            <Logo />

            {/* Navlinks */}
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              fontWeight={600}
              textTransform={"uppercase"}
            >
              {Links.map((link) => (
                <NavLink className="nav-link" to={link} key={link}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          {/* Button login */}
          <HStack cursor={"pointer"} minW={0}>
            <Link to="authentication/signin">
              <button className="btn-border">SIGN IN</button>
            </Link>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
