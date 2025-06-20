function dropLogo() {
  const logo = document.querySelector(".logo");
  logo.classList.add("dropping");

  setTimeout(() => {
    window.location.href = "index.html"; // Or your desired page
  }, 50000);
}
function explodeText() {
  const brand = document.querySelector(".brand-name");
  const text = brand.textContent;
  brand.textContent = "";

  brand.classList.add("explode");

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    
    // Random direction and rotation
    const x = Math.random() * 400 - 200; // random between -200 and 200
    const y = Math.random() * 400 - 200;
    const rotate = Math.random() * 720 - 360;

    span.style.left = `${i * 12}px`; // spacing between letters
    span.style.animation = `scatter 4s ease-in-out forwards`;
    span.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;

    brand.appendChild(span);
  }

  // Reset after 5 seconds (optional)
  setTimeout(() => {
    brand.textContent = text;
    brand.classList.remove("explode");
  }, 5000);
}
function showAbout() {
  const home = document.getElementById("homepage");
  const about = document.getElementById("about");

  // Hide homepage and show about
  home.style.display = "none";
  about.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
let parcelCount = 1;
const parcelDisplay = document.getElementById("parcelCount");

function increaseParcel() {
  if (parcelCount < 10) {
    parcelCount++;
    parcelDisplay.textContent = parcelCount;
  }
}

function decreaseParcel() {
  if (parcelCount > 1) {
    parcelCount--;
    parcelDisplay.textContent = parcelCount;
  }
}
function validateLogin() {
  const id = document.getElementById("loginId").value;
  const password = document.getElementById("loginPassword").value;
  const errorText = document.getElementById("login-error");

  // Customize login credentials
  const correctId = "Dhananjay";
  const correctPassword = "dhanan123";

  if (id === correctId && password === correctPassword) {
    document.getElementById("login-page").style.display = "none";
  } else {
    errorText.textContent = "Incorrect ID or password. Try again.";
  }
}
