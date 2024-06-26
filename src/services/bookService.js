import axios from "axios";

const BASE_URL = "https://book-e-sell-node-api.vercel.app/api/book";

class BookService {
  SearchBook = async (payload) => {
    return axios.get(`${BASE_URL}/search?keyword=${payload}`);
  };

  GetAllBooks = async (params) => {
    return axios.get(`${BASE_URL}`, { params });
  };

  Save = async (payload) => {
    return axios.post(BASE_URL, payload);
  };

  GetBookById = async (id) => {
    return axios.get(`${BASE_URL}/byId?id=${id}`);
  };

  UpdateBook = async (payload) => {
    return axios.put(BASE_URL, payload);
  };

  DeleteBook = async (id) => {
    return axios.delete(`${BASE_URL}?id=${id}`);
  };
}

// eslint-disable-next-line
export default new BookService();
