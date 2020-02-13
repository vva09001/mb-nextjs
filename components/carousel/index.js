import React from "react";

function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="3"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.mbbank.com.vn/resources/files/KHCN/Slide/Baner-moi/banner-web-1920x540-mua-sam-online-cùng-mb-jcb.jpg"
            className="d-block w-100"
            alt="...1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.mbbank.com.vn/resources/files/KHCN/Slide/Baner-moi/chaoxuancanhty-pop-up-03-1920x540-app-mbbank.jpg"
            className="d-block w-100"
            alt="...2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.mbbank.com.vn/resources/files/KHCN/Slide/Baner-moi/banner-web-1920x540-mb-cho-vay-khcn-mua-oto-vinfast.jpg"
            className="d-block w-100"
            alt="...3"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
