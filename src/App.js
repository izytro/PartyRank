import { Routes, Route, BrowserRouter, Router } from "react-router-dom";

import Home from "./Home";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Profile from "./views/Profile";
import Parties from "./views/Parties";
import CreateParty from "./views/CreateParty";
import Proto from "./views/Proto";
import Leaderboard from "./views/Leaderboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/parties" element={<Parties />} />
      <Route path="/createParty" element={<CreateParty />} />
      <Route path="/test" element={<Proto />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />{" "} */}
      {/* Add the Route for Profile */}
    </Routes>
  );
}

export default App;
