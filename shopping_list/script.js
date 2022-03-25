var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + "    "));
	li.appendChild(createDeleteButton());
	ul.appendChild(li);
	input.value = "";

}

function createDeleteButton() {
	var delButton = document.createElement("button");
	button.setAttribute("class", "delete");
	delButton.appendChild(document.createTextNode("Delete"));
	return delButton;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneToggle(elem) {
	elem.classList.toggle("done");
}

function deleteLI(elem) {
	elem.parentNode.remove();
}

function catcher(event) {
	if(event.target.nodeName === "LI"){
		doneToggle(event.target);
	}
	else if(event.target.nodeName === "BUTTON") {
		deleteLI(event.target);
	}

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", catcher);





