import React from "react";

function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="3"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://www.mbbank.com.vn/resources/files/KHCN/Slide/Baner-moi/banner-web-1920x540-mua-sam-online-cùng-mb-jcb.jpg"
            class="d-block w-100"
            alt="...1"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://www.mbbank.com.vn/resources/files/KHCN/Slide/Baner-moi/chaoxuancanhty-pop-up-03-1920x540-app-mbbank.jpg"
            class="d-block w-100"
            alt="...2"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://www.mbbank.com.vn/resources/files/KHCN/Slide/Baner-moi/banner-web-1920x540-mb-cho-vay-khcn-mua-oto-vinfast.jpg"
            class="d-block w-100"
            alt="...3"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
