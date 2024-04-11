const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const form = document.querySelector('.container2_form');

form.addEventListener('submit', (e) => {
    const firstNameText = document.querySelector('.firstNameText');
    const firstNameBox = document.querySelector('.firstNameBox');
    const lastNameText = document.querySelector('.lastNameText');
    const lastNameBox = document.querySelector('.lastNameBox');
    const emailText = document.querySelector('.emailText');
    const emailBox = document.querySelector('.emailBox');
    const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const passwordText = document.querySelector('.passwordText');
    const passwordBox = document.querySelector('.passwordBox');


    if (firstName.value.trim() === '') {
        e.preventDefault();
        firstNameText.innerHTML = "First name is required";
        firstNameBox.classList.add('error_icon');
        firstName.classList.add('second_border');
    } else {
        firstNameText.innerHTML = "";
        firstNameBox.classList.remove('error_icon');
        firstName.classList.remove('second_border');
    }

    if (lastName.value.trim() === '') {
        e.preventDefault();
        lastNameText.innerHTML = "Last name is required";
        lastNameBox.classList.add('error_icon');
        lastName.classList.add('second_border');
    } else {
        lastNameText.innerHTML = "";
        lastNameBox.classList.remove('error_icon');
        lastName.classList.remove('second_border');
    }

    if (!email.value.match(emailPattern)) {
        e.preventDefault();
        emailText.innerHTML = "Looks like this is not a valid email";
        emailBox.classList.add('error_icon');
        email.classList.add('second_border');
    } else {
        emailText.innerHTML = "";
        emailBox.classList.remove('error_icon');
        email.classList.remove('second_border');
    }

    if (password.value.trim() === '') {
        e.preventDefault();
        passwordText.innerHTML = "Password cannot be empty";
        passwordBox.classList.add('error_icon');
        password.classList.add('second_border');
    } else {
        passwordText.innerHTML = "";
        passwordBox.classList.remove('error_icon');
        password.classList.remove('second_border');
    }
});



