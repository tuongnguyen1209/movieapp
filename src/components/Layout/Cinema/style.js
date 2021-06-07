import styled from "styled-components";

export const WrapCinema = styled.div`
  background: linear-gradient(to top right, black, #170000);
  padding: 30px 0;
  position: relative;
  overflow: hidden;
`;

export const CinemaHeader = styled.div`
  color: red;
  text-align: center;
  font-size: 30px;
  font-variant: small-caps;
`;

export const ListItem = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  z-index: 5;

  .item {
    width: 20%;
    overflow: hidden;
    position: relative;
  }
  .img {
    overflow: hidden;
    height: 100%;
  }
  .item img {
    width: 100%;
    transform: scale(1.28);
  }
  .info {
    color: white;
    position: absolute;
    bottom: 0;
    text-align: center;
    transform: translateY(100%);
    background-color: rgba(53, 53, 53, 0.6);
    transition: 0.5s;
    width: 100%;
    padding: 5px 3px;
    font-family: "Roboto", sans-serif;
  }
  .item:hover .info {
    transform: translateY(0);
  }

  @media only screen and (max-width: 768px) {
    .list-item {
      width: 100%;
    }
    .item {
      width: 50%;
    }
    .info {
      transform: translateY(0);
    }
  }
`;

export const ImgPorster = styled.div`
  .image {
    position: absolute;
    width: 150px;
    top: 50%;
    transform: rotate(-20deg);
    /* height: 70px; */
  }
  .image img {
    width: 100%;
  }

  .left {
    right: 3%;
  }
  .right {
    right: 0%;
    /* width: 150px; */
    transform: rotate(20deg) translateY(10%);
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
