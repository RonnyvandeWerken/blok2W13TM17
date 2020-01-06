button();

var bg = document.body

bg.style.backgroundColor = "grey"

button1.onclick = button1click;
button2.onclick = button2click;
button3.onclick = button3click;

function button() {
	for (var i = 1; i <=3; i++) {
		var button = document.createElement('button');
		button.innerHTML = "button "+ i;
		button.setAttribute("id", "button" + i);
		document.getElementById("container").appendChild(button);
		if (i == 1) {
			button.style.backgroundColor = "green"
		}
		else if (i == 2) {
			button.style.backgroundColor = "red"
		}
		else if (i == 3) {
			button.style.backgroundColor = "blue"
		}
	}
	container.style.display = "table"
	container.style.margin = "0 auto"
	container.style.padding = "25px"
	container.style.backgroundColor = "white"
	
}

function button1click() {
	bg.style.backgroundColor = "green"
}

function button2click() {
	bg.style.backgroundColor = "red"
}

function button3click() {
	bg.style.backgroundColor = "blue"
}