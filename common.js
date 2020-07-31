// Toggle menu
if (window.matchMedia("(max-width: 991px)").matches) {
  const toggleMenu = document.querySelector(".toggle-menu");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("toggle-menu--active");
    toggleMenu.setAttribute("aria-expanded", true);

    if (dropdownMenu.classList.contains("toggle-menu--show")) {
      dropdownMenu.classList.remove("toggle-menu--show");
      dropdownMenu.style.height = "0";
    } else {
      dropdownMenu.classList.add("toggle-menu--show");
      dropdownMenu.style.height = dropdownMenu.scrollHeight + "px";
    }
  });
}