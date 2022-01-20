const container = document.querySelector("#root");

// let box = document.querySelectorAll(".box");

function boxMaker(square) {
	for (let i = 0; i < square * square; i++) {
		let draw = document.createElement("div");
		// draw.style.border = "1px solid black";
		container.style.gridTemplateColumns = `repeat(${square}, 1fr)`;
		container.style.gridTemplateRows = `repeat(${square}, 1fr)`;
		draw.classList.add("box");
		draw.classList.add("default");
		container.appendChild(draw);
	}
}

let gridMode = document.querySelector(".grid-mode");
gridMode.addEventListener("click", () => {
	document.querySelectorAll(".box").forEach((element) => {
		element.classList.toggle("border");
	});
});

boxMaker(16); //default value

// color picker tool
// Source: https://github.com/Simonwep/pickr

const pickr = Pickr.create({
	el: ".color-picker",
	theme: "nano", // or 'monolith', or 'nano'
	default: "#959595",
	appClass: "cPicker",

	swatches: [
		"rgba(244, 67, 54, 1)",
		"rgba(233, 30, 99, 0.95)",
		"rgba(156, 39, 176, 0.9)",
		"rgba(103, 58, 183, 0.85)",
		"rgba(63, 81, 181, 0.8)",
		"rgba(33, 150, 243, 0.75)",
		"rgba(3, 169, 244, 0.7)",
		"rgba(0, 188, 212, 0.7)",
		"rgba(0, 150, 136, 0.75)",
		"rgba(76, 175, 80, 0.8)",
		"rgba(139, 195, 74, 0.85)",
		"rgba(205, 220, 57, 0.9)",
		"rgba(255, 235, 59, 0.95)",
		"rgba(255, 193, 7, 1)",
	],

	components: {
		// Main components
		preview: true,
		opacity: true,
		hue: true,

		// Input / output Options
		interaction: {
			hex: true,
			rgba: true,
			input: true,
		},
	},
});

pickr.on("init", (color, instance) => {
	document.querySelectorAll(".box").forEach((el) => {
		el.addEventListener("mouseenter", () => {
			el.style.cssText = `background-color: black`;
		});
	});
});

pickr.on("change", (color, instance) => {
	const rgbacolor = color.toRGBA().toString();
	document.querySelectorAll(".box").forEach((el) => {
		el.addEventListener("mouseenter", () => {
			el.style.cssText = `background-color: ${rgbacolor}`;
		});
	});
});

pickr.on("change", (color, instance) => {
	const rgbacolor = color.toRGBA().toString();
	document.querySelector("h1").style.cssText = `color: ${rgbacolor}`;
});

pickr.on("change", (color, instance) => {
	let blueBtn = document.querySelector(".erase");
	blueBtn.classList.remove("blueClr");
});
// color picker tool

let eraseCanvas = document.querySelector(".erase");

function eraseStroke() {
	document.querySelectorAll(".box").forEach((el) => {
		el.addEventListener("mouseenter", () => {
			el.style.cssText = "background-color: none";
		});
	});
}

eraseCanvas.addEventListener("click", eraseStroke);

let clearCanvas = document.querySelector(".clear");

clearCanvas.addEventListener("click", () => {
	document.querySelectorAll(".box").forEach((el) => {
		el.style.cssText = "background-color: none";
	});
});

document.getElementById("Enter").addEventListener("click", () => {
	container.innerHTML = "";
	let pixVal = document.querySelector("#box-counter").value;
	boxMaker(pixVal);
	let blueBtn = document.querySelector(".grid-mode");
	blueBtn.classList.remove("greenClr");
});

let greenBtn = document.querySelector(".grid-mode");

greenBtn.addEventListener("click", () => {
	greenBtn.classList.toggle("greenClr");
});

let blueBtn = document.querySelector(".erase");

blueBtn.addEventListener(
	"click",
	() => {
		blueBtn.classList.add("blueClr");
	},
	true
);
