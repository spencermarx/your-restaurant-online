const express = require('express');

const router = express.Router();

// =================
// INDEX ROUTING
// =================

// LANDING - Index Route
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
