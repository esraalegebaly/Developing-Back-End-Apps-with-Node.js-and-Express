// routes/books.js
router.post('/:id/reviews', authenticate, booksController.addOrUpdateReview);

// routes/books.js
router.delete('/:id/reviews', authenticate, booksController.deleteReview);

// controllers/booksController.js
exports.deleteReview = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const userId = req.user.userId;
    const initialLength = book.reviews.length;
    
    book.reviews = book.reviews.filter(
      review => review.user.toString() !== userId
    );

    if (book.reviews.length === initialLength) {
      return res.status(404).json({ message: 'Review not found' });
    }

    await book.save();
    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};