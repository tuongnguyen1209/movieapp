import styled, { keyframes } from "styled-components";
export const Head = styled.div`
  background: linear-gradient(to bottom, black, rgba(0, 0, 0, 0.58));
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 3px;
  padding-top: 5px;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    /* padding: 7px; */
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
  width: 20%;
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

  .dropdown {
    position: relative;
    :hover .dropdownmenu {
      display: flex;
    }
    .dropdownmenu {
      position: absolute;
      bottom: 0;
      right: 10%;
      transform: translateY(100%);
      background: white;
      display: none;
      flex-direction: column;

      ::before {
        background-color: black;
        position: absolute;
        top: 0;
        z-index: -1;
        content: " ";
        width: 20px;
        height: 20px;
        transform: translateY(-30%) translateX(75px) rotate(45deg);
      }
      li {
        background: black;
        color: white;
        padding: 5px 15px;
        cursor: pointer;
        span {
          display: block;
          width: 100%;
          padding: 20px 15px 15px 15px;

          border-radius: 5px;
        }
        span:hover {
          background: #febb00;
          color: black;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    width: 70%;
    ul {
      justify-content: flex-end;
    }
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

const FadeModel = keyframes`
  from {
    transform: translateY(-10%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const Model = styled.div`
  display: ${(props) =>
    props.showModel ? "block" : "none"}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border-radius: 5px;
    border: 1px solid #888;
    width: 70%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation: ${FadeModel} ease 0.5s;
    .modal-header {
      padding: 15px 16px;
      background-color: black;
      color: white;
      text-align: center;
      .close {
        color: white;
        float: right;
        font-size: 28px;
        font-weight: bold;

        :hover,
        :focus {
          color: white;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
    .modal-body {
      padding: 20px 16px;
    }
  }
`;

export const LoginWrap = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px 0 30px 0;

  input,
  .btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none; /* remove underline from anchors */
  }
  input[type="submit"] {
    background-color: #04aa6d;
    color: white;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }
  input:hover,
  .btn:hover {
    opacity: 1;
  }

  .row {
    ::after {
      content: "";
      display: table;
      clear: both;
    }
    .vl {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      border: 2px solid #ddd;
      height: 175px;
      .vl-innertext {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #f1f1f1;
        border: 1px solid #ccc;
        border-radius: 50%;
        padding: 8px 10px;
      }
    }
    .col {
      float: left;
      width: 50%;
      margin: auto;
      padding: 0 50px;
      margin-top: 6px;
      a {
        color: white;
      }
      .fb {
        background-color: #3b5998;
        color: white;
      }

      .twitter {
        background-color: #55acee;
        color: white;
      }

      .google {
        background-color: #dd4b39;
        color: white;
      }
      .hide-md-lg {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 786px) {
    padding: 10px;
    .col {
      width: 100% !important;
      margin-top: 0;
      padding: 0 !important;
    }
    /* hide the vertical line */
    .vl {
      display: none;
    }
    /* show the hidden text on small screens */
    .hide-md-lg {
      display: block !important;
      text-align: center;
    }
  }
`;

export const BottomContainer = styled.div`
  text-align: center;
  background-color: #666;
  border-radius: 0px 0px 4px 4px;
  .row {
    :after {
      content: "";
      display: table;
      clear: both;
    }
    .col {
      float: left;
      width: 50%;
      margin: auto;
      padding: 0 50px;
      margin-top: 6px;
      .btn {
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 4px;
        margin: 5px 0;
        opacity: 0.85;
        display: inline-block;
        font-size: 17px;
        line-height: 20px;
        text-decoration: none;
        color: white;
      }
    }
  }
  @media only screen and (max-width: 786px) {
    .col {
      width: 100% !important;
      margin-top: 0;
      padding: 0 !important;
    }
  }
`;
