let currentInputIndex = 0; // Tracks the current input field

// Get references to all inputs and buttons
const pinInputs = document.querySelectorAll('.pin-inputs input');
const keys = document.querySelectorAll('.key');
const deleteButton = document.getElementById('delete');
const submitButton = document.getElementById('submitPin');

// Correct PIN
const correctPin = "uuuu"; // Set your desired PIN here

// Handle number button clicks
keys.forEach((key) => {
    key.addEventListener('click', () => {
        const keyValue = key.getAttribute('data-key'); // Get the key value

        if (currentInputIndex < pinInputs.length) {
            pinInputs[currentInputIndex].value = keyValue; // Set the value
            currentInputIndex++; // Move to the next input
        }
    });
});

// Handle the delete button (delete one number at a time)
deleteButton.addEventListener('click', () => {
    if (currentInputIndex > 0) {
        currentInputIndex--; // Move back to the previous input
        pinInputs[currentInputIndex].value = ''; // Clear the current input field
    }
});

// Allow continuous deletion on long press (optional)
let deleteInterval;

function deleteOneDigit() {
    if (currentInputIndex > 0) {
        currentInputIndex--; // Move back to the previous input
    }
}

// Handle single click delete
deleteButton.addEventListener('click', deleteOneDigit);

// Handle continuous deletion on long press
deleteButton.addEventListener('mousedown', () => {
    deleteInterval = setInterval(deleteOneDigit, 100); // Delete every 100ms
});

deleteButton.addEventListener('mouseup', () => {
    clearInterval(deleteInterval); // Stop deletion on button release
});

deleteButton.addEventListener('mouseleave', () => {
    clearInterval(deleteInterval); // Stop deletion if the mouse leaves the button
});



/*deleteButton.addEventListener('mouseup', () => {
    clearInterval(deleteInterval); // Stop deleting when the button is released
});

deleteButton.addEventListener('mouseleave', () => {
    clearInterval(deleteInterval); // Stop deleting if the mouse leaves the button
}); */

// Handle PIN submission
submitButton.addEventListener('click', () => {
    // Concatenate all values from the input fields
    const pin = Array.from(pinInputs).map((input) => input.value).join('');

    // Check if the PIN is correct
    if (pin === correctPin) {
        // Redirect to the success page
        window.location.href = "oo.html";
    } else {
        alert('Not correct 😝 hint is "Me + ? = 💘"');
        clearAllInputs(); // Clear all inputs when incorrect
    }
});

// Function to clear all input fields
function clearAllInputs() {
    pinInputs.forEach((input) => (input.value = '')); // Clear all input fields
    currentInputIndex = 0; // Reset index
}

// Optional: Clear all inputs on page load
document.addEventListener('DOMContentLoaded', () => {
    clearAllInputs(); // Ensure fields are empty on page load
});
