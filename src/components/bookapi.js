import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ci22p633d2xBXA8kiP2d';

const bookService = {
  async getBooks() {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  },

  async addBook(book) {
    const response = await axios.post(`${API_URL}/books`, book);
    return response.data;
  },

  async deleteBook(id) {
    const response = await axios.delete(`${API_URL}/books/${id}`);
    return response.data;
  },
};

export default bookService;
