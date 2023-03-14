import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Single from "../pages/Single";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="/post/:id" element={<Single />} />
      <Route path="*" element={<Posts />} />
    </Routes>
  );
}
