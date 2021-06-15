import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import movieAPI from "../../apis/movieApis";
import movieApi from "../../apis/movieApis";
import { UserContext } from "./../../contexts/UserContext";
import LogoT from "./../../assets/images/logoT.png";
import {
  Head,
  Logo,
  Model,
  Nav,
  NavRight,
  Toggle,
  LoginWrap,
  BottomContainer,
} from "./HeaderStyle";

function Header() {
  const history = useHistory();

  const [showSearch, setShowSearch] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const [category, setCategory] = useState([]);
  const [quocgia, setQuocgia] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [keyword, setKeyword] = useState("");

  const [error, setError] = useState("");

  const timeoutRef = useRef(null);

  const [listSearch, setListSearch] = useState([]);

  const changeTextSearch = (event) => {
    setKeyword(event.target.value);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (keyword !== "") {
        movieApi
          .getSearch({
            keyword,
          })
          .then((result) => {
            console.log(result);
            setListSearch(result.data.result);
          });
      } else {
        setListSearch([]);
      }
    }, 300);
  };

  const searchMovie = (event) => {
    event.preventDefault();

    // setKeyword('')
    history.push(`allmovie?kw=${keyword}`);
    setKeyword("");
    setListSearch([]);
    setShowSearch(false);
    setListSearch([]);
  };

  const chouseMovie = (event) => {
    event.preventDefault();
    setKeyword(event.target.outerText);
    setShowSearch(false);
    history.push(`allmovie?kw=${event.target.outerText}`);
    setKeyword("");
    setListSearch([]);
  };
  //login
  const { user, login, getUser, logout, signin } = useContext(UserContext);
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });
  const [userFormSignin, setUserFormSignin] = useState({
    username: "",
    password: "",
    verifyPass: "",
  });

  const changeForm = (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
  };
  const changeFormSignin = (event) => {
    setUserFormSignin({
      ...userFormSignin,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setError("");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [error]);
  useEffect(() => {
    movieApi.getNav().then((result) => {
      let newdata = result.data;

      setCategory(newdata.listCategory);
      // editCate(newdata.listCategory);
    });

    movieAPI.getCountry().then((result) => {
      setQuocgia(result.data.countries);
    });

    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginFormOrSignin = async (event) => {
    event.preventDefault();
    if (showLogin) {
      const result = await login(userForm);
      if (result.status === "success") {
        setShowModel(false);
        setUserForm({
          username: "",
          password: "",
        });
      } else {
        setError("Sai username hoặc mật khẩu!!!");
      }
    } else {
      if (userFormSignin.password !== userFormSignin.verifyPass)
        return setError("2 Password không trùng khớp");
      const result = await signin({
        username: userFormSignin.username,
        password: userFormSignin.password,
      });

      if (result === "success") {
        setShowModel(false);
        setUserFormSignin({
          username: "",
          password: "",
          verifyPass: "",
        });
      } else {
        setError(result);
      }
    }
  };

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
          <span>Phim Của</span>
          <img src={LogoT} alt="logo" />
          <span className="name1">ui</span>
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
                    <Link to={`./../allmovie?cate=${value.cate}`}>
                      {" "}
                      {value.cate}
                    </Link>
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
                    <Link to={`./../allmovie?country=${value.country}`}>
                      {" "}
                      {value.country}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="dropdown">
            <Link to="./../allmovie?cate=Phim Chiếu Rạp">Chiếu Rạp </Link>
          </li>
        </ul>
      </Nav>
      <NavRight>
        <ul>
          <li className="dropdown">
            <div className={`wrap-search d-flex ${showSearch ? "active" : ""}`}>
              <div
                className="icon"
                onClick={() => {
                  setShowSearch(!showSearch);
                }}
              >
                <i className="fas fa-search"></i>
              </div>
              <form className="form-search d-flex" onSubmit={searchMovie}>
                <input
                  type="text"
                  placeholder="search"
                  id="mysearch"
                  value={keyword}
                  onChange={changeTextSearch}
                />
              </form>
              <span
                className="btnclear d-flex"
                onClick={() => {
                  setKeyword("");
                  setListSearch([]);
                }}
              >
                <i className="fas fa-times"></i>
              </span>
            </div>
            {listSearch.length > 0 && showSearch && (
              <ul
                className="dropdownmenu"
                style={{
                  display: "block",
                  right: "0",
                  width: "100%",
                }}
              >
                {listSearch.map((element, index) => (
                  <li key={index}>
                    <Link to="" onClick={chouseMovie}>
                      {element.target}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="dropdown">
            <Link to="/">
              {!user.user && <i className="fas fa-user"></i>}
              {user.user !== null && user.user && `${user.user.username}`}
            </Link>
            <ul className="dropdownmenu">
              {!user.user && (
                <>
                  <li>
                    <span
                      onClick={() => {
                        setShowModel(true);
                        setShowLogin(true);
                      }}
                    >
                      Login
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        setShowModel(true);
                        setShowLogin(false);
                      }}
                    >
                      Register
                    </span>
                  </li>
                </>
              )}
              {user.user && (
                <li>
                  <span onClick={logout}>Logout</span>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </NavRight>

      <Model
        id="myModal"
        showModel={showModel}
        onClick={(event) => {
          if (event.target.id === "myModal") setShowModel(false);
        }}
        className="modal"
      >
        {/* Modal content  */}
        <div className="modal-content">
          <div className="modal-header">
            <span
              className="close"
              onClick={() => {
                setShowModel(false);
              }}
            >
              &times;
            </span>
            {showLogin && <h2>Login</h2>}
            {!showLogin && <h2>Register</h2>}
          </div>
          <div className="modal-body">
            <LoginWrap>
              <form onSubmit={loginFormOrSignin}>
                <div className="row">
                  <div className="vl">
                    <span className="vl-innertext">or</span>
                  </div>

                  <div className="col">
                    <Link to="" className="fb btn">
                      <i className="fa fa-facebook fa-fw"></i> Login with
                      Facebook
                    </Link>
                    <Link to="" className="twitter btn">
                      <i className="fa fa-twitter fa-fw"></i> Login with Twitter
                    </Link>
                    <Link to="" className="google btn">
                      <i className="fa fa-google fa-fw"></i> Login with Google+
                    </Link>
                  </div>

                  <div className="col">
                    <div className="hide-md-lg">
                      <p>Or sign in manually:</p>
                    </div>
                    {showLogin && (
                      <>
                        <input
                          type="text"
                          name="username"
                          placeholder="Username"
                          required
                          value={userForm.username}
                          onChange={changeForm}
                        />
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          required
                          value={userForm.password}
                          onChange={changeForm}
                        />
                        <p style={{ color: "red" }}>{error}</p>
                        <input type="submit" value="Login" />
                      </>
                    )}
                    {!showLogin && (
                      <>
                        <input
                          type="text"
                          name="username"
                          placeholder="Username"
                          required
                          value={userFormSignin.username}
                          onChange={changeFormSignin}
                        />
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          required
                          value={userFormSignin.password}
                          onChange={changeFormSignin}
                        />
                        <input
                          type="password"
                          name="verifyPass"
                          placeholder="Confirm Password"
                          required
                          value={userFormSignin.verifyPass}
                          onChange={changeFormSignin}
                        />
                        <p style={{ color: "red" }}>{error}</p>
                        <input type="submit" value="Register" />
                      </>
                    )}
                  </div>
                </div>
              </form>
            </LoginWrap>

            <BottomContainer>
              <div className="row">
                <div className="col">
                  <Link
                    to=""
                    className="btn"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setShowLogin(!showLogin);
                    }}
                  >
                    {showLogin ? "Sign up" : "Login"}
                  </Link>
                </div>
                <div className="col">
                  <Link to="" className="btn">
                    Forgot password?
                  </Link>
                </div>
              </div>
            </BottomContainer>
          </div>
        </div>
      </Model>
    </Head>
  );
}

export default Header;
