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

// Handle the delete button
deleteButton.addEventListener('click', () => {
    if (currentInputIndex > 0) {
        currentInputIndex--; // Move back to the previous input
        pinInputs[currentInputIndex].value = ''; // Clear the current input field
    }
});

// Allow continuous deletion on long press
let deleteInterval; // Interval ID for repeated deletion

deleteButton.addEventListener('mousedown', () => {
    deleteInterval = setInterval(() => {
        if (currentInputIndex > 0) {
            currentInputIndex--; // Move back to the previous input
            pinInputs[currentInputIndex].value = ''; // Clear the current input field
        } else {
            clearInterval(deleteInterval); // Stop deleting if all inputs are cleared
        }
    }, 100); // Repeat every 100ms
});

deleteButton.addEventListener('mouseup', () => {
    clearInterval(deleteInterval); // Stop deleting when the button is released
});

deleteButton.addEventListener('mouseleave', () => {
    clearInterval(deleteInterval); // Stop deleting if the mouse leaves the button
});


// Handle PIN submission
submitButton.addEventListener('click', () => {
    // Concatenate all values from the input fields
    const pin = Array.from(pinInputs).map((input) => input.value).join('');

    
    // Check if the PIN is correct
    if (pin === correctPin) {
        // Redirect to the success page
        window.location.href = "success.html";
    } else {
        alert('Not correct 😝 hiti is " Me + ? = 💘 "');
    }
});

// Optional: Clear all inputs on page load
document.addEventListener('DOMContentLoaded', () => {
    pinInputs.forEach((input) => (input.value = ''));
    currentInputIndex = 0; // Reset index on page load
});
