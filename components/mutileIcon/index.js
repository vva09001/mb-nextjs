import React from "react";
import IconTick from "../../public/images/svg/tik.svg";
import CalendarIcon from "../../public/images/svg/calendar.svg";
import PaperIcon from "../../public/images/svg/paper.svg";
import MoneyIcon from "../../public/images/svg/money.svg";
import BankIcon from "../../public/images/svg/bank.svg";
import PayIcon from "../../public/images/svg/pay.svg";
import { map } from "lodash";

const fectIcon = [
  {
    id: 1,
    title: "Mức cho vay:",
    sub: "Tối đa 80% nhu cầu tài chính của khách hàng",
    icon: IconTick
  },
  {
    id: 2,
    title: "Thời hạn cho vay:",
    sub: "Tối đa 20 năm.",
    icon: CalendarIcon
  },
  {
    id: 3,
    title: "Thủ tục đơn giản",
    sub: "Đơn giản, thời gian xử lý hồ sơ nhanh chóng",
    icon: PaperIcon
  },
  {
    id: 4,
    title: "Phương thức trả nợ linh hoạt:",
    sub:
      "Gốc trả định kỳ/cuối kỳ Lãi trả định kỳ hoặc cuối kỳ tính theo niên kim cố định theo dư nợ ban đầu theo dư nợ giảm dần",
    icon: MoneyIcon
  },
  {
    id: 5,
    title: "Tài sản bảo đảm đa dạng:",
    sub:
      "Bất động sản, Giấy tờ có giá, Sổ/Thẻ tiết kiệm, Hợp đồng tiền gửi, Ô tô;",
    icon: BankIcon
  },
  {
    id: 6,
    title: "Ân hạn trả gốc:",
    sub: "Tối đa 12 tháng.",
    icon: PayIcon
  }
];

function MutileIcon() {
  return (
    <div id="1">
      <div className="mutile_icon">
        <p className="title">Lợi ích cho bạn</p>
        <div className="row">
          {map(fectIcon, data => (
            <div className="col-sm-4 mb-5" key={data.id}>
              <div className="icon_items">
                <div className="icon">
                  <img src={data.icon} alt="icon" width="45" className="mb-3" />
                </div>
                <div className="icon_title">
                  <p>{data.title}</p>
                </div>
                <div className="icon_content">
                  <p>{data.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MutileIcon;
