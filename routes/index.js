const express = require('express');
const router = express.Router();

const imgur = require('../services/imgur');

router.get('/', (req, res) => {
  res.send('Hello');
});

router.get('/latest', (req, res) => {
});

router.get('/search/:q', (req, res) => {
  imgur.getImage(req.params.q, req.query.offset).then(ans => {
    res.json(ans);
  })
});

module.exports = router;
