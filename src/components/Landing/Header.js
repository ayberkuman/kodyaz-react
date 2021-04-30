import "./style.scss";
import React from "react";
import Button from "./Button";
import Button2 from "./Button2";
import { Link } from "react-router-dom";

const Header = () => {
  const logo = "( ) => kodla";

  return (
    <div className="headerWrapper">
      <Link to={{ pathname: "/Catalogue" }} className="myLink">
        Katalog
      </Link>
      <Link to={{ pathname: "/" }}>
        <h1>{logo}</h1>
      </Link>
      <div className="buttonWrapper">
        <Button name={"Gİrİş Yap"} />
        <div className="kayıt">
          <Button2 name={"Kayıt Ol"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
