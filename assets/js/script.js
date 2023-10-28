// Display current year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear()

// Typing Animation in the Hero section
let typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 2000,
  loop: true,
  loopCount: Infinity,
  smartBackspace: true,
})

/* Show/Hide Mobile menu */

// open and close menu on click
function toggleMenu() {
  document.getElementById("menu").classList.toggle("hidden")
  document.getElementById("bar-menu").classList.toggle("hidden")
}

// close menu when click on links
function clickOnCheckbox() {
  document.getElementById("checkMenu").click()
}

// close menu when click outside of it
let mobmenu = document.getElementById("header")
document.addEventListener("click", (event) => {
  if (!mobmenu.contains(event.target)) {
    if (!document.getElementById("menu").classList.contains("hidden")) {
      clickOnCheckbox()
    }
  }
})

// Filter projects
function filterProjects(data) {
  let allProjects = document.getElementsByClassName("pro-all")

  // // Clean hidden elements at start && Add Hidden class on condition
  for (let i = 0; i < allProjects.length; i++) {
    allProjects[i].classList.remove("hidden")

    if (!allProjects[i].classList.contains(data))
      allProjects[i].classList.toggle("hidden")
  }
}

// Progress Bar
function handleProgressBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  let scrolled = (winScroll / height) * 100
  document.getElementById("p-bar").value = scrolled
}

// when user scrolls call this function
window.onscroll = function () {
  scrollFunctionBtn()
  handleProgressBar()
  activeColor()
}

/* Back to top */

// Back to top button
let btn = document.getElementById("btn-top")

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    btn.style.display = "block"
  else btn.style.display = "none"
}

// When the user clicks on the button, scroll to the top of the document
btn.addEventListener("click", backToTop)

function backToTop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

/* Scrollspy (active color) */

let section = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("#menu-content li a")

function activeColor() {
  section.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute("id")

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("font-bold")
        if (id != "hero") {
          document
            .querySelector("#menu-content li a[href*=" + id + "]")
            .classList.add("font-bold")
        }
      })
    }
  })
}

/* CHANGE THEME */

const html = document.documentElement
const themeButtons = document.querySelectorAll("[data-set-theme]")

html.dataset.theme = localStorage.getItem("theme") ?? "halloween"

themeButtons.forEach((button) => {
  const theme = button.dataset.setTheme

  button.addEventListener("click", () => {
    html.dataset.theme = theme
    localStorage.setItem("theme", theme)
    for (let i = 0; i < themeButtons.length; i++) {
      themeButtons[i].classList.remove("outline")
    }
    button.classList.add("outline")
  })
})
