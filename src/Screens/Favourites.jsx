/* eslint-disable no-unused-vars */
import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import data0 from "../Utils/bollywoodMovies.js";

import Footer from "../Sections/Footer.jsx";
import MovieGrid from "../Components/MovieGrid";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFavourites, selectFavs, selectLoading} from "../Redux/movieSlice";
import {selectUser} from "../Redux/usersSlice";
import {useNavigate} from "react-router-dom";
import {displayToast} from "../Redux/toastSlice";
import Loading from "../Components/Loading";

function Favourites() {
  const customFontStyle = {
    fontFamily: "Poppins, sans-serif",
  };
  const dispatch=useDispatch();
  const favs=useSelector(selectFavs);
  const loading=useSelector(selectLoading);
  const user=useSelector(selectUser);
  const navigate=useNavigate();


  useEffect(()=>{
    console.log(user)
    if (!user) {
      navigate("/signin");
      dispatch(displayToast("Please Login First"))
      return; 
    }
    dispatch(getFavourites(user.user_id));
  },[]);

  if (loading) {
    console.log("Hello World here laoind")
    return (
      <Loading mssg="Loading Favourites...."/>
    )
  }

  return (
    <>
      <NavBar />
      <Box
        color="white"
        bgImage="url('https://themehut.co/wp/movflx/wp-content/uploads/2022/08/tr_movies_bg.jpg')"
        fontStyle={customFontStyle}
        h={"full"}
      >
        <Box py="4rem"></Box>
        <MovieGrid movies={favs} type="fav" />
      </Box>
      <Footer />
    </>
  );
}

export default Favourites;
