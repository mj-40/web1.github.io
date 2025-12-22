
document.getElementById('toggleSidebar').addEventListener('click', function(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
});

setTimeout(() => {
  body.classList.add("page-enter-active");
}, 50);
