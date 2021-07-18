var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0"
}

function hideMenu() {
    navLinks.style.right = "-233px";
};


// -- -- --sticky menu-- -- --
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})