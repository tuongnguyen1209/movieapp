import styled from "styled-components";

export const MainCarosel = styled.div`
  width: 100%;
  height: 540px;
  overflow: hidden;
  position: relative;
  .list-carosel {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    transform: translateX(${(props) => props.index * -100}%);
    transition: 0.3s ease;
  }
  .carosel-item {
    width: 100%;
    height: 100%;
    /* position: absolute; */
  }
  .banner {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .banner-info {
    position: absolute;

    z-index: 5;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    padding: 30px;
  }
  .banner-info h3 {
    font-family: "Dosis", sans-serif;
    font-size: 3vw;
    font-weight: 500;
  }
  @media only screen and (max-width: 1200px) {
    height: 540px;
  }
  @media only screen and (max-width: 768px) {
    height: 420px;
  }
  @media only screen and (max-width: 576px) {
    height: 240px;
  }
`;

export const ButtonAction = styled.div`
  .btn {
    position: absolute;
    z-index: 11;
    color: #ecf0f1;
    background: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;
    top: 45%;
  }
  .btn-prev {
    left: 0;
  }
  .btn-next {
    right: 0;
  }
`;
