const sidebar = document.querySelector('.sidebar');
const hamburger = document.getElementById('showSidebar');

hamburger.addEventListener('click', (e) => {
  sidebar.classList.toggle('active');
  e.stopPropagation(); // Prevent the click from propagating to document
});

function hideSidebar() {
  sidebar.classList.remove('active');
}

function toggleSubmenu(element) {
  element.parentElement.classList.toggle('active');
}

// Automatically close sidebar when resizing to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    sidebar.classList.remove('active');
  }
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (e) => {
  if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== hamburger) {
    sidebar.classList.remove('active');
  }
});
