import React from "react";
import "./style.scss";
import waste_recycle from "/src/assets/waste_recycle.svg";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";

const Topbanner = () => {
  return (
    <>
      <ContentWrapper>
        <div className="topBanner">
          <div className="topBannerContent">
            <p className="title">Reduce Reuse <span>Recycle.</span></p>
            <span className="subTitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <button className="btn green">Get Started</button>
          </div>
          <div className="side-img">
            <img src={waste_recycle} />
          </div>
        </div>
        {/*<div style={{height: 1000}}>
    </div>*/}
      </ContentWrapper>
      <div className="opacity-layer"></div>
    </>
  );
};

export default Topbanner;
