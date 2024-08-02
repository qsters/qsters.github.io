/*
Project:  Project 5-Personal Web Site-Visitor Form Validation-Refactor JS
Name: Quinton Grant

I declare that the following source code was written by me, or provided
by the instructor for this project. I understand that copying source
code from any other source, providing source code to another student,
or leaving my code on a public web site constitutes cheating.
I acknowledge that  If I am found in violation of this policy this may result
in a zero grade, a permanent record on file and possibly immediate failure of the class.

*/

let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let zipCodeRegex = /^\d{5}(-\d{4})?$/;

const stateAbbreviations = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
    'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
    'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];

let form = null;
let successMsg = null;

function initValidation(formId, successId) {
    form = document.getElementById(formId);
    successMsg = document.getElementById(successId);
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        input.addEventListener("change", inputChanged);
    }
    form.addEventListener("submit", submitForm);
}

function inputChanged(ev) {
    let el = ev.currentTarget;
    el.classList.add('was-validated');
    validateForm();
}

function submitForm(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    validateForm();

    if (!form.checkValidity()) {
        let inputs = document.querySelectorAll("input");
        inputs.forEach(input => input.classList.add('was-validated'));
    } else {
        form.style.display = 'none';
        successMsg.style.display = 'block'; // Assuming the success message container's display style was set to 'none'
    }
}

function validateForm() {
    checkRequired("first-name", "First Name is Required");
    checkRequired("last-name", "Last Name is Required");
    checkRequired("address", "Address is Required");
    checkRequired("city", "City is Required");

    if (checkRequired("state", "State is Required")) {
        validateState("state", "Not a valid State, enter two digit code e.g., UT");
    }

    if (checkRequired("email", "Email Address is required")) {
        checkFormat("email", "Email format is incorrect", emailRegex);
    }
    if (checkRequired("zip", "Zip Code is Required")) {
        checkFormat("zip", `Malformed zip-code, please use either "#####", or "#####-####" format.`, zipCodeRegex);
    }
    if (checkRequired("phone", "Phone is required")) {
        checkFormat("phone", "Phone format is incorrect", phoneRegex);
    }
    checkRequired("newspaper", "You must select at least one!");
}

function validateState(id, msg) {
    let el = document.getElementById(id);
    let value = el.value.toUpperCase();
    let valid = stateAbbreviations.includes(value);
    setElementValidity(id, valid, msg);
}

function checkFormat(id, msg, regex) {
    let el = document.getElementById(id);
    let value = el.value;
    let valid = regex.test(value);
    setElementValidity(id, valid, msg);
    return valid;
}

function checkRequired(id, message) {
    let el = document.getElementById(id);
    let valid = el.value.trim() !== ''; // Validates that the input is not empty
    if (el.type === 'checkbox' || el.type === 'radio') {
        valid = document.querySelector(`input[name="${el.name}"]:checked`) != null;
    }
    setElementValidity(id, valid, message);
    return valid;
}

function setElementValidity(id, valid, message) {
    let el = document.getElementById(id);
    let parent = el.closest('li');
    let errorDiv = parent.querySelector('.errorMsg'); // Assuming error div is immediately next to the input

    if (valid) {
        el.classList.remove('is-invalid');
        el.classList.add('is-valid');
        errorDiv.textContent = '';
    } else {
        el.classList.remove('is-valid');
        el.classList.add('is-invalid');
        errorDiv.textContent = message;
    }
}
