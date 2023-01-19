import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import LogoImage from "./assets/images/logo.png";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]); //get only the first tv
      }
    } catch (error) {
      alert(
        "Something went wrong when fetching popular TV Shows!! : Error --> " + error.message
      );
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const popularRecommendations = await TVShowAPI.fetchRecommendations(
        tvShowId
      );
      if (popularRecommendations.length > 0) {
        setRecommendationList(popularRecommendations.slice(0, 10)); //get only the first tv
      }
    } catch (error) {
      alert(
        "Something went wrong when fetching recommendations : Error --> " + error.message
      );
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {alert(
      "Something went wrong when searching movie : Error --> " + error.message
    );}
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

  //update current bkg tv show when you click on the recommendation movie
  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

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
              title="Not sure what to watch?🤔"
              subtitle="Find a show that you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
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
          <TVShowList
            onClickItem={updateCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}
