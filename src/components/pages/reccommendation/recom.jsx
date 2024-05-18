import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import Collage from "../../different/collagecards";
import Preplanned from "../../different/preplanned";
import Gallery from "../../different/gallary";

const Recomendation = () => {
  return (
    <React.Fragment>
      <Header />
      <img src="/src/assets/rcd.png" />
      <Preplanned />

      <Collage />

      <Gallery />
      <Footer />
    </React.Fragment>
  );
};

export default Recomendation;
