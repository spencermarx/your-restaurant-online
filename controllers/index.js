const express = require('express');

const router = express.Router();

// =================
// INDEX ROUTING
// =================

// LANDING - Index Route
router.get('/', (req, res) => {
  res.render('index');
});

// SSL Verification
app.get(
  '/.well-known/acme-challenge/YMharxgU-_sG47xBMtKRcLNe2rQQ8rvMg8YZ9XabfMs',
  function(req, res) {
    res.send(
      'YMharxgU-_sG47xBMtKRcLNe2rQQ8rvMg8YZ9XabfMs.o_97jTnYZ7-JvFgisMKx0sRWdIxyq7T2KStlQ-McVUY'
    );
  }
);

module.exports = router;
