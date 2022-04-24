// Display current year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();

// Typing Animation in the Hero section
let typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 2000,
    loop: true,
    loopCount: Infinity,
    smartBackspace: true,
});

// Back to top button
let btn = document.getElementById("btn-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        btn.style.display = "block";
    else 
        btn.style.display = "none";
}

// When the user clicks on the button, scroll to the top of the document
btn.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}