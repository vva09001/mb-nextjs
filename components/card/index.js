import React from "react";

function Card() {
  return (
    <div id="0" className="row mb-4 card_introduce">
      <div className="col-sm-8">
        <div className="card_wapper">
          <div className="card_item">
            <h3 className="title">Giới thiệu</h3>
          </div>
          <hr />
          <div className="card_content">
            <p>
              Bạn đang mơ về một căn nhà ấm áp bên những người thân yêu? Bạn
              đang ấp ủ những dự định biến tổ ấm của mình thành một nơi chốn
              tiện nghi hơn? Đừng để những ước mơ chính đáng ấy mãi chỉ là mơ
              ước. Với sản phẩm "Cho vay mua, xây dựng, sửa chữa nhà, đất", MB
              có thể hỗ trợ tối đa 90% nhu cầu tài chính bạn cần để biến những
              ước mơ đó thành sự thật ngay hôm nay.
            </p>
          </div>
        </div>
        <div className="card_wapper card_sub mt-4">
          <div className="card_content">
            <p>
              Với lãi suất rất hấp dẫn cùng kỳ hạn và hình thức đáo hạn linh
              hoạt, các sản phẩm tiền gửi tiết kiệm mang lại nhiều lựa chọn phù
              hợp.
            </p>
            <p className="hotline">
              1900 545426 - (84-24) 3767 4050 (quốc tế gọi về)
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form_title">
          <h5>Đăng ký tư vấn</h5>
        </div>
        <form>
          <input name="name" placeholder="Name" />
          <input name="phone_number" placeholder="Phone Number" />
          <input name="email" placeholder="Email" />
          <textarea name="note" rows="4" cols="50" placeholder="Note" />
          <div className="btn">
            <button>Đăng ký ngay</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Card;
