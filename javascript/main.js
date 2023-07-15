document.addEventListener("DOMContentLoaded", () => {

    // Select DOM Items
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const menuLogo = document.querySelector("img.logo");
    const menuNav = document.querySelector(".menu-nav");
    const menuBody = document.querySelector(".body-nav");
    const navItems = document.querySelectorAll(".nav-item");
    const navlink = document.querySelectorAll(".nav-link");
    const navSozial = document.querySelectorAll(".sozial");

    // Set initial state of menu
    let showMenu = false;

    menuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBody.classList.add('show');

        setTimeout(() => {
            navlink.forEach(item => item.classList.add("show"));
            navItems.forEach(item => item.classList.add("show"));
        }, "500");

        setTimeout(() => {
            navSozial.forEach(item => item.classList.add("show"));
            menuLogo.classList.add('show');
        }, "900");


        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBody.classList.remove('show')
        menuLogo.classList.remove('show')
        navItems.forEach(item => item.classList.remove("show"));
        navlink.forEach(item => item.classList.remove("show"));
        navSozial.forEach(item => item.classList.remove("show"));

        // Set Menu State
        showMenu = false;
    }
    }

});