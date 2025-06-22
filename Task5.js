// routes/books.js
router.get('/:id/reviews', booksController.getBookReviews);

// controllers/booksController.js
exports.getBookReviews = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book.reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};