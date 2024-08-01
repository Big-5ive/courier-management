import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Container;
