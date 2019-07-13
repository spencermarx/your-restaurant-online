// =================
// Helper - Form Validation
// =================

const validateForm = {};

// Form validation - Check empty values
validateForm.checkEmptyValues = function(inquiryFormData) {
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
};

// Form validation - Check email with Regex
validateForm.checkEmail = function(inquiryFormData) {
  const { email } = inquiryFormData;
  if (email && email.length > 0) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  return false;
};

// Validate Form - Returns true if form is valid
validateForm.isValidForm = function(inquiryFormData) {
  let validationTracker = false;
  // Check empty values
  const emptyValues = parseInt(
    this.checkEmptyValues(inquiryFormData).emptyValues
  );
  const validEmail = this.checkEmail(inquiryFormData);
  // console.log(emptyValues);
  // console.log(validEmail);
  if (emptyValues === 0 && validEmail) {
    validationTracker = true;
  }
  return validationTracker;
};

module.exports = validateForm;
