// =================
// DOTENV SETUP
// =================
const mongoose = require('mongoose');

// Set up Mongoose Data Schemas
const inquirySchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
  dateSubmitted: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Inquiry', inquirySchema);
