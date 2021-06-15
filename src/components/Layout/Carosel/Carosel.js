import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonAction, MainCarosel } from "./Style";

function Carosel(props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let animate = setInterval(() => {
      // console.log("voday", index);
      let newIndex;

      if (index < props.listSize - 1) {
        newIndex = index + 1;
      } else {
        newIndex = 0;
      }
      setIndex(newIndex);
    }, 4000);

    return () => {
      clearInterval(animate);
    };
  }, [index, props.listSize]);
  const changeIndex = (newinde) => {
    if (index + newinde < 0) {
      setIndex(props.listSize - 1);
    } else if (index + newinde >= props.listSize) {
      setIndex(0);
    } else {
      setIndex(index + newinde);
    }
  };

  return (
    <MainCarosel index={index}>
      <div className="list-carosel">
        {props.list.map((value, index) => (
          <div className="carosel-item" key={index}>
            <Link to={`phim/${value._id}`}>
              <div className="banner">
                <img
                  src={`${value.img
                    .trim()
                    .replace(
                      "http://vaophim.com",
                      "https://my-api-movie.herokuapp.com/media/img"
                    )}`}
                  alt="Poster"
                />
              </div>
              <div className="banner-info">
                <h1>{value.title} </h1>
                <p> {value.titleEnglish} </p>
                <p>{value.time} </p>
                <p className="actor">
                  Diễn Viên: {value.listactors.map((el) => `${el.name}, `)}{" "}
                </p>
                <p>
                  <button>Xem Chi Tiết</button>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <ButtonAction>
        <button
          type="button"
          className="btn btn-prev"
          onClick={() => {
            changeIndex(-1);
          }}
        >
          <i className="fas fa-angle-left" click="prev"></i>
        </button>
        <button
          type="button"
          className="btn btn-next"
          onClick={() => {
            changeIndex(1);
          }}
        >
          <i className="fas fa-angle-right" click="next"></i>
        </button>
      </ButtonAction>
    </MainCarosel>
  );
}

export default Carosel;
