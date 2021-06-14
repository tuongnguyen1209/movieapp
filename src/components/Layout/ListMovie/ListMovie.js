import React from "react";
import { Link } from "react-router-dom";

import { List, ListMovieItem } from "./style";

function ListMovie(props) {
  return (
    <List>
      <div className="playname">{props.title}</div>
      <ListMovieItem>
        {props.listItem &&
          props.listItem.map((value, index) => (
            <div className="movie-item" key={index}>
              <Link to={`./../phim/${value._id}`} title={value.name}>
                <div className="image">
                  <img src={value.img} alt="" className="card-movie-img" />
                  <div className="icon-play">
                    <i className="far fa-play-circle"></i>
                  </div>
                </div>
                <div className="card-movie-info">
                  <p className="card-movie-name">{value.title}</p>
                  <p>{value.titleEnglish}</p>
                  <div className="func">
                    <div className="views">
                      <span>{value.time.replace(value.year, "")}</span>
                      <span>{value.year}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </ListMovieItem>
    </List>
  );
}

export default ListMovie;
