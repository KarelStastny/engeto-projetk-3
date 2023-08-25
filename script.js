// script.js
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const iconHamburger = document.querySelector("#icHamburger")
const iconCross = document.querySelector("#icCross")


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  iconHamburger.classList.toggle("hidden")
  iconCross.classList.toggle("hidden")



});

let hledani = document.querySelector(".one-link")


console.log(hledani);


// přepínání modu
const toggleButton = document.querySelector('.toggle-button');
toggleButton.addEventListener('click', () => {
  document.querySelector("body").classList.toggle("dark-mode")
  document.querySelector("header").classList.toggle("dark-mode")
  document.querySelector(".one-link").classList.toggle("dark-mode-nav")


let body = document.querySelector("body")
  if (body.classList.contains('dark-mode')) {
      toggleButton.textContent = 'Light';
  } else {
      toggleButton.textContent = 'Dark';
  }
});

document.querySelector('.nav-links').appendChild(toggleButton);


// Kontrola hesla 
function checkPassword() {
  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;
  const messageElement = document.getElementById('message');

  if (password1 === password2) {
    messageElement.textContent = 'Hesla se shodují';
    messageElement.classList.remove('error');
    messageElement.classList.add('success');
  } else {
    messageElement.textContent = 'Hesla se neshodují';
    messageElement.classList.remove('success');
    messageElement.classList.add('error');
  }
}


// Sroll Arrow
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    // Od horní hranice 1000 přidat cassy
    if(window.scrollY > 1){
        toTop.classList.add("active")
        
    } else{
        toTop.classList.remove("active")
    }
})
toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
