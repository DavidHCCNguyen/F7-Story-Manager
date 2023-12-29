// Function to load text from localStorage when the page is loaded
function loadText(inputId) {
  const savedText = localStorage.getItem(inputId);
  if (savedText) {
      document.getElementById(inputId).value = savedText;
      showSavedIndicator(inputId);
  }
}

// Call loadText for each section when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
  loadText('heroesInput');
  loadText('charactersInput');
  loadText('locationsInput');
  loadText('itemsInput');
  loadText('keyitemsInput');
  loadText('loreInput');
  loadText('statsInput');
  loadText('extraInput');
  // Call loadText for other sections here
});

// Function to save text to localStorage
function saveText(inputId) {
  const textarea = document.getElementById(inputId);
  const text = textarea.value;
  
  // Check if localStorage is supported
  if (typeof(Storage) !== 'undefined') {
      // Use section ID as a key in localStorage
      localStorage.setItem(inputId, text);
      showSavedIndicator(inputId);
  } else {
      alert('Sorry, your browser does not support local storage.');
  }
}

// Function to show saved indicator
function showSavedIndicator(inputId) {
  const section = document.getElementById(inputId).closest('section');
  const indicator = createIndicator('✓', 'green');
  section.appendChild(indicator);

  // Remove the indicator after a short duration (e.g., 3 seconds)
  setTimeout(function() {
      hideIndicator(inputId);
  }, 3000);
}

// Function to hide indicator
function hideIndicator(inputId) {
  const section = document.getElementById(inputId).closest('section');
  const indicator = section.querySelector('.saved-indicator');
  if (indicator) {
      section.removeChild(indicator);
  }
}

// Function to create an indicator element
function createIndicator(content, color) {
  const indicator = document.createElement('div');
  indicator.className = 'saved-indicator';
  indicator.textContent = content;
  indicator.style.color = color;
  return indicator;
}
