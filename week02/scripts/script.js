// Declare variables to hold references to input, button, and list elements
const input = document.getElementById('favchap');
const addButton = document.getElementById('addButton');
const list = document.getElementById('chapterList');

// Event listener to add a chapter when the button is clicked
addButton.addEventListener('click', function() {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // Create a new li element
        const li = document.createElement('li');

        // Populate the li with the input value
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete-btn');

        // Event listener to delete the li when the delete button is clicked
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();  // Focus back to the input field
        });

        // Append the delete button to the li
        li.append(deleteButton);

        // Append the li to the list
        list.append(li);

        // Clear the input field after adding the chapter
        input.value = '';
    } else {
        // If input is blank, do nothing and refocus on the input field
        input.focus();
    }
});
