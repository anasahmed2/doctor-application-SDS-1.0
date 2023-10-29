import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import Home from "../../screens/Home";
import Porfile from "../../screens/Profile";
  

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Porfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;