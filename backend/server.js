
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();

// Database
connectDB();


app.use(express.json());
app.use(cors());


app.use('/uploads', express.static('uploads'));
// Routes
app.use('/api/auth', require('./routes/auth'));



// Define Schema
const ratingSchema = new mongoose.Schema({
    username: String,
    dapp: String,
    rating: { type: Number, min: 1, max: 10 },
    comment: String
});

const Rating = mongoose.model('Rating', ratingSchema);

// Get all ratings
app.get('/api/ratings', async (req, res) => {
    try {
        const ratings = await Rating.find();
        res.json(ratings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.post('/api/ratings', async (req, res) => {
    const { username, dapp, rating, comment } = req.body;

    try {
        const newRating = new Rating({ username, dapp, rating, comment });
        await newRating.save();
        res.status(201).json(newRating);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

const formDataSchema = new mongoose.Schema({
    name: String,
    website: String,
    projectStatus: String,
    shortTeaser: String,
    isFounderDoxxed: String,
    description: String,
    categoryName: String,
    categoryType: String,
    categoryDescription: String,
    primaryNetwork: String,
    tokenAddress: String,
    isTokenAudited: String,
    coinListings: String,
    socialLinks: {
      telegram: String,
      twitter: String,
      discord: String,
      facebook: String,
      youtube: String,
      reddit: String,
      mastodon: String,
      lenster: String,
      medium: String,
    },
    logo: [String],
    screenshots: [String],
    video: [String],
    chains: [String],
  });
  
  const FormDataModel = mongoose.model('FormData', formDataSchema);

app.post('/api/form', async (req, res) => {
    try {
      const formData = new FormDataModel(req.body);
      await formData.save();
      res.status(200).send('Form data saved successfully');
    } catch (error) {
      res.status(500).send('Error saving form data');
    }
  });


  app.get('/api/forms', async (req, res) => {
    try {
        const formDataList = await FormDataModel.find(); // This retrieves all documents in the collection
        res.json(formDataList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
