const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuToggle && mobileMenu) {
  const setMenuOpen = (isOpen) => {
    mobileMenu.classList.toggle("is-open", isOpen);
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(!mobileMenu.classList.contains("is-open"));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuOpen(false);
    });
  });
}

const year = new Date().getFullYear();
document.querySelector("footer").insertAdjacentHTML(
  "beforeend",
  `<p class="mx-auto mt-8 max-w-7xl px-4 text-xs text-[#111111] sm:px-6 lg:px-8">&copy; ${year} Shermsonia Cleaners & Laundromat.</p>`
);
