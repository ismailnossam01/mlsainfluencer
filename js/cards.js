// Function to create and render all tech cards
function renderTechCards() {
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.innerHTML = ''; // Clear container
  
  techData.forEach(tech => {
    const card = createTechCard(tech);
    cardsContainer.appendChild(card);
  });
}

// Function to create a single tech card
function createTechCard(tech) {
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('data-id', tech.id);
  
  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  
  const img = document.createElement('img');
  img.src = tech.image;
  img.alt = tech.title;
  cardImage.appendChild(img);
  
  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';
  
  const cardTitle = document.createElement('h3');
  cardTitle.className = 'card-title';
  cardTitle.textContent = tech.title;
  
  const cardDescription = document.createElement('p');
  cardDescription.className = 'card-description';
  cardDescription.textContent = tech.shortDescription;
  
  const cardActions = document.createElement('div');
  cardActions.className = 'card-actions';
  
  const exploreButton = document.createElement('button');
  exploreButton.textContent = 'Explore';
  exploreButton.addEventListener('click', () => showTechDetail(tech.id));
  
  cardActions.appendChild(exploreButton);
  
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);
  cardContent.appendChild(cardActions);
  
  card.appendChild(cardImage);
  card.appendChild(cardContent);
  
  return card;
}

// Add cards to the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderTechCards);