/**
 * Created by Sven on 11/4/16.
 */
const express = require('express'),
      router  = express.Router();

router.get('/', function(req, res) {
  res.send(`
      <h1>Welcome</h1>
      <p>Roux Academy Meetups put together artists from all walks of life</p>
  `);
});

module.exports = router;