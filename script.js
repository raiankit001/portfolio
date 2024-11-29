const hamburger = document.querySelector('.hamburger');
const sideNav = document.querySelector('.sideMenu');
const navLinks = document.querySelectorAll('.navLinks')



// let screenLog = document.querySelector(".magnet-btn");
// document.addEventListener("mousemove", logKey);

// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }




const magnetButton = document.querySelector(".magnet-btn")
document.addEventListener("mousemove",keyLog)

function keyLog(e){
    const rect = magnetButton.getBoundingClientRect();
    const X = e.screenX - rect.left - rect.width/2
    const Y = e.screenY - rect.top - rect.height/2

    const maxDistance = 50;

    // Limit the movement of the button (the closer the mouse, the stronger the effect)
    const offsetX = Math.min(Math.max(X, -maxDistance), maxDistance);
    const offsetY = Math.min(Math.max(Y, -maxDistance), maxDistance);

    // Log the distances for debugging
    console.log("X/Y", Math.floor(X), Math.floor(Y), " ---- ", "offsetX/Y", Math.floor(offsetX), Math.floor(offsetY));

    // Apply smooth translation based on the distance (adjust for smooth effect)
    magnetButton.style.transform = `translate(${offsetX / 5}px, ${offsetY / 5}px)`;
}





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
        








