/* eslint-disable react/prop-types */
import { Grid, GridItem } from "@chakra-ui/react";
import MovieDetails from "./MovieDetails";

/* eslint-disable no-unused-vars */
function MovieGrid({ movies, type }) {
  console.log(movies[0]);
  return (
    <Grid
      maxWidth={{ base: "100%", md: "1200px" }}
      mx="auto"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      mt={4}
    >
      {movies &&
        movies.map((movie) => (
          <GridItem key={movie.id} colSpan={1}>
            <MovieDetails movie={movie} type={type} />
          </GridItem>
        ))}
    </Grid>
  );
}

export default MovieGrid;
