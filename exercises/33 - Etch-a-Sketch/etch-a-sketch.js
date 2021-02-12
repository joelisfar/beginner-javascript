// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const canvasFrame = document.querySelector('.canvas-frame');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 50;
const LINE_WIDTH = 50;

// Setup our canvas for drawing
// Make a variable called height and width from the same properties on our canvas
// This syntax is called 'destructuring'
const { width, height } = canvas;

// Create random x and y starting points on the canvas
let x =
  Math.round(Math.floor(Math.random() * width) / MOVE_AMOUNT) * MOVE_AMOUNT;
let y =
  Math.round(Math.floor(Math.random() * height) / MOVE_AMOUNT) * MOVE_AMOUNT;

// start the drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = LINE_WIDTH;

let hue = 300;
ctx.strokeStyle = `hsl(${hue}, 100%, 40%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
  // Start the path
  ctx.beginPath();
  ctx.moveTo(x, y);

  if (x < width && key === 'ArrowRight') {
    x += MOVE_AMOUNT;
  }
  if (x > 0 && key === 'ArrowLeft') {
    x -= MOVE_AMOUNT;
  }
  if (y < height && key === 'ArrowDown') {
    y += MOVE_AMOUNT;
  }
  if (y > 0 && key === 'ArrowUp') {
    y -= MOVE_AMOUNT;
  }
  // move x & y depending on user action
  // switch (key) {
  //   case 'ArrowUp':
  //     y -= MOVE_AMOUNT;
  //     break;
  //   case 'ArrowRight':
  //     x += MOVE_AMOUNT;
  //     break;
  //   case 'ArrowDown':
  //     y += MOVE_AMOUNT;
  //     break;
  //   case 'ArrowLeft':
  //     x -= MOVE_AMOUNT;
  //     break;
  //   default:
  //     break;

  ctx.lineTo(x, y);
  ctx.stroke();

  // Increment the hue
  hue += 8;
  ctx.strokeStyle = `hsl(${hue}, 100%, 47.5%)`;
}

// Write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();

    draw({ key: e.key });
  }
}

// Shake/clear function
function clearCanvas() {
  // Add class for animation
  canvasFrame.classList.add('shake');
  canvasFrame.addEventListener(
    'animationend',
    function () {
      canvasFrame.classList.remove('shake');
      ctx.clearRect(0, 0, width, height);
      shakeButton.blur();
    },
    { once: true }
  );
}

// Listen for arrow keys
window.addEventListener('keydown', handleKey);

// Listen for button click
shakeButton.addEventListener('click', clearCanvas);
