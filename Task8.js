// routes/books.js
router.post('/:id/reviews', authenticate, booksController.addOrUpdateReview);

// controllers/booksController.js
exports.addOrUpdateReview = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const { text, rating } = req.body;
    const userId = req.user.userId;

    // Check if review exists
    const existingReviewIndex = book.reviews.findIndex(
      review => review.user.toString() === userId
    );

    if (existingReviewIndex >= 0) {
      // Update existing review
      book.reviews[existingReviewIndex] = {
        user: userId,
        text,
        rating,
        updatedAt: Date.now()
      };
    } else {
      // Add new review
      book.reviews.push({
        user: userId,
        text,
        rating
      });
    }

    await book.save();
    res.json(book.reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};