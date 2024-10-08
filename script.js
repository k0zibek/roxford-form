const form = document.getElementById('my-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	const name = document.getElementById('name').value.trim();
	const phone = document.getElementById('phone').value.trim();
	const lesson = document.getElementById('lesson').value.trim();

	if (name === '' || phone === '' || lesson === '') {
		errorMessage.style.display = 'block';
		return;
	} else {
		errorMessage.style.display = 'none';
	}

	const formData = new URLSearchParams();
	formData.append('entry.1537435478', name);
	formData.append('entry.1907448561', phone);
	formData.append('entry.1034865502', lesson);

	fetch('https://docs.google.com/forms/d/e/1FAIpQLSeZG0ZFC29GESiazhx4reSPvPo1OV5IVrz1AIDSfzp-myHZWg/formResponse', {
		method: 'POST',
		body: formData,
		mode: 'no-cors',
	})
		.then((response) => {
			console.log('Form submitted successfully');
		})
		.catch((error) => {
			console.error('Error submitting form:', error);
		});
});
