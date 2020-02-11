import React from "react";

function Block_Image_Left(params) {
  return (
    <div id="2" className="block_imege_left mb-5">
      <h2 className="title mb-5">Điều kiện vay vốn</h2>
      <div className="row">
        <div className="col-sm-5">
          <ul>
            <li>
              Khách hàng có đủ năng lực pháp luật dân sự và năng lực hành vi dân
              sự.
            </li>
            <li>
              Khách hàng có độ tuổi từ đủ 18 tuổi đến không quá 70 tuổi tại thời
              điểm kết thúc khoản vay.
            </li>
            <li>
              Khách hàng có hộ khẩu/sổ tạm trú (KT3) tại Tỉnh/Thành phố nơi MB
              có trụ sở.
            </li>
            <li>
              Khách hàng có khả năng tài chính đảm bảo nguồn trả nợ cho khoản
              vay.
            </li>
            <li>
              Khách hàng đáp ứng các quy định và điều kiện cho vay của MB.
            </li>
          </ul>
          <button>Đăng ký ngay</button>
        </div>
        <div className="col-sm-7">
          <img src="https://mbbank.com.vn/resources/files/NhaDauTu/thong-bao/thong-bao---471x340-logo-mbbank.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Block_Image_Left;
