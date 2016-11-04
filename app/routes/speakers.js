/**
 * Created by Sven on 11/4/16.
 */
const express = require('express'),
      router  = express.Router();


router.get('/speakers', function(req, res) {
  let dataFile = req.app.get('appData');
  let info = '';
  dataFile.speakers.forEach(function(item) {
    info += `
    <li>
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
    </li>
    `;
  });
  res.send(`
      <h1>Roux Academy Meetups</h1>
      ${info}
  `);
});

router.get('/speakers/:speakerid', function(req, res) {
  let dataFile = req.app.get('appData');
  let speaker = dataFile.speakers[req.params.speakerid];
  res.send(`
      <h1>${speaker.title}</h1>
      <h2>with ${speaker.name}</h2>
      <p>${speaker.summary}</p>
  `);
});

module.exports = router;