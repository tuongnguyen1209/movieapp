import React from "react";
import { Link } from "react-router-dom";
import { ListMovie, WrapContent, WrapInfo, WrapMovie } from "./Style";

function Movie(props) {
  const { datas, listRelatedMovies } = props;

  return (
    <WrapContent>
      <WrapMovie>
        <div className="wrapVideo">
          <video
            src={
              datas.listChaps
                ? datas.listChaps[0].link
                    .trim()
                    .replace(
                      "http://",
                      "https://my-api-movie.herokuapp.com/media/video/"
                    )
                : ""
            }
            controls
            autoPlay
          ></video>
        </div>
        <WrapInfo>
          <h3>{datas.title}</h3>
          <p>{datas.titleEnglish}</p>
          <div className="nav-video">
            <ul>
              <li>Thông Tin Chi Tiết</li>
              <li>Chọn Tập</li>
            </ul>
          </div>
          <div className="info-video">
            <p>Year: {datas.year}</p>
            <p>Đạo Diễn: {datas.directors}</p>
            <p>
              Quốc Gia:{" "}
              {datas.listCountries &&
                datas.listCountries.map((element, index) => (
                  <Link
                    to={`./../../allmovie?country=${element.country}`}
                    key={index}
                  >
                    {element.country},
                  </Link>
                ))}
            </p>
            <p>
              Diễn Viên:{" "}
              {datas.listactors &&
                datas.listactors.map((element, index) => (
                  <Link to="" key={index}>
                    {element.name},
                  </Link>
                ))}
            </p>
            <p>
              Thể Loại:{" "}
              {datas.listCategories &&
                datas.listCategories.map((element, index) => (
                  <Link
                    to={`./../../allmovie?cate=${element.nameCate}`}
                    key={index}
                  >
                    {element.nameCate},
                  </Link>
                ))}
            </p>

            {/* <p>
              <Link>item</Link>
            </p> */}
            <p>datamovie.amthanh</p>

            <p
              className="noidung"
              dangerouslySetInnerHTML={{ __html: `${datas.contents}` }}
            ></p>
          </div>
        </WrapInfo>
      </WrapMovie>
      <ListMovie>
        {listRelatedMovies &&
          listRelatedMovies.map((element, index) => (
            <Link
              to={`../phim/${element._id}`}
              key={index}
              style={{
                display: element._id === datas._id ? "none" : "",
              }}
            >
              <div className="movieItem">
                <div className="wrapImage">
                  <img
                    src={`${element.img
                      .trim()
                      .replace(
                        "http://vaophim.com",
                        "https://my-api-movie.herokuapp.com/media/img"
                      )}`}
                    alt="Banner"
                  />
                </div>
                <div className="wrapInfo">
                  <h3>{element.title}</h3>
                  <h5>{element.titleEnglish}</h5>
                  <p>{element.time}</p>
                </div>
              </div>
            </Link>
          ))}
      </ListMovie>
    </WrapContent>
  );
}

export default Movie;
