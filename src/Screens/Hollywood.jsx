import { Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";

import data1 from "../Utils/hollywoodMovies.js";
import MovieGrid from "../Components/MovieGrid.jsx";
import Footer from "../Sections/Footer.jsx";

function Hollywood() {
  const hollywoodMovies = data1.slice(0, 4);
  return (
    <>
      <NavBar />
      <Box
        color="white"
        bgImage="url('https://themehut.co/wp/movflx/wp-content/uploads/2022/08/tr_movies_bg.jpg')"
        py={24}
        px={8}
      >
        <MovieGrid movies={hollywoodMovies} />
      </Box>
      <Footer />
    </>
  );
}

export default Hollywood;
