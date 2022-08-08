'use-strict';
const form = document.querySelector('.form');

const errorFirstName = document.querySelector('.error-first-name');
const errorLastName = document.querySelector('.error-last-name');
const errorEmail = document.querySelector('.error-email');
const errorPassword = document.querySelector('.error-password');

const errorIconFirst = document.querySelector('.error-icon-first');
const errorIconLast = document.querySelector('.error-icon-last');
const errorIconEmail = document.querySelector('.error-icon-email');
const errorIconPassword = document.querySelector('.error-icon-password');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const firstNameVal = firstName.value;
	const lastNameVal = lastName.value;
	const emailVal = email.value;
	const passwordVal = password.value;

	if (firstNameVal === '') {
		errorIconFirst.classList.add('active-state');
		errorFirstName.classList.add('active-state');
	}

	if (lastNameVal === '') {
		errorIconLast.classList.add('active-state');
		errorLastName.classList.add('active-state');
	}

	if (emailVal === '') {
		errorIconEmail.classList.add('active-state');
		errorEmail.classList.add('active-state');
	}

	if (passwordVal === '') {
		errorIconPassword.classList.add('active-state');
		errorPassword.classList.add('active-state');
	}

	console.log('submitted successfully!');
});

form.addEventListener('keyup', () => {
	errorIconFirst.classList.remove('active-state');
	errorFirstName.classList.remove('active-state');
	errorIconLast.classList.remove('active-state');
	errorLastName.classList.remove('active-state');
	errorIconEmail.classList.remove('active-state');
	errorEmail.classList.remove('active-state');
	errorIconPassword.classList.remove('active-state');
	errorPassword.classList.remove('active-state');
});
