// routes/books.js
router.get('/', booksController.getAllBooks);

// controllers/booksController.js
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
