import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import Front from "../../different/front";

import Collage from "../../different/collagecards";

const FirstPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Front />
      <img
        src="/src/assets/Service.png"
        className="justify-center py-20 px-20"
      />
      <Collage />

      <div className="justify-center px-60 py-20 ">
        <img src="/src/assets/Frame.png" className="" />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default FirstPage;
