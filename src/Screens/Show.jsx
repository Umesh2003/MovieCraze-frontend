/* eslint-disable no-unused-vars */
import {
  Box,
  Flex,
  Image,
  Text,
  Divider,
  Center,
  Button,
  useToast,
} from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import { themeConfig } from "../Utils/themeConfig";
import MovieDetail from "../Sections/MovieDetail";
import { useNavigate, useParams } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieById,
  selectMovie,
  selectLoading,
  addToFavourite,
} from "../Redux/movieSlice";
import Loading from "../Components/Loading";
import { selectUser } from "../Redux/usersSlice";
import { displayToast } from "../Redux/toastSlice";
import ReviewDetails from "../Components/ReviewDetails";
import { getReviews } from "../Redux/reviewSlice";
import Footer from "../Sections/Footer";

function Show() {
  const customFontStyle = {
    fontFamily: "Poppins, sans-serif",
  };
  const { movie_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movie = useSelector(selectMovie);
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getMovieById(movie_id));
    dispatch(getReviews(movie_id));
  }, [dispatch, movie_id]);

  function favHandler() {
    if (!user) {
      navigate("/signin");
      dispatch(displayToast("Please LogIn First"));
    }
    dispatch(addToFavourite(user.user_id, movie_id));
  }

  if (loading) {
    return <Loading mssg="Loading Movie Details...." />;
  }

  return (
    <Box
      color="white"
      bgImage={themeConfig.moviePagebg}
      fontStyle={customFontStyle}
    >
      <NavBar />
      {movie && (
        <Flex
          flexDirection="column"
          px={16}
          paddingTop={32}
          paddingBottom={12}
          gap={8}
        >
          <Flex gap={8}>
            <Image src={movie.Poster_Link} alt="MovieImage" boxSize="24%" />

            {/* Movie details */}

            <Box py={4} w="60%">
              <Text
                color={themeConfig.iconstextColor}
                fontSize="2xl"
                fontWeight={700}
                letterSpacing={1.2}
              >
                New Release
              </Text>
              <Text color="white" fontSize="5xl" fontWeight={700}>
                {movie.Series_Title}
              </Text>

              <MovieDetail
                movieType={movie.Genre.split("|").join(", ")}
                year={movie.Released_Year}
                duration={movie.Runtime}
              />
              <br />
              <Text lineHeight={1.8} color={themeConfig.smallTextColor}>
                {movie.Overview}
              </Text>
              <br />

              <Flex gap={4}>
                <Button
                  leftIcon={<AddIcon />}
                  onClick={favHandler}
                  colorScheme="yellow"
                >
                  Add to favourites
                </Button>
              </Flex>
            </Box>
          </Flex>

          <Box py={14}>
            <Flex gap={2}>
              <Text fontWeight={500}>Director:</Text>
              <Text color={themeConfig.iconstextColor}>{movie.Director}</Text>
            </Flex>

            <Divider />
            <Flex gap={2}>
              <Text fontWeight={500}>Stars:</Text>
              <Text color={themeConfig.iconstextColor}>
                {movie.Star_actors.split("|").join(", ")}
              </Text>
            </Flex>

            <Divider />
            <Flex gap={2}>
              <Text fontWeight={500}>Genre:</Text>
              <Text color={themeConfig.iconstextColor}>
                {movie.Genre.split("|").join(", ")}
              </Text>
            </Flex>

            <Divider />
            <Flex gap={2}>
              <Text fontWeight={500}>Release Date:</Text>
              <Text color={themeConfig.iconstextColor}>
                {movie.Released_Year}
              </Text>
            </Flex>
          </Box>
        </Flex>
      )}
      {movie && (
        <Box mt={2} mb={12} px={16}>
          <ReviewDetails movie_name={movie.Series_Title} movie_id={movie_id} />
        </Box>
      )}

      <Footer />
    </Box>
  );
}

export default Show;
