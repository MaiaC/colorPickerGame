let numSquares = 6
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".square");
const headingContainer = document.querySelector("#headingContainer");
const playAgain = document.querySelector("#playAgain");
const pickedColorText = document.querySelector("#pickedColorText");
const levelButtons = document.querySelectorAll(".difficulty");
const result = document.querySelector("#result");

init();

function init() {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			let thisColor = this.style.backgroundColor;
			if (thisColor == pickedColor) {
				for (let j = 0; j < squares.length; j++) {
					squares[j].style.backgroundColor = pickedColor;
				}
				result.innerHTML = "Correct!";
				headingContainer.style.backgroundColor = pickedColor;
				playAgain.innerHTML = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				result.innerHTML = "Try Again!";
			}
		});
	}

	playAgain.addEventListener("click", () => {newGame();});

	for (let i = 0; i < levelButtons.length; i++) {
		levelButtons[i].addEventListener("click", function() {
			for (let j = 0; j < levelButtons.length; j++) {
				levelButtons[j].classList.remove("selected");
			}
			this.classList.add("selected");
			this.textContent == "Easy" ? numSquares = 3: numSquares = 6;
			newGame();
		});
	}
	newGame();
}

function generateRandomColors(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	var color = `rgb(${red}, ${green}, ${blue})`;
	return color;
}

function pickColor() {
	const random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function newGame() {
	colors = generateRandomColors(numSquares);
	playAgain.innerHTML = "New Colors";
	headingContainer.style.backgroundColor = "";
	result.innerHTML = "";
	pickedColor = pickColor();
	pickedColorText.innerHTML = pickedColor;
	
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}	
}
