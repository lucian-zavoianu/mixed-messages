console.log("Script loaded!");

// Declare element selector on the page
const messageBoard = document.getElementById("message-board");
const messageBtn = document.getElementById("generate-message");

// Messages object
const messages = {
    participants: [
      "The girl is ",
      "The boy is ",
      "The girls are ",
      "The boys are ",
      "The girl and the boy are ",
      "The girls and the boys are ",
      "The child is ",
      "The children are ",
    ],
    actions: [
      "playing ",
      "rolling the dice for ",
      "picking the pieces for ",
      "choosing the character for ",
    ],
    boardGames: [
      "Monopoly.",
      "Dungeons and Dragons.",
      "Dominion.",
      "Risk.",
      "Cluedo.",
    ],
  };

// Generate random index function
function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Declare message array variable
const messageArray = [];

// Convert message array to string
const formatString = (message) => {
  return message.join("");
};

// Generate random message
const generateMessage = () => {
    // Loop through the object properties
    for(segment in messages) {
        // Declare random index
        const index = generateRandomNumber(messages[segment].length);

        // Randomize the message segments based on the object properties
        switch(segment) {
            case "participants":
                messageArray.push(messages[segment][index]);
                break;
            case "actions":
                messageArray.push(messages[segment][index]);
                break;
            case "boardGames":
                messageArray.push(messages[segment][index]);
                break;
            default:
                messageArray.push("There is not enough data.");
        }
    }

    return formatString(messageArray);
}

// Populate the element with the formatted string on load
messageBoard.innerHTML = generateMessage();

// Populate the element with the formatted string on button click
messageBtn.onclick = () => {
    messageArray.length = 0;
    messageBoard.innerHTML = generateMessage();
}
