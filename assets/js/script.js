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

const legal = document.querySelector('.legal');

legal?.addEventListener('scroll', event => {
	const scrollValueRound = Math.ceil(event.target.scrollTop + event.target.offsetHeight);
	const btn = document.querySelector('.btn-advance');

	if(scrollValueRound >= event.target.scrollHeight) {
		btn.classList.remove('hidden');
	}
});