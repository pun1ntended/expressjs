var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  let data = req.app.get('appData');
  let pagePhotos = [];

  data.speakers.forEach((speaker) => {
    pagePhotos = pagePhotos.concat(speaker.artwork);
  });
  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    pageID: 'home'
  });

});

module.exports = router;
