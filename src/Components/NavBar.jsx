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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

import Logo from "../ui/Logo";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../Redux/usersSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBookmark,
  faGear,
  faRightFromBracket,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { themeConfig } from "../Utils/themeConfig";
import Dropdown from "react-bootstrap/Dropdown";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useState } from "react";
import {
  getSearchResults,
  selectSuggestions,
  clearSearchResults,
} from "../Redux/movieSlice";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //Here is the user object use this to extract the name and all
  const user = useSelector(selectUser);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const movieSuggestions = useSelector(selectSuggestions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(getSearchResults(debouncedSearch));
    } else {
      dispatch(clearSearchResults());
    }
  }, [debouncedSearch]);

  return (
    <>
      <Flex
        color={"whiteAlpha.900"}
        position="fixed"
        bgColor="#1a202c"
        zIndex={10}
        alignItems={"center"}
        justifyContent={"space-around"}
        px={"1.4rem"}
        py={"1.4rem"}
        width={"100%"}
        backdropBlur={8}
        boxShadow="lg"
        top="0"
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
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button variant="unstyled">
                  <SearchIcon color={themeConfig.iconstextColor} boxSize={6} />
                </Button>
              </InputRightElement>
            </InputGroup>
            {movieSuggestions &&
              movieSuggestions.length > 0 &&
              search !== "" && (
                <Box
                  position="absolute"
                  zIndex={99}
                  top="66px"
                  right="330px"
                  width="550px"
                  maxHeight="200px"
                  overflowY="auto"
                  bgColor="#171D22"
                  boxShadow="md"
                  borderRadius="md"
                  py="2"
                >
                  {movieSuggestions.map((movie) => (
                    <Link key={movie.movie_id} to={`/show/${movie.movie_id}`}>
                      <Flex
                        key={movie.id}
                        alignItems="center"
                        p="2"
                        borderBottom="1px solid #E2E8F0"
                      >
                        <Box
                          boxSize="50px"
                          borderRadius="md"
                          overflow="hidden"
                          mr="2"
                        >
                          <img
                            src={movie.Poster_Link}
                            alt={movie.Series_Title}
                            style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </Box>
                        <Text fontSize="sm">{movie.Series_Title}</Text>
                      </Flex>
                    </Link>
                  ))}
                </Box>
              )}
          </Flex>
        </Flex>

        {user ? (
          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              <FontAwesomeIcon size="10px" icon={faUser} />
              <Text as="span" mx={2}>
                {user.userName.split(" ").at(0)}
              </Text>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faBookmark} />
                <Link to="/favourites">
                  <Text as="span" mx={4}>
                    Your watchlist
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faStar} />
                <Link to="/rated-movies">
                  <Text as="span" mx={4}>
                    Your ratings
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faGear} />
                <Text as="span" mx={4}>
                  Account settings
                </Text>
              </Dropdown.Item>
              <Dropdown.Item>
                {" "}
                <FontAwesomeIcon icon={faRightFromBracket} />
                <Text as="span" mx={4}>
                  Sign out
                </Text>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
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
        )}
      </Flex>
    </>
  );
}
