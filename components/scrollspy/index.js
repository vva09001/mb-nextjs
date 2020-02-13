import React from "react";

function Scrollspy() {
  return (
    <div className="tab" id="tab_scrollpy">
      <div className="container">
        <div className="tab_title">
          <p>Cho vay mua, xây dựng, sửa chữa nhà đất</p>
        </div>
        <div className="tab_wapper">
          <ul className="tab_items nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#0">
                Giới thiệu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#1">
                Lợi ích
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
                Diều kiện vay
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#3">
                Hồ sơ vay vốn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#4">
                Phương án vay
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#5">
                Ưu đãi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Scrollspy;
