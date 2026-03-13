export function hambugerMenu() {

    const mobileMenu = document.querySelector("#mobile-menu");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    function closeMobileMenu() {
        mobileMenu.removeAttribute("open");
    }

    function bindMobileMenuLink(link) {
        link.addEventListener("click", closeMobileMenu);
    }

    mobileNavLinks.forEach(bindMobileMenuLink);
}