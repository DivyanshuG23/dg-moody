const moodSelect = document.getElementById("mood");
const userNameInput = document.getElementById("userName");
const submitBtn = document.getElementById("submitBtn");
const moodText = document.getElementById("moodText");
const galaxyBox = document.querySelector(".galaxy-box");

submitBtn.addEventListener("click", () => {
  const mood = moodSelect.value.trim();
  const name = userNameInput.value.trim();

  if (!name || !mood) {
    alert("Please enter your name and select a mood!");
    moodText.textContent = "";
    return;
  }

  galaxyBox.classList.remove("happy", "sad", "excited", "stressed");
  galaxyBox.classList.add(mood);

  let message = "";

  if (mood === "happy") {
    message = `${name}, keep smiling 😊 — You're the sunshine in this galaxy!`;
  } else if (mood === "sad") {
    message = `${name}, tough times never last 💔, but tough people do.`;
  } else if (mood === "excited") {
    message = `${name}, your energy is out of this world 🚀!`;
  } else if (mood === "stressed") {
    message = `${name}, breathe in peace 🧘‍♂ — your stars will align soon.`;
  }

  moodText.textContent = message;
});

// ====== STAR BLINK CODE ======
const starContainer = document.getElementById("star-container");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  const size = Math.random() * 3 + 2;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  starContainer.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 4000);
}

setInterval(createStar,150);

