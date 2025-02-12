// Declare three const variables that hold references to the input, button, and list elements.
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

// Create a click event listener for the Add Chapter button using addEventLister and an anonymous function.
// Also add a conditional statement that checks if the input value is not an empty string.
button.addEventListener("click", function () {
  if (input.value !== "") {
    // Create the li element
    const li = document.createElement("li");

    // Create the delete button element
    const deleteButton = document.createElement("button");

    // Populate the li elements textContent or innerHTML with the input value
    li.textContent = input.value;

    // Populate the button textContent with the delete emoji
    deleteButton.textContent = "❌";

    // Append the li element with the delete button
    li.append(deleteButton);

    // Add the li element to the unordered list in your HTML
    list.append(li);

    // Add an event listener to the delete button that removes the li element thwn clicked.
    deleteButton.addEventListener("click", function () {
      list.removeChild(li);
      input.focus();
    });

    // Send the focus to the input element
    input.focus();

    // Change the input value to nothing or the empty string to clean up the interface for the user.
    input.value = "";
  }
});
