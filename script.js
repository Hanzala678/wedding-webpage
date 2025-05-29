// Set the wedding date (29th August 2025)
const weddingDate = new Date("August 29, 2025 00:00:00").getTime();

// Function to calculate the remaining time
function updateCountdown() {
    const currentDate = new Date().getTime();

    const now = new Date();
    const target = new Date(weddingDate);
    
    let months = (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth());
    let tempDate = new Date(now.getFullYear(), now.getMonth() + months, now.getDate());
    
    if (tempDate > target) {
        months--;
        tempDate = new Date(now.getFullYear(), now.getMonth() + months, now.getDate());
    }
    
    const oneDay = 1000 * 60 * 60 * 24;
    const days = Math.floor((target - tempDate) / oneDay);
    
    // Remaining time in milliseconds
    const timeRemaining = target - now;

    if (timeRemaining <= 0) {
        document.querySelector(".countdown-container").innerHTML = "<h1>It's Happening! Hanzala & Saniya's Wedding Day!</h1>";
        return;
    }
    
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
