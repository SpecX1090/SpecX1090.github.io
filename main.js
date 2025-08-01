//target all elements to save to constants
const page0btn=document.querySelector("#page0btn");
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");

//select all subtopic pages
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}
function show(pgno) { //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page
}
/* Listen for clicks on the buttons, assign anonymous eventhandler functions to call show function */
/* page0btn.addEventListener("click", function () { show(0);}); */
page1btn.addEventListener("click", function () { show(1);});
page2btn.addEventListener("click", function () { show(2);});
page3btn.addEventListener("click", function () { show(3);});
hideall();

var hamBtn = document.getElementById("hamIcon");
var menuItemsList = document.getElementById("menuItemsList");


function toggleMenus() { /*open and close menu*/
//if menuItemsList dont have the class "menuShow", add it, else remove it
menuItemsList.classList.toggle("menuShow");
//if menu is showing (has the class “menuShow”)
if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML="Close Menu"; //change button text to chose menu
}else{ //if menu NOT showing
hamBtn.innerHTML= "Open Menu"; //change button text open menu
}
}

hamBtn.addEventListener("click", toggleMenus);


// Intro Sequence
// Loads when the website has done loading
document.addEventListener("DOMContentLoaded", startIntroSequence);

const whistle = new Audio("audio/trainWhistle.mp3");
whistle.volume = 0.3;
const chuff = new Audio("audio/trainChuffs.mp3");


function startIntroSequence() {
  var introScreen = document.getElementById("introScreen");
  var introTrain = document.getElementById("introTrain");

  introScreen.addEventListener("click", function () {
    playIntroAnimation(introTrain, introScreen);
  });
}

function playIntroAnimation(trainElement, screenElement) {
  // Scale up the train image
  trainElement.style.transform = "scale(5)";

  document.getElementById("introTitle").style.opacity = 0;
  document.getElementById("introSubtext").style.opacity = 0;

  whistle.play();
  chuff.play();

  // After a short delay, fade out the intro screen
  setTimeout(function () {
    screenElement.classList.add("fadeOut");
  }, 1800);
} 


// Fun Facts 
var funFacts = [];
funFacts[0] = "Steam Locomotives were the reason why time zones were standardised in Britain as they ran on precise schedules";
funFacts[1] = "A replica of Richard Trevithick's Penydarren is inaugurated at the National Museum of Wales. Ironically, it too broke the rails it is sitting on.";
funFacts[2] = "By 1850, the idea of building railways had become so popular, the British government had to implement new laws to regulate their constructions.";
funFacts[3] = "During the World Wars, steam locomotives were camouflaged or painted black to hide them from enemies.";
funFacts[4] = "The UK's last regularly scheduled steam train service was in 1968 - it was called the Fifteen Guinea Special.";
funFacts[5] = "The Hogwarts Express in Harry Potter is pulled by a real steam engine called the GWR 5972 Olton Hall.";
funFacts[6] = "The Talyllyn Railway in Wales was the world's first preserved railway run by volunteers.";

let currentFactIndex = 0;
const factElement = document.getElementById("funfacts");

function showFunFact() {
  factElement.innerHTML = funFacts[currentFactIndex];
  currentFactIndex = (currentFactIndex + 1) % funFacts.length;
}

showFunFact();
setInterval(showFunFact, 30000); 


// Train Image Carousel
const trains = [
  {
    spriteIndex: 0,
    name: "Duchess of Hamilton (No. 6229)",
    class: "LMS Coronation Class “Pacific” (4-6-2)",
    built: "Crewe Works, 1938",
    designer: "William Stanier",
    description: "Duchess of Hamilton was created for the London, Midland and Scottish Railway, for luxury express trains, running between London and Glasgow. Her aerodynamic red-and-gold streamlining and sheer power made it one of the most impressive engines of its time. Even when her streamlining was removed during WWII, the Duchess remained a powerful and elegant workhorse. Duchess was officially withdrawn and placed in a scrapyard in February 1964, however, she was saved alongside her sister Duchess of Sutherland, amd is now preserved as a static exhibit at the National Railway Museum in York.",
    sound: "audio/duchessWhistle.mp3"
  },
  {
    spriteIndex: 1,
    name: "Flying Scotsman (No. 4472)",
    class: "LNER A3 “Pacific” (4-6-2)",
    built: "Doncaster Works, 1923",
    designer: "Sir Nigel Gresley",
    description: "Flying Scotsman was employed on express passenger trains on the East Coast Main Line by LNER, between London King's Cross and Edinburgh Waverley. In 1934, Flying Scotsman became the first engine officially recorded to reach 100 miles (161km) per hour. Combined with its iconic sleek green design and international tours, it become one of the most loved and recognisable engines in history. Flying Scotsman was officially withdrawn from service on January 15th 1963. However, it is fully preserved and operational at the National Railway Museum. It continues to run on mainline heritage tours.",
    sound: "audio/fsWhistle.mp3"
  },
  {
    spriteIndex: 2,
    name: "Mallard (No. 4468)",
    class: "LNER A4 “Pacific” (4-6-2)",
    built: "Doncaster Works, 1938",
    designer: "Sir Nigel Gresley",
    description: "Mallard's streamlined, wind tunnel tested design allowed it to haul long-distance express passenger services at high speeds along the East Coast Main Line. It became world-famous for setting the steam locomotive speed record of 126 mph (203km/h) on July 3, 1938 - a record that still stands today. Its blend of cutting-edge engineering and aerodynamic beauty made it a legend of the rails. Mallard was officially withdrawn from service on 25th April 1963, but is currently preserved and on static display at the National Railway Museum in York.",
    sound: "audio/mallardWhistle.mp3"
  },
];

let currentTrainIndex = 0;
const spriteWidth = 400;
const spriteHeight = 200;

function updateTrainDisplay() {
  const train = trains[currentTrainIndex];
  const sprite = document.getElementById("mainTrainSprite");

  // Move to the correct position in the sprite sheet
  const positionX = -train.spriteIndex * spriteWidth;
  sprite.style.backgroundPosition = `${positionX}px 0`;

  // Update text content
  document.getElementById("trainName").innerHTML = train.name;
  document.getElementById("trainClass").innerHTML = train.class;
  document.getElementById("trainBuilt").innerHTML = train.built;
  document.getElementById("trainDesigner").innerHTML = train.designer;
  document.getElementById("trainDescription").innerHTML = train.description;
}

function prevTrainDisplay() {
  currentTrainIndex = (currentTrainIndex - 1 + trains.length) % trains.length;
  updateTrainDisplay();

  const itWhistle = new Audio(trains[currentTrainIndex].sound);
  itWhistle.play();
}

function nextTrainDisplay() {
  currentTrainIndex = (currentTrainIndex + 1) % trains.length;
  updateTrainDisplay();

  const itWhistle = new Audio(trains[currentTrainIndex].sound);
  itWhistle.play();
}

document.getElementById("prev").addEventListener("click", prevTrainDisplay);
document.getElementById("next").addEventListener("click", nextTrainDisplay);

// Initialise the display upon loading the document
updateTrainDisplay();



// Railway Travels
const character = document.getElementById('character');
const moveLeftBtn = document.getElementById('moveLeftBtn');
const moveRightBtn = document.getElementById('moveRightBtn');

function moveLeft() {
  let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  left -= 100;
  if (left >= 0) {
  character.style.left = left + "px";
  }
}

function moveRight() {
  let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  left += 100;
  if (left < 300) {
  character.style.left = left + "px";
  }
}


moveLeftBtn.addEventListener("click", moveLeft);
moveRightBtn.addEventListener("click", moveRight);


var block = document.getElementById("obstacle");

block.addEventListener("animationiteration", () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px";
});

setInterval(function () {
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));

    if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
        block.style.animation = "none";
    }
}, 1);

const restartBtn = document.getElementById("restartBtn");

function resetAnimation() {
  block.style.animation = "";
}

restartBtn.addEventListener("click", resetAnimation);


show(0);




const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, {
  threshold: 0.3 // Triggers when 30% of the element is visible
});

// Target all timeline blocks
document.querySelectorAll('.timeline ul li div').forEach(div => {
  observer.observe(div);
});