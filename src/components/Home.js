import React, { useEffect, useState } from "react";
import movieAPI from "../apis/movieApis";
import Carosel from "./Layout/Carosel/Carosel";
import Cinema from "./Layout/Cinema/Cinema";
import ListMovie from "./Layout/ListMovie/ListMovie";
import { motion } from "framer-motion";
import { fadeAnimate, transion } from "../animation/ainmate";
import PWAPrompt from "react-ios-pwa-prompt";

function Home(props) {
  const [listPhimHot, SetListPhimHot] = useState([]);
  const [listPhimLe, SetListPhimLe] = useState([]);
  const [listCinema, SetListCinema] = useState([]);
  const [listPhimBo, SetListPhimBo] = useState([]);

  useEffect(() => {
    // get phim hot
    const paramsPhimHot = {
      limit: 7,
      fields: "title,titleEnglish,img,time,listactors",
    };
    movieAPI.getAllMovie(paramsPhimHot).then((result) => {
      // console.log(result);
      SetListPhimHot(result.data.listMovie);
    });

    //get phim chieu rap
    const paramCinema = {
      limit: 10,
      fields: "title,img",
      "listCategories[nameCate]": "Phim Chiếu Rạp",
    };
    movieAPI.getAllMovie(paramCinema).then((result) => {
      // console.log(result);
      SetListCinema(result.data.listMovie);
    });

    //lay phim le moi
    const paramPhimLe = {
      limit: 10,
      fields: "title,titleEnglish,img,time,year",
    };
    movieAPI.getAllMovie(paramPhimLe).then((result) => {
      SetListPhimLe(result.data.listMovie);
    });

    //lay phim hoat hinh
    const paramHoatHinh = {
      limit: 10,
      fields: "title,titleEnglish,img,time,year",
      "listCategories[nameCate]": "Phim Hoạt hình",
    };
    movieAPI.getAllMovie(paramHoatHinh).then((result) => {
      SetListPhimBo(result.data.listMovie);
    });
  }, []);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={fadeAnimate}
      transition={transion}
    >
      <Carosel list={listPhimHot} listSize={listPhimHot.length} />
      <Cinema list={listCinema} />
      <ListMovie title="Phim Lẻ Mới Cập Nhật" listItem={listPhimLe} />
      <ListMovie title="Phim Hoạt Hình Mới Cập Nhập" listItem={listPhimBo} />

      <PWAPrompt
        promptOnVisit={3}
        timesToShow={1}
        copyClosePrompt="Close"
        copyBody="This website has app functionality. Add it to your home screen to use it in fullscreen."
        permanentlyHideOnDismiss={false}
      />
    </motion.div>
  );
}

export default Home;
