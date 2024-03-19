import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import Bollywood from "./Screens/Bollywood";
import Hollywood from "./Screens/Hollywood";
import Favourites from "./Screens/Favourites";
import Contact from "./Screens/Contact";

import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/Signup";
import Show from "./Screens/Show.jsx";
import Toast from "./Components/Toast";
import RatedMovies from "./Screens/RatedMovies.jsx";
import RecommendedMovies from "./Screens/RecommendedMovies.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="bollywood" element={<Bollywood />} />
        <Route path="hollywood" element={<Hollywood />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="rated-movies" element={<RatedMovies />} />
        <Route path="recommended" element={<RecommendedMovies />} />
        <Route path="show/:movie_id" element={<Show />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Toast />
    </BrowserRouter>
  );
}

export default App;
