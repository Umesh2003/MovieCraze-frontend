import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";

import data0 from "../Utils/bollywoodMovies.js";
import MovieGrid from "../Components/MovieGrid.jsx";
import Footer from "../Sections/Footer.jsx";
import {useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {useEffect} from "react";
import {displayToast} from "../Redux/toastSlice";
import {GET_ALL_MOVIES} from "../Constants/urls";
import Loading from "../Components/Loading";

function Bollywood() {

  const [page, setPage] = useState(1)
  const [hasMore,setHasMore]=useState(false);
  const [loading,setLoading]=useState(false);
  const [movies,setMovies]=useState([]);

  const pageNavigator = (x) => () =>
    setPage((p) => p + (x > 0 ? 1 : -1))


  useEffect(()=>{
    console.log("Hello World");
    setLoading(true);
    async function fetchData(){
      try {
        const res = await fetch(`${GET_ALL_MOVIES}/${"Bollywood"}/${page}`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log(data);

        if (res.status == 201) {
          setMovies(data.movies)
          setHasMore(data.hasMore)
        }

      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }
    fetchData();

  },[page])

  console.log(loading);

  if (loading) {
    return(
      <Loading mssg=""/>
    );
  }

  return (
    <>
      <NavBar />
      <Box
        color="white"
        bgImage="url('https://themehut.co/wp/movflx/wp-content/uploads/2022/08/tr_movies_bg.jpg')"
        py={24}
        px={8}
      >
        {movies && 
        <MovieGrid movies={movies} />
        }
        {pageNavigator  && (
          <Center w='full' py={5}>
              <Button
                w={10}
                px={0}
                disabled={page === 1}
                onClick={pageNavigator(-1)}
              >
                <ChevronLeftIcon h={6} w={6} />
              </Button>
            <Box>
              <Text  pt="1rem" px={3}>{page}</Text>
            </Box>
              <Button
                w={10}
                px={0}
                disabled={!hasMore}
                bgColor='green2'
                onClick={hasMore ? pageNavigator(1) : () => {}}
              >
                <ChevronRightIcon h={6} w={6} />
              </Button>
          </Center>
        )}
      </Box>
      <Footer />
    </>
  );
}

export default Bollywood;
