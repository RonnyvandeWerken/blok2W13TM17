
var button1color = document.getElementById("button1")
var clickcount = []

function button() {
	for (var i = 1; i <=30; i++) {
		var button = document.createElement('button');
		button.innerHTML =  i;
		button.onclick = buttononclick;
		button.setAttribute("id", "button" + i);
		document.getElementById("container").appendChild(button);
		clickcount.push(0);
		if (i <= 30) {
			button.style.backgroundColor = "green"
			button.style.fontSize = "20px"
			button.style.padding = "20px 20px"
			button.style.margin = "5px"
			button.style.width = '120px'
		}
	}
	container.style.display = "table"
	container.style.width = '651px';
	container.style.margin = "0 auto"
	container.style.padding = "10px"
	container.style.backgroundColor = "grey"
	
}

function buttononclick() {
	var index = parseInt(this.id.replace('button', ''))-1;

	clickcount[index] += 1;

	if (clickcount[index] == 1) {
		this.style.backgroundColor = "red"
	}
	else if (clickcount[index] == 2) {
		this.style.backgroundColor = "purple"
	}
	else if (clickcount[index] == 3) {
		this.style.backgroundColor = "blue"
	}
	else if (clickcount[index] == 4) {
		this.style.backgroundColor = "black"
	}
		else if (clickcount[index] == 5) {
		document.getElementById("container").removeChild(this);
	}
}
button();
