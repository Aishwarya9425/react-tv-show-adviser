import axios from "axios";
export class TVShowAPI {
  static async fetchPopulars() {
    //URL--> https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
    //API Key --> d415fbd52be87cdb36283b250c0839bf

    const BASE_URL = "https://api.themoviedb.org/3/";
    const API_KEY_PARAM = "?api_key=d415fbd52be87cdb36283b250c0839bf";

    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    console.log("response.data.results --> ", response.data.results);
    return response.data.results;
    //send request
    //return the response
  }
}
