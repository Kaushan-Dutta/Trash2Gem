import React from "react";
import ContentWrapper from "../../components/contentwrapper/ContentWrapper";
import data from "./data";
import Searchbar from "../../components/searchBar/Searchbar";
import "./style.scss";

const Communities = () => {
  return (
    <div className="Communities">
      <ContentWrapper>
        <div className="comm-items">
          <Searchbar element={"communities"}/>
          {/*<h1 className="commPage-title">Communities</h1>*/}
          {data?.map((item) => {
            return (
              <div key={item.id} className="comm-item">
                <div className="comm-img">
                  <img src={item.coverImg} alt="" />
                </div>
                <div className="contents">
                  <div className="title">{item.title}</div>
                  <div className="subtitle">{item.description}</div>
                  <div className="works">
                    {item.works.map((mat,index)=>{
                      return(
                        <span key={index} className="material">{mat}</span>
                      )
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Communities;