import React, { useEffect, useState } from "react";
import movieAPI from "../apis/movieApis";
import Carosel from "./Layout/Carosel/Carosel";
import Cinema from "./Layout/Cinema/Cinema";
import ListMovie from "./Layout/ListMovie/ListMovie";

function Home(props) {
  const [listPhimLe, SetListPhimLe] = useState([]);
  const [listPhimBo, SetListPhimBo] = useState([]);
  const [listPhimHot, SetListPhimHot] = useState([]);
  const [listCinema, SetListCinema] = useState([]);

  useEffect(() => {
    movieAPI.getHome().then((result) => {
      let newData = result.data;
      SetListPhimLe(newData.listPhimLe);
      SetListPhimBo(newData.listPhimBo);
      SetListCinema(newData.ListCinema);
      SetListPhimHot(newData.ListHot);
    });
  }, []);

  return (
    <div>
      <Carosel list={listPhimHot} listSize={listPhimHot.length} />
      <Cinema list={listCinema} />
      <ListMovie title="Phim Lẻ Mới Cập Nhật" listItem={listPhimLe} />
      <ListMovie title="Phim Bộ Mới Cập Nhập" listItem={listPhimBo} />
    </div>
  );
}

export default Home;
