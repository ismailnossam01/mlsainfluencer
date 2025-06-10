// Function to show tech detail view
function showTechDetail(techId) {
  const tech = techData.find(t => t.id === techId);
  if (!tech) return;
  
  const cardsContainer = document.getElementById('cards-container');
  const detailView = document.getElementById('detail-view');
  
  // Hide cards, show detail
  cardsContainer.classList.add('hidden');
  detailView.classList.remove('hidden');
  
  // Create detail content
  detailView.innerHTML = `
    <div class="detail-header">
      <div class="detail-image">
        <img src="${tech.image}" alt="${tech.title}">
      </div>
      <div class="detail-title">
        <h2>${tech.title}</h2>
      </div>
    </div>
    <div class="detail-content">
      <p>${tech.fullDescription}</p>
    </div>
    <div class="detail-actions">
      <button class="secondary" id="back-button">Back to Home</button>
      <button id="learn-more-button">Learn More</button>
    </div>
  `;
  
  // Add event listeners
  document.getElementById('back-button').addEventListener('click', hideDetailView);
  document.getElementById('learn-more-button').addEventListener('click', () => {
    window.open(`${tech.url}`, '_blank');
  });
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to hide detail view and show cards
function hideDetailView() {
  const cardsContainer = document.getElementById('cards-container');
  const detailView = document.getElementById('detail-view');
  
  cardsContainer.classList.remove('hidden');
  detailView.classList.add('hidden');
}
