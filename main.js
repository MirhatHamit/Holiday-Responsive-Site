//console.log('bağlantı okey')

const header = document.querySelector("header");
//console.log(header)

const menuBtn=document.querySelector('#menu-icon')
//console.log(menuBtn)

const navbar=document.querySelector('.navbar')
//console.log(navbar)

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 60);
});



menuBtn.addEventListener('click',()=>{
    navbar.classList.toggle('open')
})