// ======================
// COMPONENT - Inquiry Form
// ======================

// Select Inquiry Form (Jquery)
const $inquiryForm = $('.sm--inquiry__form');
// Select Inquiry Form Button (Jquery)
const $inquiryFormButton = $('.sm--inquiry__submit-button');

// AJAX form submission function (Jquery)
function ajaxSubmitInquiryFrom(event) {
  console.log('Beginning Ajax submission');

  // stop the form from submitting the normal way and refreshing the page
  event.preventDefault();

  // get the form data
  const inquiryFormData = {
    firstName: $('input[name=firstName]').val(),
    lastName: $('input[name=lastName]').val(),
    email: $('input[name=email]').val(),
    message: $('textarea[name=message]').val(),
  };

  console.log(inquiryFormData);

  // process the form
  $.ajax({
    type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
    url: '/api/inquiry', // the url where we want to POST
    data: inquiryFormData, // our data object
    dataType: 'json', // what type of data do we expect back from the server
    encode: true,
  })
    // using the done promise callback
    .done(function(result) {
      // log data to the console so we can see
      console.log(result);
      // here we will handle errors and validation messages
    });
}

// Start listeners once page is loaded
$(document).ready(function() {
  // Add event listener for button
  $inquiryFormButton.click(function(event) {
    ajaxSubmitInquiryFrom(event);
  });
});
