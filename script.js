let currentInputIndex = 0;

const pinInputs = document.querySelectorAll('.pin-inputs input');
const keys = document.querySelectorAll('.key');
const deleteButton = document.getElementById('delete');
const submitButton = document.getElementById('submitPin');

const correctPin = "uuuu";

keys.forEach((key) => {
    key.addEventListener('click', () => {
        const keyValue = key.getAttribute('data-key');

        if (currentInputIndex < pinInputs.length) {
            pinInputs[currentInputIndex].value = keyValue;
            currentInputIndex++;
        }
    });
});

deleteButton.addEventListener('click', () => {
    if (currentInputIndex > 0) {
        currentInputIndex--;
        pinInputs[currentInputIndex].value = '';
    }
});

let deleteInterval;

function deleteOneDigit() {
    if (currentInputIndex > 0) {
        currentInputIndex--;
    }
}

deleteButton.addEventListener('click', deleteOneDigit);

deleteButton.addEventListener('mousedown', () => {
    deleteInterval = setInterval(deleteOneDigit, 100);
});

deleteButton.addEventListener('mouseup', () => {
    clearInterval(deleteInterval);
});

deleteButton.addEventListener('mouseleave', () => {
    clearInterval(deleteInterval);
});



/*deleteButton.addEventListener('mouseup', () => {
    clearInterval(deleteInterval); // Stop deleting when the button is released
});

deleteButton.addEventListener('mouseleave', () => {
    clearInterval(deleteInterval); // Stop deleting if the mouse leaves the button
}); */

submitButton.addEventListener('click', () => {
    const pin = Array.from(pinInputs).map((input) => input.value).join('');

    if (pin === correctPin) {
        window.location.href = "oo.html";
    } else {
        alert('Not correct 😝 hint is "Me + ? = 💘"');
        clearAllInputs();
    }
});

function clearAllInputs() {
    pinInputs.forEach((input) => (input.value = ''));
    currentInputIndex = 0;
}

// Optional: Clear all inputs on page load
document.addEventListener('DOMContentLoaded', () => {
    clearAllInputs(); // Ensure fields are empty on page load
});
