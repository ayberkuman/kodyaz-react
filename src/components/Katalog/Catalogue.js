import "./style.scss";
import htmlSvg from "./htmlLogo.svg";
import { Link } from "react-router-dom";
import Button from "../Landing/Button";
import Button2 from "../Landing/Button";
import gsap, { Power2, TweenMax } from "gsap";
import { useRef, useEffect } from "react";

const MapThis = ({ animationEnter, mouseLeave }) => {
  return (
    <div
      onMouseEnter={animationEnter}
      onMouseLeave={mouseLeave}
      className="card"
    >
      <h1>HTML</h1>
      <img src={htmlSvg} alt="" />

      <div className="content">
        <h3>HTML</h3>
        <p>
          Web sayfalarını oluşturma aşamasında kullanılan standart bir metin
          işaret dili olan HTML,“Hyper Text Markup Language” olarak bilinir ve
          web sitelerinin iskeleti denilebilir.
        </p>
        <Button2 name={"Hemen Öğren"} />
      </div>
    </div>
  );
};

const Catalogue = () => {
  const animationMaker = () => {
    let contentAnim = document.querySelectorAll(".contentBx");
    gsap.to(contentAnim, {
      display: "flex",
      ease: Power2.easeOut,
      duration: 0.1,
      y: 30,
    });
  };
  const mouseLeave = () => {
    let contentAnim = document.querySelectorAll(".contentBx");
    gsap.to(contentAnim, {
      display: "none",
      duration: 0.1,
    });
  };

  return (
    <div className="catWrapper">
      <MapThis /*animationEnter={animationMaker} mouseLeave={mouseLeave}*/ />
      <MapThis /*animationEnter={animationMaker} mouseLeave={mouseLeave} */ />
      <MapThis /*animationEnter={animationMaker} mouseLeave={mouseLeave} */ />
      <MapThis /*animationEnter={animationMaker} mouseLeave={mouseLeave} */ />
      <MapThis /*animationEnter={animationMaker} mouseLeave={mouseLeave} */ />
      <MapThis /*animationEnter={animationMaker} mouseLeave={mouseLeave} */ />
      <MapThis /*animationEnter={animationMaker} mouseLeave={mouseLeave} */ />
      <MapThis /*animationEnter={animationMaker} mouseLeave={mouseLeave} */ />
    </div>
  );
};

export default Catalogue;
