import { AddIcon, CheckIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ReviewDrawer from "./ReviewDrawer";

/* eslint-disable react/prop-types */
function MovieDetails({ movie, type = "" }) {
  return (
    <Box borderRadius="3px" overflow="hidden" bg="transparent">
      <Link to={`/show/${movie.movie_id}`}>
        <Box position="relative" overflow="hidden" borderRadius={2}>
          <Image
            src={movie.Poster_Link}
            alt={movie.Series_Title}
            mb={2}
            width="100%"
            height="100%"
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
        </Box>
      </Link>

      <Box>
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
      </Box>
    </Box>
  );
}

export default MovieDetails;
