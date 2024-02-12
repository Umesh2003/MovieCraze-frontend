import { Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";

import data0 from "../Utils/bollywoodMovies.js";
import MovieGrid from "../Components/MovieGrid.jsx";
import Footer from "../Sections/Footer.jsx";

function Bollywood() {
  const bollywoodMovies = data0.slice(0, 8);
  return (
    <>
      <NavBar />
      <Box
        color="white"
        bgImage="url('https://themehut.co/wp/movflx/wp-content/uploads/2022/08/tr_movies_bg.jpg')"
        py={24}
        px={8}
      >
        <MovieGrid movies={bollywoodMovies} />
      </Box>
      <Footer />
    </>
  );
}

export default Bollywood;
