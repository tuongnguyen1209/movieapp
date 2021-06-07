import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import movieAPI from "../apis/movieApis";
import Movie from "./Layout/Movie/Movie";

function Product() {
  const { namemovie } = useParams();
  const [datas, setDatas] = useState({});

  useEffect(() => {
    movieAPI.getMovie(namemovie).then((result) => {
      let newData = result.data;
      setDatas(newData);
    });

    return () => {
      setDatas([]);
    };
  }, [namemovie]);

  return (
    <div>
      <Movie datas={datas} />
    </div>
  );
}

export default Product;
