/* eslint-disable no-unused-vars */
import { Box, Flex, Text } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";

import Footer from "../Sections/Footer.jsx";
import MovieGrid from "../Components/MovieGrid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavourites, selectFavs, selectLoading } from "../Redux/movieSlice";
import { selectUser } from "../Redux/usersSlice";
import { Link, useNavigate } from "react-router-dom";
import { displayToast } from "../Redux/toastSlice";
import Loading from "../Components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function Favourites() {
  const customFontStyle = {
    fontFamily: "Poppins, sans-serif",
  };
  const dispatch = useDispatch();
  const favs = useSelector(selectFavs);
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
      dispatch(displayToast("Please Login First"));
      return;
    }
    dispatch(getFavourites(user.user_id));
  }, []);

  if (loading) {
    console.log("Hello World here laoind");
    return <Loading mssg="Loading Favourites...." />;
  }

  return (
    <>
      <NavBar />
      <Box
        color="white"
        bgImage="url('https://themehut.co/wp/movflx/wp-content/uploads/2022/08/tr_movies_bg.jpg')"
        bgPosition="center"
        fontStyle={customFontStyle}
        height="100vh"
        py="10rem"
      >
        {favs.length < 0 ? (
          <MovieGrid movies={favs} type="fav" />
        ) : (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <FontAwesomeIcon opacity={0.2} icon={faPlusCircle} size="10x" />
            <Text fontSize="2xl" fontWeight="medium">
              Your Watchlist is empty
            </Text>
            <Text fontSize="lg" fontWeight="light">
              Add movies and shows to your Watchlist to keep track of what you
              want to watch.
            </Text>
            <Link>
              <Text color="blue" _hover={{ borderBottom: "2px solid blue" }}>
                Browse Popular Movies
              </Text>
            </Link>
          </Flex>
        )}
      </Box>
      <Footer />
    </>
  );
}

export default Favourites;
