import axios from "axios";
import { FAKE_POPULARS } from "./fake_data";
import { BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL } from "../config";
export class TVShowAPI {
  static async fetchPopulars() {
    //URL--> https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
    //API Key --> d415fbd52be87cdb36283b250c0839bf

    // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    // console.log("response.data.results --> ", response.data.results);
    // return response.data.results;
    return FAKE_POPULARS;
    //send request
    //return the response
  }
}
