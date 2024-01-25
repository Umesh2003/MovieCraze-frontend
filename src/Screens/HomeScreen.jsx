import { Box } from "@chakra-ui/react";
import Hero from "../Sections/Hero";
import Movies from "../Components/Movies";
import Footer from "../Sections/Footer";
import Show from "./Show";
function HomeScreen() {
  return (
    <Box>
      <Hero />
      <Movies />
      <Show />
      <Footer />
    </Box>
  );
}

export default HomeScreen;
