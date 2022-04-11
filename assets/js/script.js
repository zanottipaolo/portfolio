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

// Change Navbar style when scrolling
window.onscroll = function (e) {
    let div = document.getElementById('navbar');

    if(window.scrollY==0){
        div.classList.remove("bg-base-100");
        div.classList.add("bg-transparent");

        div.classList.add("py-6");
        div.classList.remove("py-4");
    }
    else{
        div.classList.add("bg-base-100");
        div.classList.remove("bg-transparent");

        div.classList.add("py-4");
        div.classList.remove("py-6");
    }
}