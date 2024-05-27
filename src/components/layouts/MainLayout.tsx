import React from "react";
import ContactUs from "../ui/features/ContactUs/ContactUs";
import AboutUs from "../ui/features/AboutUs/AboutUs";
import Header from "../ui/features/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header/>
      <ContactUs />
      <AboutUs/>
    </>
  );
};

export default MainLayout;
