/* eslint-disable no-unused-vars */
import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import data0 from "../Utils/bollywoodMovies.js";

import Footer from "../Sections/Footer.jsx";
import MovieGrid from "../Components/MovieGrid";

function Favourites() {
  const customFontStyle = {
    fontFamily: "Poppins, sans-serif",
  };

  const bollywoodMovies = data0.slice(0, 2);
  return (
    <>
      <NavBar />
      <Box
        color="white"
        bgImage="url('https://themehut.co/wp/movflx/wp-content/uploads/2022/08/tr_movies_bg.jpg')"
        fontStyle={customFontStyle}
        py={24}
        px={20}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="4xl" fontWeight="bold">
            Your Watchlist
          </Text>

          <Flex gap={2}>
            <Text fontSize="lg">Sort by : </Text>
            <Select w={200} size="sm" variant="outline">
              <option>Number of ratings</option>
            </Select>
          </Flex>

          <Button variant="solid" colorScheme="red" size="sm">
            Clear all
          </Button>
        </Flex>

        <MovieGrid movies={bollywoodMovies} type="fav" />
      </Box>
      <Footer />
    </>
  );
}

export default Favourites;
