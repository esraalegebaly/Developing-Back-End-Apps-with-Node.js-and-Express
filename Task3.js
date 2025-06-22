// routes/books.js
router.get('/author/:author', booksController.getBooksByAuthor);

// controllers/booksController.js
exports.getBooksByAuthor = async (req, res) => {
  try {
    const books = await Book.find({ author: req.params.author });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};