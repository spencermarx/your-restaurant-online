const express = require('express');

const router = express.Router();
const validateForm = require('../helpers/formValidation.js');

// =================
// API ROUTING
// =================

// LANDING - Index Route
router.post('/inquiry', (req, res) => {
  // Get client message
  const clientMessage = req.body;
  console.log(clientMessage);

  // Validate form
  const validForm = validateForm.isValidForm(clientMessage);
  console.log(validForm);

  if (validForm) {
    // Valid form ->

    // Save to database

    // Send email

    // Send response status as success
    res.status(200).send({
      data: 'success',
    });
  } else {
    // Invalid form ->

    // Send response status as failed
    res.status(200).send({
      data: 'fail',
    });
  }
});

// TODO: Set up automated emailing to both parties

module.exports = router;
