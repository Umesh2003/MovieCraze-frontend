/* eslint-disable no-unused-vars */
import { AddIcon, CheckIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ReviewDrawer from "./ReviewDrawer";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { themeConfig } from "../Utils/themeConfig";

/* eslint-disable react/prop-types */
function MovieDetails({ movie, type = "" }) {
  return (
    <Box borderRadius="3px" overflow="hidden" height={"100vh"}>
      <Link to={`/show/${movie.movie_id}`}>
        {/* <Box
          position="relative"
          overflow="hidden"
          borderRadius={2}
          height={"60%"}
        >
          <Image
            src={movie.Poster_Link}
            alt={movie.Series_Title}
            mb={2}
            width="100%"
            objectFit="cover"
            transition="0.3s all"
            _hover={{
              transform: `${type !== "fav" && "scale(1.1)"}`,
              cursor: "pointer",
            }}
          />

          <Box position="absolute" top={0} left={-1} className="ribbon">
            {type !== "fav" ? <AddIcon boxSize={4} /> : <CheckIcon />}
          </Box>
        </Box> */}

        <Card
          style={{
            height: "34rem",
            width: "14rem",
            color: "#fff",
            overflow: "hidden",
          }}
          bg="dark"
        >
          <Card.Img
            variant="top"
            src={movie.Poster_Link}
            style={{ height: "60%", transition: "all .3s" }}
            className="hover-img"
          />
          <Card.Body>
            <Flex flexDirection="column">
              <Flex justifyContent="space-between" mb={2}>
                <Text fontWeight="light">
                  <FontAwesomeIcon
                    icon={faStar}
                    color={themeConfig.iconstextColor}
                  />
                  <Text as="span" ml={2}>
                    {movie.Rating}
                  </Text>
                </Text>

                <Text color={themeConfig.iconstextColor}>
                  {movie.Released_Year}
                </Text>
              </Flex>
              <Text fontWeight="medium">{movie.Series_Title}</Text>
            </Flex>

            <Box position="absolute" top={0} left={-1} className="ribbon">
              {type !== "fav" ? <AddIcon boxSize={4} /> : <CheckIcon />}
            </Box>
          </Card.Body>

          <Card.Footer>
            <Button
              colorScheme="blue"
              width="100%"
              size="sm"
              variant="solid"
              leftIcon={<AddIcon />}
              mb={4}
            >
              Watchlist
            </Button>
          </Card.Footer>
        </Card>
      </Link>

      {/* <Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          fontSize="sm"
          py={4}
        >
          <Text fontWeight="800" color="white">
            {movie.Series_Title}
          </Text>
          <Text color="#e4d804">{movie.Released_Year}</Text>
        </Flex>

        {type !== "fav" ? (
          <Flex
            justifyContent="space-between"
            alignItems="center"
            fontSize="xs"
            color="#D2CFCF"
          >
            <Flex alignItems="center">
              <TimeIcon color="#e4d804" boxSize={3} mr={1} />
              {movie.Runtime}
            </Flex>
            <Flex alignItems="center">
              <StarIcon
                color="#e4d804"
                boxSize={3}
                paddingBottom={"2px"}
                mr={1}
              />
              {movie.Rating}
            </Flex>
          </Flex>
        ) : (
          <Flex
            justifyContent="space-between"
            alignItems="center"
            fontSize="xs"
            color="#D2CFCF"
          >
            <Flex alignItems="center">
              <StarIcon color="#e4d804" boxSize={3} mr={1} />
              {movie.Rating}
            </Flex>

            <ReviewDrawer size="xs" btnColor="gray" btnVarient="solid" />
          </Flex>
        )}
      </Box> */}
    </Box>
  );
}

export default MovieDetails;
