import React from "react";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
import data from "./data";
import "./style.scss";

const RecycledProduct = () => {
  return (
    <div className="recycled-product">
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="title">
          <span>Recycled</span> Products
        </div>
        <div className="products">
          {data?.map((item) => {
            return (
              <div key={item.id} className="product">
                <div className="product-img">
                  <img src={item.coverImg} />
                </div>
                <div className="content">
                  <p className="product-title">{item.title}</p>
                  <p className="price">Rs.{item.price} /-</p>
                  <div className="reviews">
                    <span className="star">&nbsp;{item.stats.rating}⭐ </span>
                    <span className="reviewcontent">
                      Reviews({item.stats.reviewCount})
                    </span>
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

export default RecycledProduct;
