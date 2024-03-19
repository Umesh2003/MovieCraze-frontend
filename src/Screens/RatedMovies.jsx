/* eslint-disable no-unused-vars */
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { themeConfig } from "../Utils/themeConfig";
import NavBar from "../Components/NavBar";
import Footer from "../Sections/Footer";
import data0 from "../Utils/bollywoodMovies";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Heading from "../Components/Heading";

function RatedMovies() {
  const customFontStyle = {
    fontFamily: "Poppins, sans-serif",
  };

  const testMovies = data0.slice(0, 3);
  console.log(testMovies);
  let sr = 0;
  return (
    <Box
      color="white"
      bgImage={themeConfig.bgImage2}
      fontStyle={customFontStyle}
    >
      <NavBar />

      <Flex
        gap={4}
        flexDirection="column"
        paddingTop={32}
        pb={2}
        px={12}
        margin="0 auto"
        mb={16}
      >
        <Heading heading={"Your Ratings"} pb={4} />

        {testMovies.map((movie) => (
          <Flex
            bgColor={themeConfig.bgDark}
            key={movie.id}
            borderRadius={4}
            p={4}
            gap={4}
          >
            <Image src={movie.cover} w="15%" height="100%" />
            <Flex flexDirection="column">
              <Flex gap={2}>
                <Text fontSize="lg">
                  {++sr}
                  {". "}
                </Text>
                <Link to={`/show/${movie.id}`}>
                  <Text fontSize="lg" fontWeight="medium" color="blue.600">
                    {movie.title}
                  </Text>
                </Link>
                <Text>({movie.year})</Text>
              </Flex>

              <Flex gap={2} opacity={0.6} fontSize="sm">
                <Text borderRight="1px solid" pr={2}>
                  {movie.runtime}
                </Text>

                <Text>{movie.genre}</Text>
              </Flex>

              <Text>
                {
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginRight: "5px" }}
                    color={themeConfig.iconstextColor}
                  />
                }
                {movie.rating}
              </Text>

              <Text opacity={0.8}>Rated on {movie.ratedOn}</Text>
              <Text opacity={0.9}>{movie.description}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>

      <Footer />
    </Box>
  );
}

export default RatedMovies;
