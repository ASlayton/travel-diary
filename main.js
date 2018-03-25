//ARE WE LINKED?
console.log("Why, hello there");

//WRITE LOCATION CARDS TO DOM FUNCTION
const writeToDom = (myInnerds, writeHere) => {
  const myElement = document.getElementById(writeHere);
  myElement.innerHTML += myInnerds;
};


//ARRAY OF LOCATION OBJECTS
const locations = [
  {
    id: "locale1",
    location: "Emerald City, Oz",
    description: "Don't forget your glasses.",
    img: "images/emeraldCity.jpg"
  },
  {
    id: "locale2",
    location: "Neverland",
    description: "Second Star to the right and straight on until morning.",
    img: "images/Never_Land.jpg"
  },
  {
    id: "locale3",
    location: "Wonderland",
    description: "Curiouser and Curiouser",
    img: "images/wonderland-gate.jpg"
  },
  {
    id: "locale4",
    location: "Hogwart's School of Magic and Wizardry",
    description: "With towering spires and shifting staircases, your stay is guaranteed to be a magical one.",
    img: "images/Hogwarts.jpg"
  },
  {
    id: "locale5",
    location: "Ent Forest, Middle Earth",
    description: "Prepare to stay a very long while.",
    img: "images/ent.jpg"
  },
  {
    id: "locale6",
    location: "Vulcan",
    description: "Why don't you stay awhile",
    img: "images/Vulcan_at_dawn.jpg"
  },
];

//BUILD LOCATION CARDS
const buildACard = (myArray) => {
  let myString = "";
  myArray.forEach(element => {
    myString += `<div class='location-card'>`;
    myString +=   `<h3>${element.location}</h3>`;
    myString +=   `<p>${element.description}</p>`;
    myString +=   `<img src='${element.img}'>`;
    myString +=   `<textarea></textarea>`;
    myString +=   `<button class='location-button' id='${element.id}'>Post</button>`;
    myString += `</div>`;
  });
  writeToDom(myString, "write-here");
};

buildACard(locations);


//ADD EVENT LISTENER
const addAllEventListeners = () =>{
  const myButtons = document.getElementsByClassName("location-button");
    for(let i = 0; i < myButtons.length; i++) {
      myButtons[i].addEventListener('click', postInput);
  };
};

//TIMESTAMP FUNCTION
const timeStamp = () => {
  let d = new Date();
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const myWeekday = days[d.getDay()];
  const myMonth = months[d.getMonth()];
  const myDay = d.getDate();
  const myYear = d.getFullYear();
  const dateString = `${myWeekday}, ${myDay} ${myMonth} ${myYear}`;
  return dateString;
};

//CHANGE COLOR OF CARD
const changeCardColor = (myElementToChange) => {
  myElementToChange.style.backgroundColor = "pink";
};

//FUNCTION TO BUILD USER INPUT POST
const postInput = (e) => {
  let userInput = e.target.parentNode.children[3].value;
  let myParent = e.target.parentNode;
  const userInputLocation = e.target.parentNode.children[0].innerHTML;
  console.log(userInputLocation);
  let postUserInput = "";
  postUserInput += `<div class='user-diary-entry'>`;
  postUserInput +=   `<h3>${userInputLocation}</h3>`;
  postUserInput +=   `<h4>${timeStamp()}</h4>`;
  postUserInput +=   `<img src='images/trashcan.png' alt='trashcan' width='10px' class='delete-me'>`
  postUserInput +=   `<p>${userInput}</p>`;
  postUserInput += `</div>` 

  writeToDom(postUserInput,"user-input-data-goes-here");
  changeCardColor(myParent);
  trashEventListeners();
};

const deleteEntry = (e) => {
  let elementToDelete  = e.target.parentNode;
  elementToDelete.remove();
};

//ADD EVENT LISTENER TO TRASH
const trashEventListeners = () => {
  const allTrashCans = document.getElementsByClassName("delete-me");
  for(let i = 0; i < allTrashCans.length; i++) {
    allTrashCans[i].addEventListener('click', deleteEntry);
  };
};



addAllEventListeners();
