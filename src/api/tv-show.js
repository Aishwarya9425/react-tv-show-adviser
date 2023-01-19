import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL } from "../config";

//URL--> https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
//API Key --> d415fbd52be87cdb36283b250c0839bf

//get popular background tv show
export class TVShowAPI {
  static async fetchPopulars() {
    try {
      const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
      console.log("response.data.results --> ", response.data.results);
      return response.data.results;
    } catch (error) {
      alert(
        "Something went wrong when fetching popular TV Shows!! : Error --> " +
          error.message
      );
    }

    // return FAKE_POPULARS;
    //send request
    //return the response
  }

  //recommended tv shows section
  static async fetchRecommendations(tvShowId) {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
      );
      console.log("fetchRecommendations --> ", response.data.results);
      return response.data.results;
    } catch (error) {
      alert(
        "Something went wrong when fetching recommendations : Error --> " +
          error.message
      );
    }

    // return FAKE_RECOMMENDATIONS;
  }

  //search tv shows..
  static async fetchByTitle(title) {
    try {
      const response = await axios.get(
        `${BASE_URL}/search/tv${API_KEY_PARAM}&query=${title}`
      );
      console.log("fetchRecommendations --> ", response.data.results);
      return response.data.results;
    } catch (error) {
      alert(
        "Something went wrong when fetching popular TV Shows!! : Error --> " +
          error.message
      );
    }

    // return FAKE_RECOMMENDATIONS;
  }
}
