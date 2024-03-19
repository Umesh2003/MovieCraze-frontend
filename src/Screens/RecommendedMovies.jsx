import { Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import Footer from "../Sections/Footer";
import Heading from "../Components/Heading";
import MovieGrid from "../Components/MovieGrid";
import data0 from "../Utils/bollywoodMovies";

function RecommendedMovies() {
  const movies = data0;
  return (
    <>
      <NavBar />
      <Box
        color="white"
        bgImage="url('https://themehut.co/wp/movflx/wp-content/uploads/2022/08/tr_movies_bg.jpg')"
        py={28}
        px={8}
      >
        <Heading heading={"Recommended by MovieCraze"} pb={4} />
        <br />
        <MovieGrid movies={movies} />
      </Box>
      <Footer />
    </>
  );
}

export default RecommendedMovies;
