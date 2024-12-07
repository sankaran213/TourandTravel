import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import Collage from "../../different/collagecards";
import Ree from "../../different/blog";
import Algo from "../../different/algoaction";

const Action = () => {
  return (
    <React.Fragment>
      <Header />

      <img src="/src/assets/action.png" />
      <Algo />
      <Footer />
    </React.Fragment>
  );
};

export default Action;
