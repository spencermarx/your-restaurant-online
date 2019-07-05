const express = require('express');

const router = express.Router();

// =================
// API ROUTING
// =================

// LANDING - Index Route
router.post('/inquiry', (req, res) => {
  const clientMessage = req.body;
  console.log(clientMessage);

  // TODO: Finish setting up AJAX form submission

  //   res.status(200).send({
  //     action: 'Success!',
  //   });
});

// TODO: Set up automated emailing to both parties

module.exports = router;
