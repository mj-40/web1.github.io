function toggleMenu(country) {
  const menu = document.getElementById("country");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
menu.classList.toggleMenu('country');


document.addEventListener('click', (e) => {
  if (!document.querySelector('.menu').contains(e.target) && !e.target.classList.contains('toggle-btn')) {
    document.getElementById('country').style.display = 'none';
  }
});

function Restourant(Sochial){
  const menu = document.getElementById("Sochial");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function Popular(National){
  const menu = document.getElementById("National");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function Areas(Areas1){
  const menu = document.getElementById("Areas1");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function closeMenu() {
  document.getElementById('country').style.display = 'none';
}

function Cities(Cities){
  const menu = document.getElementById("Cities");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function openSidebar(){
  navbar.classList.add('show');
}

function closeSidebar(){
  navbar.classList.remove('show');
}