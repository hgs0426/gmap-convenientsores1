// index.js
const express = require('express');
const db = require('../models/db');
const router = express.Router();

router.get('/', function(req, res, next) {

  db.getLngLat(
    (err)=> {
      return next(err);
    },
    (rows)=> {
      console.log('rows:',rows);
      // res.send('ok');
      res.render('index', {rows:rows});
    });
});

module.exports = router;
