import axios from "axios";

export default class HttpRequest {
  #url;

  constructor() {
    // this.#url = process.env.NEXT_PUBLIC_BACKEND_API;
    this.#url = "http://localhost:8000";
  }

  async get(endpoint, payload) {
    try {
      console.log(`${this.#url}/${endpoint}`);

      const response = await axios.get(`${this.#url}/${endpoint}`, {
        params: {
          ...payload,
        },
      });

      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }

  async post(endpoint, payload) {}

  async patch(endpoint, payload) {}

  async delete(endpoint, payload) {}
}
