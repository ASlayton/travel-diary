//ARE WE LINKED?
console.log("Why, hello there");

//WRITE LOCATION CARDS TO DOM FUNCTION
const writeToDom = (myInnerds, writeHere) => {
  const myElement = document.getElementById(writeHere);
  myElement.innerHTML = myInnerds;
};


