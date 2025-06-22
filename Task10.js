// bookService.js
const axios = require('axios');
const BASE_URL = 'http://localhost:3000/books';

// Task 10: Get all books – Using async callback function
async function getAllBooks() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching all books:', error.message);
    throw error;
  }
}

// Task 11: Search by ISBN – Using Promises
function getBookByISBN(isbn) {
  return axios.get(`${BASE_URL}/isbn/${isbn}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching book by ISBN:', error.message);
      throw error;
    });
}

// Task 12: Search by Author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/author/${author}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books by author:', error.message);
    throw error;
  }
}

// Task 13: Search by Title
function getBooksByTitle(title) {
  return axios.get(`${BASE_URL}/title/${title}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching books by title:', error.message);
      throw error;
    });
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};