const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const storyText = "It was 102 farenheit outside in :insertx: when :inserty: decided to go for a swim. A person named Bob decided to do laps around the pool. He kept doing laps over and over again until he :insertz:. :insertx: then decided it was time to get out of the pool as they were already 200 pounds"
                    

const insertx = ["Chasen Goren", "Kyra Goren", "Phillip"]

const inserty = ["Houston", "Boulder", "Philedelhpia"]

const insertz = ["exploded into a million pieces", "shattered like mirror", "dropped their jaw in awe"]


randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;

    xItem = randomValueFromArray(insertx);
    yItem = randomValueFromArray(inserty);
    zItem = randomValueFromArray(insertz);
    
    newStory = newStory.replace(":insertx:",xItem);
    newStory = newStory.replace(":inserty:",yItem);
    newStory = newStory.replace(":insertz:",zItem);
    newStory = newStory.replace(":insertx:",xItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    var pound = 0.0714286;
    const weight = Math.round(300*pound)+' stone';
    var temperature =  Math.round((94-32)*5/9)+' centigrade';
    newStory = newStory.replace("102 farenheit", temperature);  
    newStory = newStory.replace("200 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}