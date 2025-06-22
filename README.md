# Developing-Back-End-Apps-with-Node.js-and-Express

## Overview

This project implements a complete bookstore API with user authentication and book management features. It's built with Node.js, Express, and MongoDB, following RESTful principles.

## Features

- **Book Management**:
  - Get all books
  - Search by ISBN, author, or title
  - Add/modify reviews
  - Delete reviews
- **User Authentication**:
  - User registration
  - Login with JWT
  - Protected routes
- **Async Operations**:
  - Implemented with both Promises and Async/Await
  - Axios for HTTP requests

## Technologies Used

- **Backend**:
  - Node.js
  - Express
  - MongoDB (Mongoose)
  - JWT Authentication
  - Bcrypt for password hashing
- **Testing**:
  - Axios for API calls
  - Postman for endpoint testing

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bookstore-api.git
   cd bookstore-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/bookstore
   JWT_SECRET=your-secret-key
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Books
- `GET /books` - Get all books
- `GET /books/isbn/:isbn` - Get book by ISBN
- `GET /books/author/:author` - Get books by author
- `GET /books/title/:title` - Get books by title
- `GET /books/:id/reviews` - Get book reviews
- `POST /books/:id/reviews` - Add/modify review (authenticated)
- `DELETE /books/:id/reviews` - Delete review (authenticated)

### Users
- `POST /users/register` - Register new user
- `POST /users/login` - Login user

## Search Implementations

### 1. Search by ISBN (Promises)
```javascript
// Using Promises
function searchByISBN(isbn) {
  return axios.get(`/books/isbn/${isbn}`)
    .then(response => response.data)
    .catch(error => {
      throw new Error('Book not found');
    });
}
```

### 2. Search by Author (Async/Await)
```javascript
// Using Async/Await
async function searchByAuthor(author) {
  try {
    const response = await axios.get(`/books/author/${author}`);
    return response.data;
  } catch (error) {
    throw new Error('No books found by this author');
  }
}
```

### 3. Search by Title (Promises)
```javascript
// Using Promises
function searchByTitle(title) {
  return axios.get(`/books/title/${title}`)
    .then(response => response.data)
    .catch(error => {
      throw new Error('No books found with this title');
    });
}
```

## Project Structure

```
bookstore-api/
├── controllers/       # Business logic
├── models/            # Database models
├── routes/            # API endpoints
├── middlewares/       # Authentication middleware
├── services/          # Search implementations
├── server.js          # Main application file
├── package.json
└── README.md
```

## Screenshots

[Include screenshots of:
1. Successful API responses
2. Error handling cases
3. Authentication flow
4. Search functionality]

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/bookstore-api](https://github.com/yourusername/bookstore-api)
