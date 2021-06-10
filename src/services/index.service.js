import Axios from "axios";

class IndexService {
  async getBands() {
    try {
      let res = await Axios.get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/bands`
      );
      return res;
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async getBandsForPages(page) {
    try {
      let res = await Axios.get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/bands?_page=${page}&_limit=8`
      );
      return res;
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async getGenre() {
    try {
      let res = await Axios.get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/genre`
      );
      return res;
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async getGenreWithCode(code) {
    try {
      let res = await Axios.get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/genre?code=${code}`
      );
      return res;
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async getBandsForGenre(code) {
    try {
      let res = await Axios.get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/bands?genreCode=${code}`
      );
      return res;
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async getBandForId(id) {
    try {
      let res = await Axios.get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/bands?id=${id}`
      );
      return res;
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async getAlbumForBandId(id) {
    try {
      let res = await Axios.get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/albums?bandId=${id}`
      );
      return res;
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async getBandsSort(order) {
    try {
      let res = await Axios.get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/bands?_sort=name&_order=${order}`
      );
      return res;
    } catch (error) {
      console.log("error: ", error);
    }
  }
}

export default new IndexService();
