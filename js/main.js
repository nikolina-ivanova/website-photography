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
        navIcon.src = "images/icon-close.png";
    }else{
    navLinks.className = "nav-links";
    navIcon.src = "images/icon-open.png";
    }
}