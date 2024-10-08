const form = document.getElementById('my-form');
const errorMessage = document.getElementById('error-message');
const submitButton = form.querySelector('.form-submit-btn');

form.addEventListener('submit', async function (event) {
	event.preventDefault();

	const nameInput = document.getElementById('name');
	const phoneInput = document.getElementById('phone');
	const lessonInput = document.getElementById('lesson');

	const name = nameInput.value.trim();
	const phone = phoneInput.value.trim();
	const lesson = lessonInput.value.trim();

	if (!name || !phone || !lesson) {
		errorMessage.style.display = 'block';
		return;
	} else {
		errorMessage.style.display = 'none';
	}

	submitButton.disabled = true;

	const formData = new URLSearchParams();
	formData.append('entry.1537435478', name);
	formData.append('entry.1907448561', phone);
	formData.append('entry.1034865502', lesson);

	try {
		const response = await fetch(
			'https://docs.google.com/forms/d/e/1FAIpQLSeZG0ZFC29GESiazhx4reSPvPo1OV5IVrz1AIDSfzp-myHZWg/formResponse',
			{
				method: 'POST',
				body: formData,
				mode: 'no-cors',
			}
		);

		if (response.ok || response.status === 0) {
			console.log('Form submitted successfully');
			nameInput.value = '';
			phoneInput.value = '';
			lessonInput.value = '';
		} else {
			throw new Error('Form submission failed');
		}
	} catch (error) {
		console.error('Error submitting form:', error);
		errorMessage.textContent = 'Ошибка отправки формы, попробуйте позже.';
		errorMessage.style.display = 'block';
	} finally {
		submitButton.disabled = false;
	}
});
