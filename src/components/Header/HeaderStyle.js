import styled from "styled-components";
export const Head = styled.div`
  background: linear-gradient(to bottom, black, rgba(0, 0, 0, 0.58));
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 5px;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    padding: 7px;
  }
`;
export const Togle = styled.div`
  width: 10%;
  display: none;
  justify-content: center;
  align-items: center;
  .btn-toggle {
    color: white;
    background-color: rgba(0, 0, 0, 0);
    font-size: 30px;
    border: none;
  }
  .btn-toggle #times {
    display: none;
  }
  .btn-toggle.active #times {
    display: block;
  }
  .btn-toggle #bars {
    display: block;
  }
  .btn-toggle.active #bars {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 20%;
  padding: auto;
  padding: 10px;
  img {
    height: 30px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 40%;
  }
`;
export const Nav = styled.nav`
  width: 50%;
  transition: all 0.2s;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;

    li a {
      text-decoration: none;
      color: white;
      display: block;
      width: 100%;
      padding: 20px 15px 15px 15px;
    }
    li a:hover {
      background-color: #febb00;
      border-radius: 5px;
      color: black;
    }
  }
  .dropdown:hover .dropdown-menu {
    display: block !important;
  }
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: black;
    bottom: 0;
    transform: translateY(100%);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.863);
    width: 400px;
    z-index: 3;
  }
  .dropdown-menu::after {
    background-color: black;
    position: absolute;
    top: 0;
    z-index: -1;
    content: " ";
    width: 20px;
    height: 20px;
    transform: translateY(-30%) translateX(40px) rotate(45deg);
  }
  .dropdown-menu ul {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: -100%;
    background-color: black;
    height: 100vh;
    width: 50%;
    overflow: auto;

    &&.active {
      left: 0;
    }
    &&.active ul {
      display: flex;
      flex-direction: column;
    }
    .dropdown-menu {
      display: block;
      position: relative;
      color: white;
      transform: translateY(0);
      width: 100%;
      padding-left: 15px;
    }
    .dropdown-menu::after {
      display: none;
    }
  }
`;

export const NavRight = styled.div`
  width: 30%;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
  }
  li a {
    text-decoration: none;
    color: white;
    display: block;
    width: 100%;
    padding: 20px 15px 15px 15px;
  }
  li a:hover {
    background-color: #febb00;
    border-radius: 5px;
    color: black;
  }

  .wrap-search {
    height: 30px;
    width: 30px;
    background-color: white;
    border-radius: 15px;
    transition: 0.5s;
    margin-top: 10px;
    overflow: hidden;
    position: relative;
    display: flex;
    /* box-shadow: 0 0 0 5px #2573ef; */
  }

  .wrap-search.active {
    width: 240px;
  }
  .wrap-search .icon {
    /* text-align: center; */
    padding: 7px;
    position: absolute;
  }
  .form-search {
    position: relative;
    width: 180px;
    height: 30px;
    left: 30px;
    z-index: 10;

    justify-content: center;
    align-items: center;
  }
  .form-search input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 18px;
  }
  .wrap-search .btnclear {
    z-index: 10;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    left: 30px;
    justify-content: center;
    align-items: center;
    /* color: red; */
  }
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`;
export const Toggle = styled.div`
  width: 10%;
  display: none;
  justify-content: center;
  align-items: center;

  .btn-toggle {
    color: white;
    background-color: rgba(0, 0, 0, 0);
    font-size: 30px;
    border: none;
  }
  .btn-toggle #times {
    display: none;
  }
  .btn-toggle.active #times {
    display: block;
  }
  .btn-toggle #bars {
    display: block;
  }
  .btn-toggle.active #bars {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;
