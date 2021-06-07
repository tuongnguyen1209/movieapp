import styled from "styled-components";

export const List = styled.div`
  width: 80%;
  margin: auto;
  .playname {
    font-size: 24px;
    padding: 15px 5px 0 5px;
    font-weight: 500;
    display: inline-block;
    color: white;
    font-variant: small-caps;
  }
  .playname::after {
    display: block;
    content: "";
    background: #febb00;
    width: 30px;
    height: 2px;
    transition: 0.3s;
  }
  .playname:hover::after {
    width: 100px;
  }
  @media only screen and (max-width: 986px) {
    width: 100%;
  }
`;

export const ListMovieItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 10px;
  .movie-item {
    width: 20%;
    padding: 7px;
  }
  .movie-item a {
    text-decoration: none;
    color: white;
    background: rgb(19, 19, 19);
    width: 100%;
    height: 100%;
    padding: 7px;
    display: block;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgb(8, 8, 8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .movie-item .image {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
  }
  .movie-item .image img {
    width: 100%;
    border-radius: 5px;
    transition: 0.2s;
  }
  .movie-item .image:hover img {
    transform: scale(1.1);
  }
  .movie-item .icon-play {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    background: rgba(0, 0, 0, 0);
    display: none;
    transition: 0.2s;
  }
  .movie-item .image:hover .icon-play {
    background: rgba(0, 0, 0, 0.2);
    display: flex;
  }

  .movie-item .card-movie-info {
  }
  .movie-item p {
    font-size: 13 px;
    margin-bottom: 7px;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
  .movie-item .card-movie-name {
    font-size: 20px;
    font-weight: 300;
  }
  .movie-item .func {
    position: relative;
    align-items: center;

    margin-top: auto;
  }
  .views {
    bottom: 0;
    color: rgb(245, 174, 41);
  }
  @media only screen and (max-width: 768px) {
    .movie-item {
      width: 50%;
    }
    .movie-item .card-movie-name {
      font-size: 17px;
    }
  }
`;
