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

// Validate Form - Returns true if form is valid
validateForm.isValidForm = function(inquiryFormData) {
  let validationTracker = false;
  // Check empty values
  const emptyValues = parseInt(
    this.checkEmptyValues(inquiryFormData).emptyValues
  );
  console.log(emptyValues);
  if (emptyValues === 0) {
    validationTracker = true;
  }
  return validationTracker;
};

module.exports = validateForm;
