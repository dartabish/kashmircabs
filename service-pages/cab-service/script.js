document.addEventListener("DOMContentLoaded", function () {
    const cabServiceContainer = document.querySelector(".cab-service__container");

    // Check if the user has visited the page before
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
        // If it's the first visit, show the text and set the flag
        cabServiceContainer.classList.remove("hidden", "larger-font");
        cabServiceContainer.classList.add("first-visit");

        // Save the flag to local storage
        localStorage.setItem("hasVisited", true);
    } else {
        // If it's a subsequent visit, show the text with a larger font
        cabServiceContainer.classList.remove("hidden", "first-visit");
        cabServiceContainer.classList.add("larger-font");
    }

    // Show the paragraph content after the font size transition
    const paragraph = cabServiceContainer.querySelector("p");
    paragraph.classList.add("show-content");
});

// for option buttons

document.addEventListener('DOMContentLoaded', function () {
    // Handling Arrival and Departure buttons
    const tripButtons = document.querySelectorAll('.trip-button');

    tripButtons.forEach(button => {
        button.addEventListener('click', function () {
            tripButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const tripTypeInput = document.getElementById('tripType');
            tripTypeInput.value = this.getAttribute('data-value');
        });
    });

    // Handling Cab Type buttons
    const cabButtons = document.querySelectorAll('.cab-button');

    cabButtons.forEach(button => {
        button.addEventListener('click', function () {
            cabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const cabTypeInput = document.getElementById('cabType');
            cabTypeInput.value = this.getAttribute('data-value');
        });
    });
});

