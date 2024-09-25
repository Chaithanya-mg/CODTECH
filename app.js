const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(cors());
app.use(express.json());  // To parse JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mern-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/posts', postRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
