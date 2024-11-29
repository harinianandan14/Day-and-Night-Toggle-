// script.js
const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;
const greeting = document.getElementById("greeting");
const icon = document.getElementById("icon");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const starsContainer = document.querySelector(".stars");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("night-mode");

  if (body.classList.contains("night-mode")) {
    greeting.textContent = "Good Evening, Harini!";
    icon.classList.replace("fa-moon", "fa-sun");
    gsap.to(sun, { opacity: 0, duration: 1 });
    gsap.to(moon, { opacity: 1, duration: 1 });
    gsap.to(starsContainer, { opacity: 1, duration: 1 });
  } else {
    greeting.textContent = "Good Morning, Harini!";
    icon.classList.replace("fa-sun", "fa-moon");
    gsap.to(sun, { opacity: 1, duration: 1 });
    gsap.to(moon, { opacity: 0, duration: 1 });
    gsap.to(starsContainer, { opacity: 0, duration: 1 });
  }
});
// Function to generate random stars
function createStars() {
  const starContainer = document.querySelector(".stars");

  // Create a random number of stars (100-150)
  const numStars = Math.floor(Math.random() * 50) + 100;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Randomize the size and position of each star
    const size = Math.random() * 2 + 1; // Random size between 1px and 3px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`; // Random position on x-axis
    star.style.top = `${Math.random() * 100}vh`; // Random position on y-axis

    // Apply random animation delay for twinkling effect
    star.style.setProperty("--star-random", Math.random());

    starContainer.appendChild(star);
  }
}

// Call the function to generate stars
createStars();
