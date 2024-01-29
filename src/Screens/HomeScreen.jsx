import { Box } from "@chakra-ui/react";
import Hero from "../Sections/Hero";
import Movies from "../Components/Movies";
import Footer from "../Sections/Footer";
function HomeScreen() {
  return (
    <Box>
      <Hero />
      <Movies />
      <Footer />
    </Box>
  );
}

export default HomeScreen;
