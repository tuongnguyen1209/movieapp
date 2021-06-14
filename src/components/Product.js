import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import movieAPI from "../apis/movieApis";
import Movie from "./Layout/Movie/Movie";

function Product() {
  const { _id } = useParams();
  const [datas, setDatas] = useState({});
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    movieAPI.getMovie(_id).then((result) => {
      let newData = result.data;
      setDatas(newData);
    });

    return () => {
      setDatas([]);
    };
  }, [_id]);

  useEffect(() => {
    let index = datas.listCategories
      ? Math.trunc(Math.random() * datas.listCategories.length)
      : 1;
    let cate = datas.listCategories ? datas.listCategories[index].nameCate : "";
    const params = {
      limit: 15,
      "listCategories[nameCate]": cate,
      fields: "title,titleEnglish,img,time",
    };
    console.log(cate, params);
    if (cate !== "") {
      movieAPI.getAllMovie(params).then((result) => {
        // console.log(result);
        setListMovie(result.data.listMovie);
      });
    }
  }, [datas]);
  return (
    <div>
      <Movie datas={datas} listRelatedMovies={listMovie} />
    </div>
  );
}

export default Product;
