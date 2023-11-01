const button = document.querySelector("button");

button.addEventListener("click", changeColor);

button.addEventListener("click", shrink);

button.addEventListener("click", growBig);

function changeColor() {
    var btn1 = document.getElementById("head1");
    head1.style.color = "grey";
}

function growBig(){
    var name = document.getElementById("alice");
    name.style.fontSize = "100px";
}

function shrink(){
    var name = document.getElementById("alice");
    name.style.fontSize = "2px";
}