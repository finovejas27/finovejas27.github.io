const flyer = document.getElementById('flyer');
const closeBtn = document.getElementById('closeFlyer');

let nextCorner = 'left'; // start with left

function showFlyer() {
  // Set corner positions
  if (nextCorner === 'left') {
    flyer.style.left = '20px';
    flyer.style.right = '';
    nextCorner = 'right';
  } else {
    flyer.style.right = '20px';
    flyer.style.left = '';
    nextCorner = 'left';
  }
  
  // Show the flyer
  flyer.classList.add('show');

  // Hide after 10 seconds
  setTimeout(() => {
    flyer.classList.remove('show');
  }, 10000);
}

// Show immediately on page load
window.addEventListener('load', showFlyer);

// Repeat every 20 seconds
setInterval(showFlyer, 20000);

// Close button
closeBtn.addEventListener('click', () => {
  flyer.classList.remove('show');
});






