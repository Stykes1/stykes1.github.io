// const btn1 = document.getElementById("tree");
// const btn2 = document.getElementById("grow");
// const btn3 = document.getElementById("shrink");

document.getElementById("tree").addEventListener('click', changeTree);

document.getElementById("grow").addEventListener('click', growBig);

document.getElementById("shrink").addEventListener('click', shrink);

function changeTree() {
    document.getElementById("grow").src="ica\ica10\tree.jpg";
}

function growBig() {
    document.getElementById("alice").style.fontSize = "100px";
}

function shrink() {
    document.getElementById("alice").style.fontSize = "5px";
}