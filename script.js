let favouriteMedia = [
  "pokemon",
  "digimon",
  "supernatural",
  "sherlock",
  "doctor who",
  "parks & recreation",
  "marvel",
  "harry potter",
  "barbie",
  "yugi-oh",
  "oppenheimer",
  "dragonball z"
];

function exampleHello(){
  console.log("hello world!");
}

function createListOfMedia(){

  let rootUlNode = document.querySelector("ul");
  //let exampleNode = document.getElementsByClassName("bananas")[0];
  //let exampleNode = document.getElementsById("mediaList");

  favouriteMedia.forEach(mediaItem => {
      // Create an elemeent but do not display it yet
      let newListItem = document.createElement("li");

      //Assign some data to the element
      newListItem.textContent = mediaItem;
      newListItem.id = mediaItem;

      // Creating a button that will remove this item later
      let removeItemButton = document.createElement("button");

      removeItemButton.onclick = (() => removeItemFromList(mediaItem));
      
      removeItemButton.textContent = "Remove Item"

      // Add the button to the list item
      newListItem.appendChild(removeItemButton);


      // Add the element to the visible page
      rootUlNode.appendChild(newListItem);


  });
}

function removeItemFromList(targetItem){
  let targetItemNode = document.getElementById(targetItem);
  if (targetItemNode) {
    // Perks of JS, have to access the parent Node and remove the element from the parent node
      targetItemNode.parentNode.removeChild(targetItemNode);
  }
}