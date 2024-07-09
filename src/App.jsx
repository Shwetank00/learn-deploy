import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";

const routes = (
  <Router Basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path="/learn-deploy" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
);

export const App = () => {
  return <div>{routes}</div>;
};

export default App;
