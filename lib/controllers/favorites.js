const { default: axios } = require('axios');
const { Router } = require('express');
const Favorite = require('../models/Favorite');
const pool = require('../utils/pool');

module.exports = Router()
  .post('/', async (req, res, next) => {
    // Favorite.create(req.body)
    try {
      const { rows } = await pool.query(
        `INSERT INTO favorites 
        (favorite_jokes, user_name) 
        VALUES ($1,$2) 
        RETURNING *`,
        [req.body.favoriteJoke, req.body.userName]
      );
        console.log(rows[0]);
        res.send(rows[0]);
  
      } catch (err) {
  
        next(err)
      }
  });