import styled from "styled-components";

export const WrapContent = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const WrapMovie = styled.div`
  width: 70%;
  padding: 20px;
  padding-top: 60px;

  color: white;
  .wrapVideo {
    padding: 15px;
    width: 100%;
  }
  video {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const WrapInfo = styled.div`
  padding: 10px;
  h3 {
    font-size: 22px;
    font-variant: small-caps;
  }

  .nav-video {
    margin-top: 15px;
    margin-bottom: 15px;
    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid white;

      li {
        /* margin-left: 25px; */
        cursor: pointer;
        padding: 0 10px;
      }
      li::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: #0285b5;
      }
    }
  }
  .info-video {
    p {
      padding: 5px;
      font-size: 17px;
      a {
        color: #727373;
        padding-left: 5px;
        text-decoration: none;
      }
      a:hover {
        color: white;
      }
    }
    .noidung {
      padding: 15px;
      word-spacing: 5px;
      font-size: 1.2em;
      line-height: 1.4em;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export const ListMovie = styled.div`
  width: 30%;
  color: white;
  padding: 10px;
  padding-top: 65px;
  a {
    text-decoration: none;
    color: white;
  }

  .movieItem {
    display: flex;
    margin-top: 10px;
    transition: all 0.2s ease;
    .wrapImage {
      width: 20%;
      img {
        width: 100%;
      }
    }
    .wrapInfo {
      width: 60%;
      padding-left: 20px;
    }
  }
  .movieItem:hover {
    background-color: #171616;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 30px;
    width: 100%;
  }
`;
