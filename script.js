const form = document.getElementById('my-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	const name = document.getElementById('name').value.trim();
	const phone = document.getElementById('phone').value.trim();
	const lesson = document.getElementById('lesson').value.trim();

	if (name === '' || phone === '' || lesson === '') {
		event.preventDefault();
		errorMessage.style.display = 'block';
	} else {
		errorMessage.style.display = 'none';
		const formData = new FormData(form);
		const xhr = new XMLHttpRequest();
		const sendingData = new URLSearchParams(formData).toString();
		const formURL =
			'https://docs.google.com/forms/d/e/1FAIpQLSeZG0ZFC29GESiazhx4reSPvPo1OV5IVrz1AIDSfzp-myHZWg/formResponse';
		xhr.open('POST', formURL, true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(sendingData);
	}
});
