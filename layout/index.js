import React, { useState, useEffect } from "react";
import Logo from "../public/images/logo.png";
import PhoneIcon from "../public/images/svg/phone.svg";
import CHIcon from "../public/images/svg/ch.svg";
import StoreIcon from "../public/images/app_store.jpg";
import QRCODE from "../public/images/QR_code.png";
import LocationIcon from "../public/images/svg/location.svg";
import MailIcon from "../public/images/svg/mail.svg";
import PinIcon from "../public/images/svg/pin.svg";
import { map } from "lodash";
import { getAllMenu, getMenuItemById } from "../services/menu";

function Layout({ children }) {
  const [menuTop, setMenuTop] = useState({});
  const [menuBottom, setMenuBottom] = useState({});
  const [menuSide, setMenuSide] = useState({});

  const nest = (items, id = null, link = "parentId") => {
    return items
      .filter(item => item[link] === id)
      .map(item => ({
        ...item,
        title: `${item.name}`,
        children: nest(
          items.sort((a, b) => a.position - b.position),
          item.id
        ),
        expanded: true
      }));
  };
  const getMenu = async () => {
    const res = await getAllMenu();
    if (res && res.status === 200) {
      map(res.data, async values => {
        if (values.position === "top") {
          const res1 = await getMenuItemById(values.id);
          if (res1 && res1.status === 200) {
            let menuTopData = nest(res1.data);
            setMenuTop(menuTopData);
          }
        } else {
          if (values.position === "bottom") {
            const res2 = await getMenuItemById(values.id);
            if (res2 && res2.status === 200) {
              let data = nest(res2.data);
              setMenuBottom(data);
            }
          } else {
            if (values.position === "side") {
              const res3 = await getMenuItemById(values.id);
              if (res3 && res3.status === 200) {
                setMenuSide(res3.data);
              }
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const nestChild = items => {
    return map(items, item => (
      <li key={item.id}>
        <a href={`/page/${item.slugPages}`}>{item.name}</a>
        {item.children.length > 0 && (
          <div className="dropdown-content">{renderFooter(item.children)}</div>
        )}
      </li>
    ));
  };

  const renderFooter = items => {
    return map(items, (values, key) => {
      return (
        <div className="col-sm-3" key={key}>
          <ul className="footer_partner">
            <li>
              <a href={`/page/${values.slugPages}`}>{values.name}</a>
              <ul className="footer_children">{footerItem(values.children)}</ul>
            </li>
          </ul>
        </div>
      );
    });
  };

  const footerItem = data => {
    return map(data, (item, index) => (
      <li key={index}>
        <a
          className={item.children.length > 0 ? "title" : ""}
          href={`/page/${item.slugPages}`}
        >
          {item.name}
        </a>
        <ul>{footerItem(item.children)}</ul>
      </li>
    ));
  };

  return (
    <div>
      <div className="header">
        <div className="header_top">
          <div className="menu_wapper navbar-fixed-top container">
            <div className="row">
              <div className="col-sm-4">
                <ul className="menu_top">
                  <li>
                    <a href="#">
                      <img
                        src={PinIcon}
                        alt="pin_icon"
                        width="15"
                        className="mr-2"
                      />
                      Điểm GD & ATM
                    </a>
                  </li>
                  <li>
                    <a href="#">Biểu phí</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-8">
                <ul className="menu_top menu_right">
                  <li>
                    <a href="#">Về MBBank</a>
                  </li>
                  <li>
                    <a href="#">Nhà đầu tư</a>
                  </li>
                  <li>
                    <a href="#">Nghề nghiệp</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ</a>
                  </li>
                  <li>
                    <a href="#">Đăng nhập</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header_menu">
          <div className="menu_wapper container">
            <div className="row">
              <div className="col">
                <ul className="menu_top">
                  <li>
                    <a href="/" className="logo">
                      <img src={Logo} alt="logo" width="90" />
                    </a>
                  </li>
                  {nestChild(menuTop)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="conetnt">{children}</div>
      <div className="navbarside">
        {map(menuSide, data => (
          <a href={`/page/${data.slug}`} key={data.id}>
            {data.name}
          </a>
        ))}
      </div>
      {/* contact */}
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 phone">
              <div>
                <img
                  src={PhoneIcon}
                  alt="phone_icon"
                  width="50"
                  className="mr-4"
                />
              </div>
              <div>
                <p className="title">Gọi ngay</p>
                <p className="subtitle">
                  1900 545426 - (84-24) 37674050 <br></br>
                  (Từ nước ngoài)
                </p>
              </div>
            </div>
            <div className="col-sm-4 phone email">
              <div>
                <img
                  src={MailIcon}
                  alt="phone_icon"
                  width="50"
                  className="mr-4"
                />
              </div>
              <div>
                <p className="title">Gửi Email</p>
                <p className="subtitle">mb247@mbbank.com.vn</p>
              </div>
            </div>
            <div className="col-sm-4 phone">
              <div>
                <img
                  src={LocationIcon}
                  alt="phone_icon"
                  width="50"
                  className="mr-4"
                />
              </div>
              <div>
                <p className="title">Tìm ATM giao dịch</p>
                <p className="subtitle">Tìm điểm giao dịch & ATM gần bạn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tải appp */}
      <div className="app_wapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <form>
                <label>Đăng ký nhận thông tin khuyến mãi</label>
                <div className="input_wapper">
                  <input name="email" placeholder="Nhập email" />
                  <button type="submit">Đăng ký </button>
                </div>
              </form>
            </div>
            <div className="col-sm-6" style={{ margin: 0 }}>
              <div className="app">
                <label>Hãy tải app ngay hôm nay</label>
                <div className="app_content">
                  <a href="#" className="mr-3">
                    <img src={StoreIcon} alt="icon_app" width="120" />
                  </a>
                  <a href="#" className="mr-3">
                    <img src={CHIcon} alt="icon_app" width="120" />
                  </a>
                  <img
                    src={QRCODE}
                    alt="icon_app"
                    width="60"
                    className="code_qr"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="footer">
        <div className="footer_wapper container">
          <div className="row mt-3">
            <img
              src={Logo}
              alt="logo"
              width="130"
              title="Ngân Hàng TMCP Quân Đội"
            />
          </div>
          <div className="row ">
            <div className="col-sm-4">
              <ul className="footer_left">
                <li>
                  <a className="mb_title">Ngân Hàng TMCP Quân Đội</a>
                </li>
                <li>
                  <a>
                    Tòa nhà MBBank - Hội sở 21 Cát Linh, <br></br>
                    Đống Đa, Hà Nội
                  </a>
                </li>
                <li>
                  Email: <a href="#">mb247@mbbank.com.vn</a>
                </li>
                <li className="mb-4">
                  <a className="code">Swift code: MSCBVNX</a>
                </li>
                <li>
                  <a>Hãy gọi cho chúng tôi để được tư vấn 24/7</a>
                </li>
                <li>
                  <img
                    src={PhoneIcon}
                    alt="phone_icon"
                    width="25"
                    className="mr-3"
                  />
                  <a className="phone" href="tel:1900545426">
                    1900545426
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-8">
              <div className="row">{renderFooter(menuBottom)}</div>
            </div>
          </div>
          <hr></hr>
          <div className="copyright">
            <div>
              <p>Điều khoản sử dụng | Bảo mật thông tin</p>
            </div>
            <div>
              <p>2019 © Copyright MBbank. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout;
