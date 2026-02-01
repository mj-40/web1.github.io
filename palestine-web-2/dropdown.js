// Select all dropdown containers
const dropdowns = document.querySelectorAll(".drop-pass");

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector("b"); // clickable element
  const content = dropdown.querySelector(".content-pass");

  button.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from closing immediately

    // Close all other dropdowns
    dropdowns.forEach(otherDropdown => {
      if (otherDropdown !== dropdown) {
        otherDropdown.querySelector(".content-pass").style.display = "none";
        otherDropdown.classList.remove("active"); // reset arrow
      }
    });

    // Toggle current dropdown
    if (content.style.display === "flex") {
      content.style.display = "none";
      dropdown.classList.remove("active");
    } else {
      content.style.display = "flex";
      content.style.flexDirection = "column";
      dropdown.classList.add("active");
    }
  });
});

// Close dropdowns if clicking outside
document.addEventListener("click", () => {
  dropdowns.forEach(dropdown => {
    const content = dropdown.querySelector(".content-pass");
    content.style.display = "none";
    dropdown.classList.remove("active");
  });
});

// Close dropdowns when scrolling
window.addEventListener("scroll", () => {
  dropdowns.forEach(dropdown => {
    const content = dropdown.querySelector(".content-pass");
    content.style.display = "none";
    dropdown.classList.remove("active");
  });
});
