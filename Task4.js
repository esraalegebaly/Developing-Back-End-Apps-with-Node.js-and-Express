// routes/books.js
router.get('/title/:title', booksController.getBooksByTitle);

// controllers/booksController.js
exports.getBooksByTitle = async (req, res) => {
  try {
    const books = await Book.find({ title: req.params.title });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};