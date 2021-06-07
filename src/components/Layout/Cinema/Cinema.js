import React from "react";
import { Link } from "react-router-dom";
import coca from "../../../assets/images/drink.png";
import bap from "../../../assets/images/klipartz.png";
import { CinemaHeader, ImgPorster, ListItem, WrapCinema } from "./style";

function Cinema(props) {
  return (
    <WrapCinema>
      <CinemaHeader>
        <h3>Phim Chiếu rạp</h3>
      </CinemaHeader>
      <ListItem>
        {props.list.map((value, index) => (
          <div className="item" key={index}>
            <Link to={`phim${value.link}`}>
              <div className="wrap">
                <div className="img">
                  <img src={value.img} alt="" />
                </div>
                <div className="info">
                  <h4 className="title">{value.name}</h4>
                  {/* <p className="rank" v-if="item.rank!=''">
                    {value.rank}
                  </p> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </ListItem>
      <ImgPorster>
        <div className="image left">
          <img src={bap} alt="Foot" />
        </div>
        <div className="image right">
          <img src={coca} alt="Drinking" />
        </div>
      </ImgPorster>
    </WrapCinema>
  );
}

export default Cinema;
