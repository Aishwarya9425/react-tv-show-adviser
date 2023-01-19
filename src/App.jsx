import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import LogoImage from "./assets/images/logo.png";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]); //get only the first tv
    }
  }

  async function fetchRecommendations(tvShowId) {
    const popularRecommendations = await TVShowAPI.fetchRecommendations(
      tvShowId
    );
    if (popularRecommendations.length > 0) {
      setRecommendationList(popularRecommendations.slice(0, 10)); //get only the first tv
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]); //listen to current TV show changes

  console.log("currentTVShow is ", currentTVShow); //1st render is undefined

  console.log("recommendationList is ", recommendationList);

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
            <Logo
              img={LogoImage}
              title="Watch to watch?"
              subtitle="Find a show you may like"
            />
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
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <>
            <TVShowListItem
              tvShow={currentTVShow}
              onClick={(tvShow) => {
                console.log(tvShow, " has been clicked");
              }}
            />

            <TVShowListItem
              tvShow={currentTVShow}
              onClick={(tvShow) => {
                console.log(tvShow, " has been clicked");
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
