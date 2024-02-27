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
import { useSelector,useDispatch } from "react-redux";
import { selectUser } from "../Redux/usersSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { themeConfig } from "../Utils/themeConfig";
import Dropdown from "react-bootstrap/Dropdown";
import {useDebounce} from "../../hooks/useDebounce";
import {useEffect, useState} from "react";
import {getSearchResults, selectSuggestions,clearSearchResults} from "../Redux/movieSlice";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //Here is the user object use this to extract the name and all
  const user = useSelector(selectUser);
  const [search,setSearch]=useState("");
  const debouncedSearch=useDebounce(search)
  
  const movieSuggestions=useSelector(selectSuggestions);

  const dispatch=useDispatch();
  console.log(user);
  console.log(debouncedSearch);
  console.log(movieSuggestions);


  useEffect(()=>{
    if (debouncedSearch) {
      dispatch(getSearchResults(debouncedSearch))
    }else{
      dispatch(clearSearchResults())
    }
  },[debouncedSearch]);


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
                onChange={(e)=>{setSearch(e.target.value)}}
              />
              <InputRightElement width="4.5rem">
                <Button variant="unstyled">
                  <SearchIcon color={themeConfig.iconstextColor} boxSize={6} />
                </Button>
              </InputRightElement>
            </InputGroup>
            {movieSuggestions && movieSuggestions.length > 0 && search!=="" && (
              <Box
                position="absolute"
                zIndex={99}
                top="66px"
                right="516px"
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
                        <Box boxSize="50px" borderRadius="md" overflow="hidden" mr="2">
                          <img
                            src={movie.Poster_Link}
                            alt={movie.Series_Title}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
