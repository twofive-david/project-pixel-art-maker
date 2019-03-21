'use strict'

function main() {

	const gridHeight = document.getElementById('inputHeight');
	const gridWidth = document.getElementById('inputWeight');
	const submitButton = document.querySelector('input[type=submit]');
	const table = document.getElementById('pixelCanvas');

	function resetCanvasAndColor() {
		let colorPicker = document.forms[0].colorPicker;
		table.innerHTML = '';
		colorPicker.value = '#000000';
	}

	function makeGrid(gridWidth, gridHeight) {
		for (let w = 0; w < gridHeight.value; w++) {
			let row = document.createElement('tr');
			table.append(row);

			for (let h = 0; h < gridWidth.value; h++) {
				let cell = document.createElement('td');
				cell.className = "tableCell";
				row.append(cell);
			};
		};
	}

	function paintCells() {
		const colorChoice = document.getElementById('colorPicker');
		let mouseIsDown = false;
		table.addEventListener('mousedown', () => { mouseIsDown = true; });
		table.addEventListener('mouseup', () => { mouseIsDown = false; });

		table.addEventListener('mouseover', (e) => {
			if (e.target.className === "tableCell" && mouseIsDown) {
				e.target.style.backgroundColor = colorChoice.value;
			}
		});
	}

	submitButton.addEventListener('click', function (event) {
		event.preventDefault();
		resetCanvasAndColor();
		makeGrid(gridWidth, gridHeight);
		paintCells();
	});
}

main();

