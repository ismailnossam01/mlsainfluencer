// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  // Profile picture click scrolls to contact section
  const profilePic = document.getElementById('profile-pic');
  const contactSection = document.getElementById('contact');
  const themeToggle = document.getElementById('theme-toggle');
  
  // Theme toggle functionality
  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = `<i class="fas fa-${newTheme === 'light' ? 'sun' : 'moon'}"></i>`;
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
  }
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = `<i class="fas fa-${savedTheme === 'light' ? 'sun' : 'moon'}"></i>`;
  }
  
  themeToggle.addEventListener('click', toggleTheme);
  
  profilePic.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Handle browser back button
  window.addEventListener('popstate', () => {
    const detailView = document.getElementById('detail-view');
    if (!detailView.classList.contains('hidden')) {
      hideDetailView();
    }
  });
  
  // Add animation class to cards for staggered appearance
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100 * index);
  });
});

// Add smooth scrolling for all anchor links
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Update page title when showing tech detail
function updatePageTitle(title = null) {
  const defaultTitle = 'Microsoft Technologies Showcase';
  document.title = title ? `${title} - ${defaultTitle}` : defaultTitle;
}

// Handle URL changes for detail view
function updateURL(techId = null) {
  if (techId) {
    history.pushState({ techId }, '', `?tech=${techId}`);
  } else {
    history.pushState({}, '', window.location.pathname);
  }
}

// Function to check URL parameters on page load
function checkURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const techId = urlParams.get('tech');
  
  if (techId) {
    showTechDetail(parseInt(techId, 10));
  }
}

// Run the URL check on page load
window.addEventListener('load', checkURLParams);