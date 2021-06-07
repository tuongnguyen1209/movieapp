import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import movieApi from "../../apis/movieApis";
import { Head, Logo, Nav, NavRight, Toggle } from "./HeaderStyle";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  // const [textSearch, setTextSearch] = useState("");
  const [toggleNav, setToggleNav] = useState(false);

  const [category, setCategory] = useState([]);
  const [quocgia, setQuocgia] = useState([]);

  useEffect(() => {
    movieApi.getNav().then((result) => {
      let newdata = result.data;
      setCategory(newdata.listCategory);
      setQuocgia(newdata.listContries);
    });
  }, []);

  return (
    <Head>
      <Toggle>
        <button
          type="button"
          className={`btn-toggle ${toggleNav ? "active" : ""}`}
          id="btn-togle-nav"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}
        >
          <i className="fas fa-bars " id="bars"></i>
          <i className="fas fa-times " id="times"></i>
        </button>
      </Toggle>
      <Logo>
        <Link to="../">
          <img src="https://247phim.com/images/logo.svg" alt="logo" />
        </Link>
      </Logo>
      <Nav className={toggleNav ? "active" : ""}>
        <ul className="navbar">
          <li>
            <Link to="/">Trang Chủ</Link>
          </li>
          <li className="dropdown">
            <Link to="#">
              Thể Loại <i className="fas fa-sort-down"></i>
            </Link>
            <div className="dropdown-menu">
              <ul>
                {category.map((value, index) => (
                  <li key={index}>
                    <Link to={value.link}> {value.cate}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="dropdown">
            <Link to="#" className="dropdown">
              Quốc Gia <i className="fas fa-sort-down"></i>
            </Link>
            <div className="dropdown-menu">
              <ul>
                {quocgia.map((value, index) => (
                  <li key={index}>
                    <Link to={value.link}> {value.country}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/phim-chieu-rap">Chiếu Rạp </Link>
          </li>
        </ul>
      </Nav>
      <NavRight>
        <ul>
          <li className=" ">
            <div className={`wrap-search d-flex ${showSearch ? "active" : ""}`}>
              <div
                className="icon"
                onClick={() => {
                  setShowSearch(!showSearch);
                }}
              >
                <i className="fas fa-search"></i>
              </div>
              <form className="form-search d-flex">
                <input
                  type="text"
                  placeholder="search"
                  id="mysearch"
                  // value={textSearch}
                />
              </form>
              <span className="btnclear d-flex">
                <i className="fas fa-times"></i>
              </span>
            </div>
          </li>
          <li>
            <Link to="/">
              <i className="fas fa-user"></i>
            </Link>
          </li>
        </ul>
      </NavRight>
    </Head>
  );
}

export default Header;
