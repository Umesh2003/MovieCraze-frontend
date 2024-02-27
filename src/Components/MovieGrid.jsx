/* eslint-disable react/prop-types */
import { Grid, GridItem } from "@chakra-ui/react";
import MovieDetails from "./MovieDetails";

/* eslint-disable no-unused-vars */
function MovieGrid({ movies, type }) {
  console.log(movies[0])
  return (
    <Grid maxWidth={{ base: "100%", md: "1200px" }} mx="auto" templateColumns="repeat(4, 1fr)" gap={6} mt={6} pl={4} pr={7}>
      {movies && movies.map((movie) => (
        <GridItem key={movie.id} colSpan={1} marginBottom={12}>
          <MovieDetails movie={movie} type={type} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default MovieGrid;
