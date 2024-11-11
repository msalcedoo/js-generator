const fortunes = [
  "good things are coming",
  "you will face challenges",
  "focus on yourself",
  "try again later"
];

// Function to generate a random message
function generate() {
  const name = document.getElementById("visitorName").value || "Guest";
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  const message = `${name}, your fortune is: "${randomFortune}"`

  document.getElementById("output").innerHTML = message;
}

// Function to restyle the output text
function restyle() {
  const output = document.getElementById("output");

  // Array of random CSS styles
  const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6"];
  const fonts = ["Arial", "Georgia", "Verdana", "Courier New", "Tahoma"];
  const sizes = ["20px", "24px", "28px", "32px", "36px"];

  output.style.color = colors[Math.floor(Math.random() * colors.length)];
  output.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  output.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
}
