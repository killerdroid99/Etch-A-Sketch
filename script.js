const container = document.querySelector("#PlayBox");
const buttons = document.querySelector(".buttons");

let black = document.createElement("button");
black.style.cssText =
	"height: 30px; width: 50px; background: black; color: white;";
black.innerText = "black";
let red = document.createElement("button");
red.style.cssText = "height: 30px; width: 50px; background: red; color: white;";
red.innerText = "red";
let blue = document.createElement("button");
blue.style.cssText =
	"height: 30px; width: 50px; background: blue; color: white;";
blue.innerText = "blue";
let green = document.createElement("button");
green.style.cssText =
	"height: 30px; width: 50px; background: green; color: white;";
green.innerText = "green";
buttons.append(black, red, blue, green);

// draw.style.cssText =
// 	"height: 16px;width: 16px;margin: 0px auto;background-color: black;position: relative;";
// container.appendChild(draw);

// let draw = document.createElement("div");
// draw.classList.add(".drawdiv");

function boxMaker(col, row) {
	for (let i = 0; i < col * row; i++) {
		let draw = document.createElement("div");
		draw.style.gridTemplateColumns = `repeat(${col}, ifr)`;
		draw.style.gridTemplateRows = `repeat(${row}, ifr)`;
		draw.addEventListener(
			"mouseenter",
			() => (draw.style.backgroundColor = "black")
		);
		container.appendChild(draw).classList.add("drawdiv");
	}
}

boxMaker(10, 10);
boxMaker(10, 10);
// container.addEventListener("click", boxMaker);
