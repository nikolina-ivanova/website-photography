//add background color to nav on scroll
var nav = document.getElementById('navbar');
window.onscroll = function() {
    if ( window.scrollY > nav.offsetHeight )
     nav.classList.add("nav-scroll");
    else
    nav.classList.remove("nav-scroll");  
}

//change logo text
if(window.screen.width >= 1024){
    document.getElementById("nav-logo").innerHTML = "Nikolina Ivanova";
}

//responsive navbar
function responsiveNav() {
    var navLinks = document.getElementById("nav-links");
    var navIcon = document.getElementById("nav-icon");
    if(navLinks.className === "nav-links"){
        navLinks.className = "responsive";
        navIcon.src = "../images/icon-close.png";
    }else{
    navLinks.className = "nav-links";
    navIcon.src = "../images/icon-open.png";
    }
}

//change light and dark theme
function changeTheme() {
    const toggle = document.getElementById("toggle");
    if(toggle.className == "circle light-theme"){
        // dark mode
        toggle.classList.add("dark-theme");
        toggle.classList.remove("light-theme");
        toggle.src = "../images/icons/sun.png";
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
    }
    else {
        // light mode
        toggle.classList.remove("dark-theme");
        toggle.classList.add("light-theme");
        toggle.src = "../images/icons/moon.png";
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
    }
}