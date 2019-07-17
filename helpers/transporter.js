// =================
// Helper - Nodemailer Transporter Configuration
// =================

// Include Nodemailer
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILERUSERNAME,
    pass: process.env.NODEMAILERPASSWORD,
  },
});

module.exports = transporter;
