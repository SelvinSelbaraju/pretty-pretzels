const Validator = require('validator');
const isEmpty = require('is-empty');

// Create function that takes the form data as an input and validates it 
function validateRegisterInput(data) {
   let errors = {}

// Convert empty fields to a string so validator can handle it 
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

// We use Validator is empty because we now have empty strings
// Name Checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

// Email Checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    // Password Checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (Validator.isEmpty(data.password2) {
        errors.password2 = "Confirm Password field is required";
    }

    if (!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Password must be between 6 and 30 characters";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors) 
    };
};

module.exports = validateRegisterInput()