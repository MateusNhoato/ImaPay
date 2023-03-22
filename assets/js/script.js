const inputs = document.querySelectorAll('.form-data');

inputs.forEach(input => {
	const label = input.parentElement.querySelector('label');

	input.addEventListener('focus', () => {
		label.classList.add('label-transition');
	});

	input.addEventListener('blur', () => {
		if(input.value == '')
			label.classList.remove('label-transition');
	});
});