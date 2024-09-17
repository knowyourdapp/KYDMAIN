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



// Configure Multer for File Uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Store files directly in 'uploads'
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique filenames
    }
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', require('./routes/auth'));

// Define Schema
const ratingSchema = new mongoose.Schema({
    username: String,
    dappImage: String,
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
    const { username, dappImage, dapp, rating, comment } = req.body;

    try {
        const newRating = new Rating({ username, dappImage, dapp, rating, comment });
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
  
    screenshots: [String],
    video: [String],
    chains: [String],
  });
  
const FormDataModel = mongoose.model('FormData', formDataSchema);

// Handle Form Data with File Uploads
app.post('/api/form', upload.fields([
    
    { name: 'screenshots', maxCount: 10 },
    { name: 'video', maxCount: 10 }
]), async (req, res) => {
    try {
        const { name, website, projectStatus, shortTeaser, isFounderDoxxed, description, categoryName, categoryType, categoryDescription, primaryNetwork, tokenAddress, isTokenAudited, coinListings, socialLinks, chains } = req.body;
        
        const formData = new FormDataModel({
            name,
            website,
            projectStatus,
            shortTeaser,
            isFounderDoxxed,
            description,
            categoryName,
            categoryType,
            categoryDescription,
            primaryNetwork,
            tokenAddress,
            isTokenAudited,
            coinListings,
            socialLinks,
            chains,
           
            screenshots: req.files.screenshots ? req.files.screenshots.map(file => file.filename) : [],
            video: req.files.video ? req.files.video.map(file => file.filename) : []
     
            
        });

        await formData.save();
        res.status(200).send('Form data saved successfully');
    } catch (error) {
        res.status(500).send('Error saving form data');
    }
});

app.get('/api/forms', async (req, res) => {
    try {
        const formDataList = await FormDataModel.find();
        res.json(formDataList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));