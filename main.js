//ARE WE LINKED?
console.log("Why, hello there");

//WRITE LOCATION CARDS TO DOM FUNCTION
const writeToDom = (myInnerds, writeHere) => {
  const myElement = document.getElementById(writeHere);
  myElement.innerHTML = myInnerds;
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
    myString += `<h1>${element.location}</h1>`;
    myString += `<p>${element.description}</p>`;
    myString += `<img src='${element.img}'>`;
    myString += `<textarea></textarea>`;
    myString += `<button>Post</button>`;
  });
  writeToDom(myString, "write-here");
};

buildACard(locations);