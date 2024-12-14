// Set the wedding date (29th August 2025)
const weddingDate = new Date("August 29, 2025 00:00:00").getTime();

// Function to calculate the remaining time
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = weddingDate - currentDate;

    if (timeRemaining <= 0) {
        document.querySelector(".countdown-container").innerHTML = "<h1>It's Happening! Hanzala & Saniya's Wedding Day!</h1>";
        return;
    }

    // Calculate months, days, minutes, and seconds
    const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the UI
    document.getElementById("months-value").innerText = months;
    document.getElementById("days-value").innerText = days;
    document.getElementById("minutes-value").innerText = minutes;
    document.getElementById("seconds-value").innerText = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
