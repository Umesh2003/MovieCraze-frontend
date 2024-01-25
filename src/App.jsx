import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import Bollywood from "./Screens/Bollywood";
import Hollywood from "./Screens/Hollywood";
import Favourites from "./Screens/Favourites";
import Contact from "./Screens/Contact";

import SignIn from "./Screens/SignIn";
import Authentication from "./Screens/Authentication";
import SignUp from "./Screens/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="bollywood" element={<Bollywood />} />
        <Route path="hollywood" element={<Hollywood />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="contact" element={<Contact />} />
        <Route path="authentication" element={<Authentication />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
