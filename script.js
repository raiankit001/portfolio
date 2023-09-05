const hamburger = document.querySelector('.hamburger');
const sideNav = document.querySelector('.sideMenu');
const navLinks = document.querySelectorAll('.navLinks')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('is-active');
    sideNav.classList.toggle('is-active');
})

// preloader

const hello = document.getElementById('hello')
const greet = ["hello","Bonjour","स्वागत हे","Ciao","Olá","おい","Hallå","Guten tag","Hallo"]
const over = document.querySelector('.over')
const preloader = document.querySelector('.preloader')
const body = document.getElementById('body')

    

let count=0;

let interval = setInterval(() => {
    count+=1
    if(count<(greet.length-1)){
        hello.innerHTML = greet[count]
    }
    else{
        preloader.classList.toggle('over')
        clearInterval(interval)
    }
}, 200);
        