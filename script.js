// Function to generate a random HEX color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener for button click
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = getRandomColor();
});
