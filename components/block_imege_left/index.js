import React from "react";

function Block_Image_Left() {
  return (
    <div id="2" className="block_imege_left mb-5">
      <h2 className="title mb-5">Điều kiện vay vốn</h2>
      <div className="row">
        <div className="col-sm-7">
          <img src="https://mbbank.com.vn/resources/files/NhaDauTu/thong-bao/thong-bao---471x340-logo-mbbank.jpg" />
        </div>
        <div className="col-sm-5">
          <ul>
            <li>Đơn đề nghị vay vốn kiêm cam kết trả nợ (theo mẫu của MB)</li>
            <li>
              CMND/Hộ chiếu, Hộ khẩu/Sổ tạm trú (KT3), Đăng ký kết hôn/Giấy xác
              nhận tình trạng hôn nhân
            </li>
            <li>
              Các giấy tờ liên quan đến việc mua, xây dựng và sửa chữa nhà đất
            </li>
            <li>Giấy tờ chứng minh nguồn trả nợ</li>
            <li>Giấy tờ liên quan đến tài sản bảo đảm.</li>
          </ul>
          <button>Đăng ký ngay</button>
        </div>
      </div>
    </div>
  );
}

export default Block_Image_Left;
