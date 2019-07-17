const express = require('express');

const router = express.Router();
const transporter = require('../helpers/transporter.js');
const generateEmail = require('../helpers/generateEmail.js');
const Inquiry = require('../models/inquiry.js');
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
    Inquiry.create(clientMessage, (err, inquiry) => {
      if (err) {
        console.log(err);
        // Send response status as failed
        res.status(200).send({
          data: 'fail',
        });
      } else {
        console.log(inquiry);
        // Send email
        transporter.sendMail(
          generateEmail.client(
            clientMessage.email, // Target email
            clientMessage.firstName, // Recipient Name
            'hello' // Template
          ),
          function(err, info) {
            if (err) {
              console.log(err);
              // Send response status as failed
              res.status(200).send({
                data: 'fail',
              });
            } else {
              console.log(info);
              // Send response status as success
              res.status(200).send({
                data: 'success',
              });
            }
          }
        );
      }
    });
  } else {
    // Invalid form ->

    // Send response status as failed
    res.status(200).send({
      data: 'fail',
    });
  }
});

module.exports = router;
