import React from 'react';
import firstsvg from "./firstsvg.svg";
import secondsvg from "./secondsvg.svg";
import thirdsvg from "./thirdsvg.svg";
import fourthsvg from "./fourthsvg.svg";
import arrow from "./ok 3.svg";

const LandingBottom = () => {
  return (
    <div className="bottomWrapper" >
      <div className="step1">
        <div className="circle1">1</div>
        <div className="svg1">
          <img src={firstsvg}/>
        </div>
        <div className="write1">
          <h3>Ne öğrenmek istediğini seç</h3>
          <h6>Web geliştirmeden data analizine, istediğin 
            dersimizi seç ve başla.</h6>
        </div>
      </div>
      <img className="arrows" src={arrow}/>
      <div className="step2">
        <div className="circle2">2</div>
        <div className="svg2">
        <img src={secondsvg}/>
        </div>
        <div className="write2">
          <h3>Yazarak öğren</h3>
          <h6>İzleyerek değil gerçek, çalışan kodlar yazarak
          öğren.</h6>
        </div>
      </div>
      <img className="arrows" src={arrow}/>
      <div className="step3">
        <div className="circle3">3</div>
        <div className="svg3">
        <img src={thirdsvg}/>
        </div>
        <div className="write3">
          <h3>Projelerle geliş</h3>
          <h6>Öğrendiklerini gerçek hayattan projelerle test 
          et, pratiğe dök ve geliştir.</h6>
        </div>
      </div>
      <img className="arrows" src={arrow}/>
      <div className="step4">
        <div className="circle4">4</div>
        <div className="svg4">
        <img src={fourthsvg}/>
        </div>
        <div className="write4">
          <h3>Hayalindeki işe gir</h3>
          <h6>Yazılım kariyerine başlamak için öğrenmen 
          gereken her şey burada.</h6>
        </div>
      </div>
    </div>
  )
}

export default LandingBottom
