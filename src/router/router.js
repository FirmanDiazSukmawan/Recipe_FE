import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../view/Home/home";
import Login from "../view/Login/login";
import Register from "../view/Register/register";
import DetailVideo from "../view/detailVideo/detailVideo";
import AddRecipe from "../view/addRecipe/addRecipe";
import Profile from "../view/profile/profile";
import DetailRecipe from "../view/detailRecipe/detailRecipe";
import ScrollToTop from "../Component/scroll/Scroll";
import Search from "../Component/search/search";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="detailRecipe/:recipes_id" element={<DetailRecipe />} />
          <Route path="detailVideo/:recipes_id" element={<DetailVideo />} />
          <Route path="addRecipe" element={<AddRecipe />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
