/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "../App.css";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";

import Logo from "../ui/Logo";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/usersSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { themeConfig } from "../Utils/themeConfig";
import Dropdown from "react-bootstrap/Dropdown";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <>
      <Flex
        color={"whiteAlpha.900"}
        position="fixed"
        bgColor="#1a202c"
        zIndex={10}
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={10}
        py={4}
        width={"100%"}
        backdropBlur={8}
        boxShadow="lg"
      >
        <Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Link to="/">
            <Logo />
          </Link>

          <Flex gap={4} alignItems="center" justifyContent="center">
            {/* {Links.map((link) => (
                <NavLink className="nav-link" to={link} key={link}>
                  {link}
                </NavLink>
              ))} */}

            {/* <Flex justifyContent="center" alignItems="center" gap={1}>
              <HamburgerIcon /> <span>Menu</span>
            </Flex> */}

            <Dropdown data-bs-theme="dark">
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                Movie
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  {" "}
                  <Link to="/bollywood">Bollywood</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to="/hollywood">Hollywood</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* searchBar */}
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                placeholder="Search movies "
                focusBorderColor="blackAlpha.300"
                border="none"
                bgColor="whiteAlpha.100"
                width="550px"
              />
              <InputRightElement width="4.5rem">
                <Button variant="unstyled" h="1.75rem" size="sm">
                  <SearchIcon color={themeConfig.iconstextColor} boxSize={6} />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>

        <Link to="/favourites">
          <Flex gap={2} alignItems="center" fontWeight="bold">
            <FontAwesomeIcon icon={faBookmark} style={{ color: "#FFD43B" }} />
            Watchlist
          </Flex>
        </Link>

        <Link to="/signin">
          <Button
            colorScheme="yellow"
            fontWeight="bold"
            size="md"
            rightIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />}
          >
            Sign In
          </Button>
        </Link>
      </Flex>
    </>
  );
}
