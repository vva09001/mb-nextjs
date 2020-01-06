import React from "react";

const NewItems = ({ data }) => {
  return (
    <div className="item mb-3">
      <div className="item-img">
        <img
          src={
            data.base_image === null
              ? `https://th2dev.mangoads.com.vn/themes/storefront/public/images/image.svg?v=5e12e47624638`
              : data.base_image
          }
          alt={data.title}
        />
      </div>

      <div className="item-content ml-3">
        <p>{data.title}</p>
        <p>{data.shortDescription}</p>
      </div>
      <hr />
    </div>
  );
};

export default NewItems;
