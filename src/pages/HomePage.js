import React from "react";
import Hero from "../component/Hero";
import FeturedProducts from "../component/FeturedProducts";
import Services from "../component/Services";
import Concat from "../component/Concat";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeturedProducts />
      <Services />
      <Concat />
    </main>
  );
};

export default HomePage;
