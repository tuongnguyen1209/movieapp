import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import movieAPI from "../apis/movieApis";
import ListMovie from "./Layout/ListMovie/ListMovie";

function AllMovie(props) {
  const { link1, link2 } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    let newLink1 = link1 || "";
    let newLink2 = link2 || "";
    movieAPI.getAllMovie(newLink1, newLink2).then((result) => {
      setData(result.data);
    });

    return () => {
      setData({});
    };
  }, [link1, link2]);
  return (
    <div>
      <ListMovie title={data.title} listItem={data.listMovie} />
    </div>
  );
}

export default AllMovie;
