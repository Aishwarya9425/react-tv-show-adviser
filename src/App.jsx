import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]); //get only the first tv
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log("currentTVShow is ", currentTVShow); //1st render is undefined

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
        url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      {/* header section */}
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>LOGO</div>
            <div>Subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: " 100%" }} type="text" />
          </div>
        </div>
      </div>

      {/* TV Show details Section */}
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>

      {/* Recommended Section */}
      <div className={s.recommended_tv_shows}>Recommended TV Shows..</div>
    </div>
  );
}
