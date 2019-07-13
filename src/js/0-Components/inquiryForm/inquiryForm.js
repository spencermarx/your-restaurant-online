// ======================
// COMPONENT - Inquiry Form
// ======================

// Select Inquiry Form Button (Jquery)
const $inquiryFormButton = $('.sm--inquiry__submit-button');

// AJAX form submission function (Jquery)
function ajaxSubmitInquiryForm(event) {
  // console.log('Beginning Ajax submission');

  // stop the form from submitting the normal way and refreshing the page
  event.preventDefault();

  // get the form data
  const inquiryFormData = {
    firstName: $('input[name=firstName]').val(),
    lastName: $('input[name=lastName]').val(),
    email: $('input[name=email]').val(),
    message: $('textarea[name=message]').val(),
  };

  // Form validation process
  const validation = validForm.isValidForm(inquiryFormData);
  // console.log(validation);

  if (validation) {
    // process the form
    $.ajax({
      type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
      url: '/api/inquiry', // the url where we want to POST
      data: inquiryFormData, // our data object
      dataType: 'json', // what type of data do we expect back from the server
      encode: true,
      beforeSend: () => {
        // Show image container
        formAnimation.start();
      },
    })
      // using the done promise callback
      .done(function(result) {
        // Final Animation and Error handling
        formAnimation.finish(result);
      });
  }
}

// Start listeners once page is loaded
$(document).ready(function() {
  // Add event listener for button
  $inquiryFormButton.on('click.handleInquiryForm', function(event) {
    ajaxSubmitInquiryForm(event);
  });
});
