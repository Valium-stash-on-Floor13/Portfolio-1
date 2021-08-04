	
const form = document.getElementById('form');
const name=document.getElementById('fromName');
const email = document.getElementById('email');
const phone= document.getElementById('phone');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	
});

function checkInputs() {
	

	if(name.value === '') {
		setErrorFor(name, 'Name cannot be blank');
	}  else if (!isName(name.value)) {
		setErrorFor(name, 'Not a valid name');
	} else {
		setSuccessFor(name);
	}

	if(email.value === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(email.value)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(phone.value === '') {
		setErrorFor(phone, 'Phone number cannot be blank');
	}  else if (!isPhone(phone.value)) {
		setErrorFor(phone, 'Enter a valid 10 digit number with dialing code');
	} else {
		setSuccessFor(phone);
	}

	
	if(message.value === '') {
		setErrorFor(message, 'This field cannot be blank');
	} else if(message.value.length < 15) {
		setErrorFor(message, 'Enter your discussion points in more than one line');
	} else{
		setSuccessFor(message);
	}
}

function setErrorFor(input, text) {
	const formGroup = input.parentElement;
	const small = formGroup.querySelector('small');
	formGroup.className = 'form-group error';
	small.innerText = text;
}

function setSuccessFor(input) {
	const formGroup = input.parentElement;
	formGroup.className = 'form-group success';
}
	
function isEmail(email) {
	return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]{2,8})\.([a-zA-Z]{2,8})$/.test(email);
}

function isPhone(phone){
	return /^(\+[0-9]{1,3})?(\s)?([0-9]{10})$/.test(phone);
}

function isName(name){
	return /^[A-Za-z\ ]{3,15}$/.test(name);

}

