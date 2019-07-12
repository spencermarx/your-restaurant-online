const express = require('express');

const router = express.Router();
const validateForm = require('../helpers/formValidation.js');

// =================
// API ROUTING
// =================

// LANDING - Index Route
router.post('/inquiry', (req, res) => {
  const clientMessage = req.body;
  // console.log(clientMessage);
  const validForm = validateForm.isValidForm(clientMessage);
  console.log(validForm);

  if (validForm) {
    res.status(200).send({
      data: 'success',
    });
  } else {
    res.status(200).send({
      data: 'fail',
    });
  }
});

// TODO: Set up automated emailing to both parties

module.exports = router;
