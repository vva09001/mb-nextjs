import React from "react";
import { useRouter } from "next/router";

function NewItems({ data }) {
  const router = useRouter();
  return (
    <div
      className="item mb-3"
      onClick={() => router.push("/news/[slug]", `/news/${data.url}`)}
    >
      <div className="item-img">
        <img
          src={
            data.base_image === null
              ? `https://th2dev.mangoads.com.vn/themes/storefront/public/images/image.svg?v=5e12e47624638`
              : data.base_image
          }
          alt={data.title}
          onClick={() => router.push("/news/[slug]", `/news/${data.url}`)}
        />
      </div>

      <div className="item-content ml-3">
        <p onClick={() => router.push("/news/[slug]", `/news/${data.url}`)}>
          {data.title}
        </p>
        <p>{data.shortDescription}</p>
      </div>
    </div>
  );
}

export default NewItems;
