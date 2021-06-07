import React from "react";
import { Link } from "react-router-dom";
import { ListMovie, WrapContent, WrapInfo, WrapMovie } from "./Style";

function Movie(props) {
  const { datas } = props;

  return (
    <WrapContent>
      <WrapMovie>
        <div className="wrapVideo">
          <video src="" controls autoPlay></video>
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
            <p>Đạo Diễn: {datas.daodien}</p>
            <p>
              Quốc Gia:{" "}
              {datas.listCountries &&
                datas.listCountries.map((element, index) => (
                  <Link to={element.link} key={index}>
                    {element.country},
                  </Link>
                ))}
            </p>
            <p>
              Diễn Viên:{" "}
              {datas.listactors &&
                datas.listactors.map((element, index) => (
                  <Link to={element.link} key={index}>
                    {element.name},
                  </Link>
                ))}
            </p>
            <p>
              Thể Loại:{" "}
              {datas.listCategories &&
                datas.listCategories.map((element, index) => (
                  <Link to={element.link} key={index}>
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
              dangerouslySetInnerHTML={{ __html: `${datas.noidung}` }}
            ></p>
          </div>
        </WrapInfo>
      </WrapMovie>
      <ListMovie>
        {datas.listRelatedMovies &&
          datas.listRelatedMovies.map((element, index) => (
            <Link to={`../phim${element.link}`} key={index}>
              <div className="movieItem">
                <div className="wrapImage">
                  <img src={element.img} alt="Banner" />
                </div>
                <div className="wrapInfo">
                  <h3>{element.name}</h3>
                  <h5>{element.nameen}</h5>
                  <p>{element.status}</p>
                </div>
              </div>
            </Link>
          ))}
      </ListMovie>
    </WrapContent>
  );
}

export default Movie;
