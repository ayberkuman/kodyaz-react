import React from "react";
import Button2 from "./Button2";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="mottoWrapper">
        <h1>Kodlama yazarak öğrenilir.</h1>
        <h4>
          Sıfırdan başla, gerçek hayattan örneklerle, izleyerek değil yaparak
          öğren.
        </h4>
      </div>
      <Link to={{ pathname: "/Catalogue" }} className="myLink">
        Hemen Ücretsiz Başla
      </Link>
    </div>
  );
};

export default Hero;
