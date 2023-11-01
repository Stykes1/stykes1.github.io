const button = document.querySelector("button");

button.addEventListener("click", changeTree);

button.addEventListener("click", shrink);

button.addEventListener("click", growBig);

function changeTree() {
    var image = document.getElementById("grow");
    image.src="ica\ica10\tree.jpg";
}

function growBig(){
    var name = document.getElementById("alice");
    name.style.fontSize = "100px";
}

function shrink(){
    var name = document.getElementById("alice");
    name.style.fontSize = "5px";
}