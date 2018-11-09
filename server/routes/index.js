const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const results = await db.query('SELECT * FROM strings');
    return res.status(201).json(results.rows);
  } catch (error) {
    return next(error);
  }
});

router.post('/add-string', async (req, res, next) => {
  try {
    const results = await db.query(
      'INSERT INTO strings (string) VALUES ($1) RETURNING *',
      [req.body.string],
    );
    return res.status(201).json(results.rows[0]);
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
