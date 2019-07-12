// ======================
// COMPONENT - Inquiry Form
// ======================

// Select Inquiry Form (Jquery)
const $inquiryForm = $('.sm--inquiry__form');
// Select Inquiry Form Button (Jquery)
const $inquiryFormButton = $('.sm--inquiry__submit-button');
// Select Inquiry Form Input Groups (Jquery)
const $inquiryFormInputGroups = $('.sm--inquiry__form .form-group');

// Base loader HTML
const loaderHTML =
  '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';

//   Base Check mark HTML
const checkmarkHTML = `<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>`;

//   Base Error mark HTML
const errormarkHTML = `<svg class="errormark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
<circle class="errormark__circle" cx="26" cy="26" r="25" fill="none"></circle>
<path class="errormark__x" fill="none" d="M16 16 36 36 M36 16 16 36"></path>
</svg>`;

// Base Load Message Header HTML
function loadMessageHeaderHTML(loaderMessage, err) {
  // console.log(err);
  if (!err) {
    return `<div class="sm--inquiry__loading-message-header"><h2>${loaderMessage}</h2><div>`;
  }
  return `<div class="sm--inquiry__loading-message-header-error"><h2>${loaderMessage}</h2><div>`;
}
// Base Load Message Body HTML
function loadMessageBodyHTML(loaderMessage) {
  return `<div class="sm--inquiry__loading-message-body"><p>${loaderMessage}</p><div>`;
}
// Form validation - Check empty values
function validateFormCheckEmptyValues(inquiryFormData) {
  const emptyValuesTracker = {
    emptyValues: 0,
  };
  const inputArray = Object.keys(inquiryFormData);
  for (let i = 0; i < inputArray.length; i++) {
    // console.log(inquiryFormData[inputArray[i]]); // value
    // console.log(inquiryFormData[inputArray[i]].length); // value
    if (
      !inquiryFormData[inputArray[i]] ||
      inquiryFormData[inputArray[i]].length < 1
    ) {
      emptyValuesTracker.emptyValues += 1;
      emptyValuesTracker[inputArray[i]] = false;
    } else {
      emptyValuesTracker[inputArray[i]] = true;
    }
  }
  return emptyValuesTracker;
}

// Form validation
function validForm(inquiryFormData) {
  // Check empty values
  const emptyValues = parseInt(
    validateFormCheckEmptyValues(inquiryFormData).emptyValues
  );
  console.log(emptyValues);
  if (emptyValues === 0) {
    return true;
  }
  return false;
}

// Remove loader and loader message
function modifyLoadingElements(loaderMessageHeader, loaderMessageBody, err) {
  // Remove loader
  const $loader = $('.lds-roller');
  $loader.remove();

  //   Remove initial loading message
  const $loaderMessageHeader = $('.sm--inquiry__loading-message-header');
  const $loaderMessageBody = $('.sm--inquiry__loading-message-body');
  $loaderMessageHeader.remove();
  $loaderMessageBody.remove();

  //   Add new loader message
  $inquiryForm.prepend(loadMessageHeaderHTML(loaderMessageHeader, err));
  $inquiryForm.prepend(loadMessageBodyHTML(loaderMessageBody));
}

// Success Animation - Sequence
function playCheckMarkAnimation() {
  // Prepend Loader
  $inquiryForm.prepend(checkmarkHTML);
}
// Failure Animation - Sequence
function playErrorMarkAnimation() {
  // Prepend Loader
  $inquiryForm.prepend(errormarkHTML);
}

// Reset Inquiry Form
function resetInquiryForm() {
  // Clear animation svgs
  $('.sm--inquiry__form svg').remove();

  // Clear messages
  $('.sm--inquiry__loading-message-header-error').remove();
  $('.sm--inquiry__loading-message-body').remove();

  // Fade In Fields
  $inquiryFormInputGroups.removeClass('sm--inquiry__form-fields-fade');

  //  Reset button
  $inquiryFormButton.removeClass('sm--inquiry__submit-button-fail'); // Disable
  $inquiryFormButton.addClass('sm--inquiry__submit-button'); // Disable
  $inquiryFormButton.text('Request Free Intro Call');

  // Turn old listener on
  $inquiryFormButton.on('click.handleInquiryForm', function(event) {
    ajaxSubmitInquiryForm(event);
  });
}

// AJAX form - Start Animation
function startFormAnimation() {
  //   Disable button
  $inquiryFormButton.attr('disabled', 'true'); // Disable
  $inquiryFormInputGroups.addClass('sm--inquiry__form-fields-fade');

  const $loader = $('.lds-roller');
  // console.log($loader);

  const $loaderMessage = $('.sm--inquiry__loading-message');
  // console.log($loaderMessage);

  //   Check if already loading
  if ($loader.length < 1 && $loaderMessage.length < 1) {
    setTimeout(function() {
      // Prepend Loader
      $inquiryForm.prepend(loaderHTML);
      //   Prepend Loader Message
      $inquiryForm.prepend(loadMessageHeaderHTML('Sending Message'));
      $inquiryForm.prepend(loadMessageBodyHTML("Won't be long now!"));

      //   Handle Button Events
      $inquiryFormButton.text('Sending request information'); // Update text
    }, 500);
  }
}

// AJAX form - Finish Animation
function finishFormAnimation(result) {
  // console.log(result.data);

  // If successful -> Display new animation
  if (result.data === 'success') {
    setTimeout(function() {
      // Modify Loader and Loading Message
      modifyLoadingElements('Message Sent', "We'll be in touch shortly", false);

      //   Change Button Text
      $inquiryFormButton.text('Completed!');

      playCheckMarkAnimation();
      //   $inquiryFormInputGroups.removeClass('sm--inquiry__form-fields-fade');
    }, 2500);
  } else {
    // If failed -> Try again
    setTimeout(function() {
      // Modify Loader and Loading Message
      modifyLoadingElements(
        'Error Occurred',
        'Try submitting the form again.',
        true
      );

      //   Change Button Text
      //   Disable button
      $inquiryFormButton.removeAttr('disabled'); // Disable
      $inquiryFormButton.removeClass('sm--inquiry__submit-button'); // Disable
      $inquiryFormButton.addClass('sm--inquiry__submit-button-fail'); // Disable
      $inquiryFormButton.text('Try again!');

      playErrorMarkAnimation();
    }, 2500);

    // Turn previous listener off
    $inquiryFormButton.off('click.handleInquiryForm');

    // Turn listener on for reset
    $inquiryFormButton.on('click', function() {
      resetInquiryForm();
    });
  }
}

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
  const validation = validForm(inquiryFormData);
  console.log(validation);

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
        startFormAnimation();
      },
    })
      // using the done promise callback
      .done(function(result) {
        // Final Animation and Error handling
        finishFormAnimation(result);
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
