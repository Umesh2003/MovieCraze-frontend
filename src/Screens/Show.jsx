import { Box, Flex, Image, Text, Divider, Center } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import { themeConfig } from "../Utils/themeConfig";
import MovieDetail from "../Sections/MovieDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Show() {
  const customFontStyle = {
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <Box
      color="white"
      bgImage={themeConfig.bgGradient}
      fontStyle={customFontStyle}
    >
      <NavBar />
      <Flex
        flexDirection="row"
        px={16}
        paddingTop={36}
        paddingBottom={12}
        gap={8}
      >
        {/* Movie image */}
        <Image
          src="https://m.media-amazon.com/images/M/MV5BMWU4ZjNlNTQtOGE2MS00NDI0LWFlYjMtMmY3ZWVkMjJkNGRmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_FMjpg_UX831_.jpg"
          alt="MovieImage"
          boxSize="28%"
        />

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
            Uri: The Surgical Strike
          </Text>

          <MovieDetail movieType="Action, Comedy" year={2019} duration={160} />
          <br />
          <Text lineHeight={1.8} color={themeConfig.smallTextColor}>
            Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
            tempor.There are many variations of passages of lorem Ipsum
            available, but the majority have suffered alteration in some
            injected humor.
          </Text>
          <br />
          <button className="btn-border">
            <Flex
              flexDirection="row"
              gap={2}
              justifyContent="center"
              alignItems="center"
            >
              <FontAwesomeIcon icon={faHeart} />
              <span>ADD TO FAVOURITES</span>
            </Flex>
          </button>
        </Box>

        <Center height={450}>
          <Divider orientation="vertical"></Divider>
        </Center>

        <Box py={14}>
          <Flex gap={2}>
            <Text fontWeight={500}>Director</Text>
            <Text color={themeConfig.iconstextColor}>Aditya Dhar</Text>
          </Flex>

          <Divider></Divider>
          <Flex gap={2}>
            <Text fontWeight={500}>Writer</Text>
            <Text color={themeConfig.iconstextColor}>Aditya Dhar</Text>
          </Flex>

          <Divider></Divider>
          <Flex gap={2}>
            <Text fontWeight={500}>Stars</Text>
            <Text color={themeConfig.iconstextColor}>
              Vicky Kaushal .Paresh Rawal .Mohit Raina
            </Text>
          </Flex>

          <Divider></Divider>
          <Flex gap={2}>
            <Text fontWeight={500}>Genre</Text>
            <Text color={themeConfig.iconstextColor}>Action, Adventure</Text>
          </Flex>

          <Divider></Divider>
          <Flex gap={2}>
            <Text fontWeight={500}>Release Date</Text>
            <Text color={themeConfig.iconstextColor}>May 1, 2019</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Show;
