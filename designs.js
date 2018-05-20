// Selecting variables
	const gridHeight = document.getElementById('inputHeight');
	const gridWidth = document.getElementById('inputWeight');
	const table = document.getElementById('pixelCanvas');
	const submitButton = document.querySelector('input[type=submit]');
	const colorChoice = document.getElementById('colorPicker');
// The function which creates the grid

function makeGrid (gridWidth, gridHeight) {

	table.innerHTML = '';

	for(let w = 0; w < gridWidth.value; w++) {
		let row = document.createElement('tr');
		table.append(row);
		
		for(let h = 0; h < gridHeight.value; h++) {
		let data = document.createElement('td');
		row.append(data);

		data.addEventListener('click', function() {
			data.style.backgroundColor = colorChoice.value;
		});
	}};

};

// Clicking the submit button will prevent the page from reloading and will call the makeGrid function

submitButton.addEventListener('click', function(event) {
	event.preventDefault();
	makeGrid (gridWidth, gridHeight);
});

