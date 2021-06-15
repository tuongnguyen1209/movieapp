import React from "react";
import { MyFooterDefault } from "./style";
import { Link } from "react-router-dom";
import LogoT from "./../../assets/images/logoT.png";
import { Logo } from "../Header/HeaderStyle";

function MyFooter() {
  return (
    <MyFooterDefault>
      <div className="cate">
        <Logo
          style={{
            width: "100%",
          }}
        >
          <Link to="../">
            <span>Phim Của</span>
            <img src={LogoT} alt="logo" />
            <span className="name1">ui</span>
          </Link>
        </Logo>
        <ul>
          <li>
            <Link to="allmovie?cate=Phim Hành Động">Phim Hành Động</Link>
          </li>
          <li>
            <Link to="allmovie?cate=Phim Ma">Phim Ma</Link>
          </li>
          <li>
            <Link to="allmovie?cate=Phim Kinh Dị">Phim Kinh Dị</Link>
          </li>
          <li>
            <Link to="allmovie?cate=Phim Tình Cảm">Phim Tình Cảm</Link>
          </li>
          <li>
            <Link to="allmovie?cate=Phim Chiếu Rạp">Phim Chiếu Rạp</Link>
          </li>
        </ul>
      </div>

      <div className="nguon">
        Website lấy phim từ nguồn
        <a href="http://vaophim.com/">Vaophim.com</a>
      </div>
      <div className="author">
        <ul>
          <li>
            <span>Người Thiết Kế:</span>
            <strong>Nguyễn Tấn Tường</strong>
          </li>
          <li>
            <span>Email:</span>
            <strong>tuongntps14943@fpt.edu.vn</strong>
          </li>

          <li>
            <span>Fronend:</span>
            <strong>Reactjs</strong>
          </li>
          <li>
            <span>Backend:</span>
            <strong>Nodejs, Express, MongoDB</strong>
          </li>
        </ul>
      </div>
    </MyFooterDefault>
  );
}

export default MyFooter;
