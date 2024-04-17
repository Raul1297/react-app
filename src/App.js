import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/login/Login";
import UserProfileContextProvider from "./contexts/UserProfileContextProvider";
import Crazy from "./components/Crazy/Crazy";
import Random from "./components/Random/Random";
import Funny from "./components/Funny/Funny";

function App() {
  return (
    <UserProfileContextProvider>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/crazy" element={<Crazy />} />
        <Route path="/random" element={<Random />} />
        <Route path="/funny" element={<Funny />} />
      </Routes>
    </UserProfileContextProvider>
  );
}

export default App;
