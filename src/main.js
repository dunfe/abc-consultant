import './style.css'

// Function to show popup
function showPopup() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  popup.classList.add('active');
  overlay.classList.add('active');
}

// Function to close popup
function closePopup() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  popup.classList.remove('active');
  overlay.classList.remove('active');
}

// Handle recommendation form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recommendation-form');
  const closeButton = document.getElementById('close-popup-btn');
  const overlay = document.getElementById('overlay');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('recommender-name').value;
    const text = document.getElementById('recommendation-text').value;
    
    // Create new recommendation element
    const recommendationsList = document.getElementById('recommendations-list');
    const newRecommendation = document.createElement('div');
    newRecommendation.className = 'border-l-4 border-blue-500 bg-gray-50 p-4 rounded';
    newRecommendation.innerHTML = `
      <p class="text-gray-700 italic mb-2">"${text}"</p>
      <p class="text-gray-600 font-semibold">- ${name}</p>
    `;
    
    // Add to the list
    recommendationsList.appendChild(newRecommendation);
    
    // Clear form
    form.reset();
    
    // Show popup
    showPopup();
  });
  
  // Close popup when clicking close button
  closeButton.addEventListener('click', closePopup);
  
  // Close popup when clicking overlay
  overlay.addEventListener('click', closePopup);
});
