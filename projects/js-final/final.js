// Grabs all elements needed and variables defined
const lockButton = document.getElementById("lockIn");
const phoneNumber = document.getElementById("phoneNumber");
const finePrint = document.getElementById("finePrint");

const areaCode = document.getElementById("areaCode");
const threeDig = document.getElementById("threeDig");
const fourDig = document.getElementById("fourDig");
var fileName;
var name1, name2, name3;


// gets the file names of each file input after each file is chosen by user
areaCode.addEventListener("change", (event) => {
    fileName = areaCode.files[0].name;
    name1 = fileName.split('.');
    name1 = name1[0].split('');
    // console.log(name);
    // phoneNumber.append(name[0]);
})

threeDig.addEventListener("change", (event) => {
    fileName = threeDig.files[0].name;
    name2 = fileName.split('.');
    name2 = name2[0].split('');
    // console.log(name);
    // phoneNumber.append('-' + name[0]);
})

fourDig.addEventListener("change", (event) => {
    fileName = fourDig.files[0].name;
    name3 = fileName.split('.');
    name3 = name3[0].split('');
    // console.log(name);
    // phoneNumber.append('-' + name[0]);
})


// function for lockNumbers only works after all 3 files are chosen
function lockNumbers(){
    // resets the text content of the phone number and fine print just in case of reuse
    phoneNumber.textContent = "";
    finePrint.textContent = "";

    // if each file is the correct length it will append the phone number and fine print elements 
    if ((name1.length === 3) && (name2.length === 3) && (name3.length === 4)){
        phoneNumber.append(name1[0] + name2[0] + name3[0] + '-' + 
        name1[1] + name2[1] + name3[1] + '-' + name1[2] + name2[2] + name3[2] + name3[3]);
    
        finePrint.append("The area code will be the first number of each file, the next three will be the second number of each file, and the final four will be the remaining numbers");
    }

    else if ((name1.length === 0) || (name2.length === 0) || (name3.length === 0)){
        alert("Please choose a fill each entry with a file");
    }

    // else if there's an error to avoid undefined array access
    else{
        alert("Please fix the amount of numbers in your file names");
    }
}

// event listener for the lockNumber button
lockButton.addEventListener("click", lockNumbers);