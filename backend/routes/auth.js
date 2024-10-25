const express = require('express');
const { signup, login } = require('../controllers/authController');

const router = express.Router();
const { getUsername } = require('../controllers/authController');
const fetch = require('node-fetch');
require('dotenv').config();


const WEBACY_API_KEY = process.env.WEBACY_API_KEY; 

router.post('/url', async (req, res) => {
    const { url } = req.body;
  
    try {
      const response = await fetch('https://api.webacy.com/url', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'Authorization': `Bearer ${process.env.WEBACY_API_KEY}`, // Your API key
        },
        body: JSON.stringify({ url }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json(data);
      }
    } catch (error) {
      console.error('Error fetching risk score:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
router.post('/get-username', getUsername);

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
