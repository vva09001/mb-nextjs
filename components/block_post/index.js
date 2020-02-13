import React from "react";
import { map } from "lodash";

const fectData = [
  {
    id: 1,
    date: "01/01/2019",
    image:
      "https://mbbank.com.vn/resources/files/NhaDauTu/thong-bao/thong-bao---471x340-logo-mbbank.jpg",
    title:
      " Thông báo danh sách khách hàng trúng thưởng CT vay mua nhà Nhận nay SH"
  },
  {
    id: 2,
    date: "01/01/2019",
    image:
      "https://mbbank.com.vn/resources/files/NhaDauTu/thong-bao/thong-bao---471x340-logo-mbbank.jpg",
    title: " Ưu đãi lãi suất khi vay mua nhà trong tháng "
  },
  {
    id: 3,
    date: "01/01/2019",
    image:
      "https://mbbank.com.vn/resources/files/NhaDauTu/thong-bao/thong-bao---471x340-logo-mbbank.jpg",
    title: "Tri ân khách hàng, tặng ngay 1 chỉ vàng khi vay mua nhà"
  }
];

function BlockPost() {
  return (
    <div id="3" className="post_block mb-5">
      <div className="title">
        <h2>Ưu đãi</h2>
      </div>
      <div className="row">
        {map(fectData, data => (
          <div className="col-sm-4" key={data.id}>
            <div className="post_content">
              <div>
                <img src={data.image} alt="icon" />
              </div>
              <div className="content">
                <div className="date mt-4">
                  <p>{data.date}</p>
                </div>
                <p className="title">{data.title}</p>
                <p className="show">Xem thêm</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btn">
        <button>Xem tất cả</button>
      </div>
    </div>
  );
}

export default BlockPost;
