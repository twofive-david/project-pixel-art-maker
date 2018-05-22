// Selecting variables

const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWeight');
const submitButton = document.querySelector('input[type=submit]');
	//const row = document.createElement('tr');  ---why this doesnt work? is it because theis is later used as parameters of the append method?
	//const data = document.createElement('td'); ---why this doesnt work? is it because theis is later used as parameters of the append method?

//The function which creates the grid

function makeGrid (gridWidth, gridHeight) {

	const table = document.getElementById('pixelCanvas');
	const colorChoice = document.getElementById('colorPicker');

	table.innerHTML = '';

	for(let w = 1; w <= gridWidth.value; w++) {
		let row = document.createElement('tr');
		table.append(row);
		
		for(let h = 1; h <= gridHeight.value; h++) {
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

