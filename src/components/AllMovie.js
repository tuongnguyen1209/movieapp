import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import movieAPI from "../apis/movieApis";
import ListMovie from "./Layout/ListMovie/ListMovie";

function AllMovie(props) {
  const location = useLocation();
  // querystring

  const query = queryString.parse(location.search);
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const [maxpage, setMaxpage] = useState(1);

  useEffect(() => {
    getmovie();
    return () => {
      setData({});
      setPage(1);
    };
  }, [query.cate, query.country, query.kw]);

  const getmovie = (newpage = page) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    let param = {
      page: newpage,
      limit: 20,
      fields: "title,titleEnglish,img,time,year",
    };
    if (query.kw) {
      const kw = query.kw ? query.kw.trim() : "";
      let newparam = { ...param };
      param = {
        ...newparam,
        title: kw,
      };
      setTitle(`Kết quả tìm kiếm cho ${kw}`);
    } else {
      const name = query.cate ? query.cate.trim() : "";
      const country = query.country ? query.country.trim() : "";
      setTitle("Tất Cả Phim");
      if (name !== "") {
        let newparam = { ...param };
        param = {
          ...newparam,
          "listCategories[nameCate]": name,
        };
        setTitle(`Kết quả hiển thị cho ${name}`);
      }
      if (country !== "") {
        let newparam = { ...param };
        param = {
          ...newparam,
          "listCountries[country]": country,
        };
        setTitle(`Kết quả hiển thị cho '${country}'`);
      }
    }

    movieAPI.getAllMovie(param).then((result) => {
      setData(result.data);
      setMaxpage(result.maxPage);
    });
  };
  const loadMore = async () => {
    if (page + 1 <= maxpage) {
      let newPage = page + 1;
      setPage(newPage);
      getmovie(newPage);
    }
  };
  const loadpri = () => {
    if (page - 1 >= 1) {
      let newPage = page - 1;
      setPage(newPage);
      getmovie(newPage);
    }
  };

  return (
    <div
      style={{
        marginTop: "6%",
      }}
    >
      <ListMovie title={title} listItem={data.listMovie} />
      <div
        className="loadding"
        style={{
          textAlign: "center",
          padding: "15px",
        }}
      >
        {page !== 1 && (
          <button
            onClick={loadpri}
            style={{
              background: "#febb00",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              color: "black",
              boxShadow: "1px 1px 1px gray",
              cursor: "pointer",
              marginRight: "5px",
            }}
          >
            Previous
          </button>
        )}
        {page !== maxpage && (
          <button
            onClick={loadMore}
            style={{
              background: "#febb00",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              color: "black",
              boxShadow: "1px 1px 1px gray",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default AllMovie;
