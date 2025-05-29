// Set the wedding date (29th August 2025)
const weddingDate = new Date("August 29, 2025 00:00:00");

// Function to calculate the remaining time
function updateCountdown() {
    const now = new Date();

    if (now >= weddingDate) {
        document.querySelector(".countdown-container").innerHTML = "<h1>It's Happening! Hanzala & Saniya's Wedding Day!</h1>";
        return;
    }

    // Calculate full calendar months between now and weddingDate
    let months = (weddingDate.getFullYear() - now.getFullYear()) * 12 + (weddingDate.getMonth() - now.getMonth());

    // Create a temp date that adds those months to now
    let tempDate = new Date(now);
    tempDate.setMonth(tempDate.getMonth() + months);

    // If that temp date is greater than the target, subtract one month
    if (tempDate > weddingDate) {
        months--;
        tempDate = new Date(now);
        tempDate.setMonth(tempDate.getMonth() + months);
    }

    // Calculate remaining days
    const oneDay = 1000 * 60 * 60 * 24;
    const days = Math.floor((weddingDate - tempDate) / oneDay);

    // Remaining time in milliseconds
    const timeRemaining = weddingDate - now;

    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the UI
    document.getElementById("months-value").innerText = months;
    document.getElementById("days-value").innerText = days;
    document.getElementById("hours-value").innerText = hours;
    document.getElementById("minutes-value").innerText = minutes;
    document.getElementById("seconds-value").innerText = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
